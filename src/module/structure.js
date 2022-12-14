import Comment from './popup.js';
import create from './ceateElement.js';

const Structure = class{
// Create structure for Cards in Home page
 static cardStruct = (el, mainDiv, index) => {
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
  buttonText.type = 'button';
  const buttonText1 = create('button', ['btnreserv'], btnDiv);
  buttonText1.append('Reservation');
  buttonText1.type = 'button';
};

// Create structure for Pop up window
 static popStruct = (el, index, mainDivpop) => {
  create('i', ['fa-solid', 'fa-xmark'], mainDivpop);
  const imgDiv = create('div', ['img-head'], mainDivpop);
  const img = create('img', undefined, imgDiv);
  img.src = el.image.original;
  img.alt = el.name;
  const h3 = create('h3', ['popupHeader'], imgDiv);
  h3.append(el.name);
  const para = create('div', ['summary'], mainDivpop);
  const pText = create('p', ['sumpara'], para);
  pText.append(el.summary);
  const itemDiv = create('div', ['item-info'], mainDivpop);
  const span = create('span', ['timecont'], itemDiv);
  const p1 = create('p', undefined, span);
  p1.append(`Season: ${el.season}`);
  const p2 = create('p', undefined, span);
  p2.append(`Airdate: ${el.airdate}`);
  const span1 = create('span', ['timecont'], itemDiv);
  const p3 = create('p', undefined, span1);
  const p4 = create('p', undefined, span1);
  p3.append(`Rating:  ${el.rating.average}`);
  p4.append(`Runtime:  ${el.runtime}m`);
  const h31 = create('h3', ['commentCount'], mainDivpop);
  create('div', ['comment-content'], mainDivpop);
  const commentDiv = create('div', ['commentFormsec'], mainDivpop);
  const h3Text = create('h3', ['leave-cut'], commentDiv);
  h3Text.append('Leave a comment');
  const form = create('form', ['form'], commentDiv);
  form.id = `${index + 40}`;
  const text = create('input', ['names'], form);
  text.type = 'text';
  text.setAttribute('required', '');
  text.placeholder = 'Your name please';
  const input = create('textarea', ['textarea'], form);
  input.name = 'comment';
  input.setAttribute('required', '');
  input.cols = 30; input.rows = 10;
  input.placeholder = 'Your comment in here';
  const button = create('button', undefined, form);
  button.type = 'submit';
  button.name = 'comment';
  button.append('Comment');
  Comment.getComment(index, h31);
};

};




export default Structure;
