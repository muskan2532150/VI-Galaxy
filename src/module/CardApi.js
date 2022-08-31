import create from './ceateElement.js';
import { Home, arr } from './Import.js';
import getLike from './LikeApi.js';
import popStruct from './popup.js';

const url = 'http://api.tvmaze.com/shows/1/episodes?specials=1';

const createcard = (data) => {
  const mainDiv = create('div', undefined, Home);
  getLike();
  [...data].forEach((el, index) => {
    if (el.image?.medium) {
      arr[index] = 0;
     homePage(el,mainDiv,index);
     popStruct(el,index);
    }
  });
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
