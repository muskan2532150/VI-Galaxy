import create from './ceateElement.js';
import { Home, arr, overLay,pop } from './Import.js';
import getLike from './LikeApi.js';
import { popStruct, setComment,getComment } from './popup.js';

const url = 'http://api.tvmaze.com/shows/1/episodes?specials=1';

const createcard = (data) => {
  const mainDiv = create('div', undefined, Home);
  getLike();
  [...data].forEach((el, index) => {
    if (el.image?.medium) {
      arr[index] = 0;
     homePage(el,mainDiv,index);
     const mainDivpop = create('div', ['main-pop'], pop);
     mainDivpop.id=index+90;
     popStruct(el,index,mainDivpop);
    }
  });
  const mainPop = document.querySelectorAll('.main-pop');
 
  const btnComment = document.querySelectorAll('.btncomment');
  [...btnComment].forEach(btn=>{
    btn.addEventListener('click',(e)=>{
    overLay.style.display='flex';
    let commentId = e.target.parentNode.parentNode.id;
     mainPop[commentId].style.display='flex';
     document.body.style.overflow='hidden';
  
  })
});

  const Form = document.querySelectorAll('.form');
  [...Form].forEach(forms=>{
    forms.addEventListener('submit', (e) => {
      e.preventDefault();
      if (index.toString() === e.target.id) {
        const names = document.querySelector('.names').value;
        const comm = document.querySelector('.textarea').value;
        setComment(e.target.id, names, comm);
        getComment(e.target.id);
      }
    });
  })

  const closeBtn = document.querySelectorAll('.fa-xmark');
  [...closeBtn].forEach(close=>{
    close.addEventListener('click', (e) => {
      overLay.style.display = 'none';
       mainPop[(e.target.parentNode.id)-90].style.display= 'none';
      document.body.style.overflow = 'visible';
    });
  })
};

const homePage = (el,mainDiv,index) => {
  const cards = create('div', ['cards'], mainDiv);
  cards.id = index;
  const img = create('img', ['card-img'], cards);
  img.src = el.image.medium;
  img.alt = el.name;
  const cardBody = create('div', undefined, cards);
  const h1Text = create('h3', undefined, cardBody);
  h1Text.append(el.name);
  const likeDiv = create('div', undefined, cardBody);
  create('i', ['fa-solid', 'fa-heart'], likeDiv);
  create('p', ['card-p'], likeDiv);
  const btnDiv = create('div', ['btndiv'], cards);
  const buttonText = create('button', ['btncomment'], btnDiv);
  buttonText.append('Comment');
  const buttonText1 = create('button', ['btnreserv'], btnDiv);
  buttonText1.append('Reservation');

}

const getData = async () => {
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      createcard(data);
    });
};

export default getData;
