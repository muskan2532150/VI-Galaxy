import create from './ceateElement.js';
import {
  Home, arr, overLay, pop,
} from './Import.js';
import getLike from './LikeApi.js';
import { getComment, setComment } from './popup.js';
import { counter, counterItem } from './counter.js';
import { popStruct, homePage } from './structure.js';

const date = new Date();
const todayDate = date.toLocaleDateString('en-GB').split('/').join('-');

const url = 'https://api.tvmaze.com/shows/1/episodes?specials=1';

const createcard = (data) => {
  const mainDiv = create('div', undefined, Home);
  getLike();
  [...data].forEach((el, index) => {
    if (el.image?.medium) {
      arr[index] = 0;
      counter[index] = 0;
      homePage(el, mainDiv, index);
      const mainDivpop = create('div', ['main-pop'], pop);
      mainDivpop.id = index + 90;
      popStruct(el, index, mainDivpop);
    }
  });

  const link = document.querySelectorAll('.link');
  link[0].innerHTML = `Home(${counterItem(arr)})`;

  const mainPop = document.querySelectorAll('.main-pop');

  const btnComment = document.querySelectorAll('.btncomment');
  [...btnComment].forEach((btn) => {
    btn.addEventListener('click', (e) => {
      overLay.style.display = 'flex';
      const commentId = e.target.parentNode.parentNode.id;
      mainPop[commentId].style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  const Form = document.querySelectorAll('.form');
  [...Form].forEach((forms, index) => {
    forms.addEventListener('submit', (e) => {
      e.preventDefault();
      const formId = Number(e.target.id);
      if (index === formId - 40) {
        const names = document.querySelectorAll('.names');
        const comm = document.querySelectorAll('.textarea');
        setComment(formId - 40, names[index].value, comm[index].value);
        commentShow(formId);
        forms.reset();
      }
    });
  });

  const closeBtn = document.querySelectorAll('.fa-xmark');
  [...closeBtn].forEach((close) => {
    close.addEventListener('click', (e) => {
      overLay.style.display = 'none';
      mainPop[(e.target.parentNode.id) - 90].style.display = 'none';
      document.body.style.overflow = 'visible';
    });
  });
};

const getData = async () => {
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      createcard(data);
    });
};

const commentShow = async (formId)=> {
        const counterAll = document.querySelectorAll('.commentCount');
        const commentAll = document.querySelectorAll('.comment-content');
        commentAll[formId - 40].innerHTML = ' ';
        counterAll[formId - 40].innerHTML = ' ';

       await getComment(formId-40,counterAll[formId-40]);
}

export default getData;
