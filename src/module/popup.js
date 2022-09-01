import create from "./ceateElement.js";

const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HXiyRBssDCt7xgEOUDxr/comments`;
const popStruct = async (el, index,mainDivpop) => {
  create('i', ['fa-solid', 'fa-xmark'], mainDivpop);
  const imgDiv = create('div', ['img-head'], mainDivpop);
  const img = create('img', undefined, imgDiv);
  img.src = el.image['original'];
  img.alt = el.name;
  const h3 = create('h3', ['popupHeader'], imgDiv);
  h3.append(el.name);
  const para = create('div', ['summary'], mainDivpop);
  const pText = create('p', ['sumpara'], para);
  pText.append(el.summary);
  const itemDiv = create('div', ['item-info'], mainDivpop);
  const span = create('span', undefined, itemDiv);
  const p1 = create('p', undefined, span);
  p1.append(el.season);
  const p2 = create('p', undefined, span);
  p2.append(el.airdate);
  const span1 = create('span', undefined, itemDiv);
  const p3 = create('p', undefined, span1);
  const p4 = create('p', undefined, span1);
  p3.append(el.rating['average']);
  p4.append(el.runtime);
  const h31 = create('h3', ['commentCount'], mainDivpop);
  h31.append('Comments');
   create('div', ['comment-content'], mainDivpop);
  const commentDiv = create('div', ['commentFormsec'], mainDivpop);
  const h3Text = create('h3', ['leave-cut'], commentDiv);
  h3Text.append('Leave a comment');
  const form = create('form', ['form'], commentDiv);
  form.id = `${index + 40}`;
  const text = create('input', ['names'], form);
  text.type = 'text';
  text.placeholder = 'Your name please';
  const input = create('textarea', ['textarea'], form);
  input.name = 'comment';
  input.cols = 30; input.rows = 10;
  input.placeholder = 'Your comment in here';
  const button = create('button', undefined, form);
  button.type = 'submit';
  button.name = 'comment';
  button.append('Comment');
  getComment(index);
}

const setComment = async (id, name, comment) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      "item_id": `${id}`,
      "username": `${name}`,
      "comment": `${comment}`
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
}

const getComment = async (id) =>{
    await fetch(`${url}?item_id=${id}`)
   .then((response)=>response.json()).then((data)=>{
showComment(data,id);
   });
}

const showComment = async (data,id) => {
  const comment = document.querySelectorAll('.comment-content');
  [...data].forEach((el) => {
    const pText = create('p', ['comment'], comment[id]);
    pText.append(`${el.creation_date}  ${el.username} : ${el.comment} `);
  })
}

export { popStruct,setComment,getComment};