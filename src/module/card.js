import create from './ceateElement.js';
import {
  home, arr, overLay, pop,
} from './Import.js';
import Like from './LikeApi.js';
import Comment from './popup.js';
import { counterItem } from './counter.js';
import Structure from './structure.js';

const url = 'https://api.tvmaze.com/shows/1/episodes?specials=1';

const createcard = (data) => {
  const mainDiv = create('div', undefined, home);
  Like.getLike();
  [...data].forEach((el, index) => {
    if (el.image?.medium) {
      arr[index] = 0;
      Structure.cardStruct(el, mainDiv, index);
      const mainDivpop = create('div', ['main-pop'], pop);
      mainDivpop.id = index + 90;
      Structure.popStruct(el, index, mainDivpop);
    }
    // Scroll Js
    ScrollReveal().reveal('.cards',{ delay: 500 });
  });

  // count no. of cards and display with Home
  const link = document.querySelectorAll('.link');
  link[0].innerHTML = `Home(${counterItem(arr)})`;

  const mainPop = document.querySelectorAll('.main-pop');

  // pop-up Display Event
  const btnComment = document.querySelectorAll('.btncomment');
  [...btnComment].forEach((btn) => {
    btn.addEventListener('click', (e) => {
      overLay.style.display = 'flex';
      const commentId = e.target.parentNode.parentNode.id;
      mainPop[commentId].style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  // Comment/Sumit btn in form event
  const form = document.querySelectorAll('.form');
  [...form].forEach((forms, index) => {
    forms.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formId = Number(e.target.id);
      if (index === formId - 40) {
        const names = document.querySelectorAll('.names');
        const comm = document.querySelectorAll('.textarea');
        await Comment.postComment(formId - 40, names[index].value, comm[index].value);
        const counterAll = document.querySelectorAll('.commentCount');
        const commentAll = document.querySelectorAll('.comment-content');
        commentAll[formId - 40].innerHTML = ' ';
        counterAll[formId - 40].innerHTML = ' ';
        await Comment.getComment(formId - 40, counterAll[formId - 40]);
        forms.reset();
      }
    });
  });

  // Close pop-up event
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

export default getData;
