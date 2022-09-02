import create from './ceateElement.js';
import { counter, countercomment } from './counter.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UUylOKb37iCx1pUBEwLt/comments';
const setComment = async (id, name, comment) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id: `${id}`,
      username: `${name}`,
      comment: `${comment}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const showComment = async (data, id, h31) => {
  const comment = document.querySelectorAll('.comment-content');
  if (countercomment([...data])) {
    [...data].forEach((el) => {
      const pText = create('p', ['comment'], comment[id]);
      pText.append(`${el.creation_date}  ${el.username} : ${el.comment} `);
    });
    counter[id] = countercomment([...data]);
    h31.append(`Comments(${counter[id]})`);
  }
};

const getComment = async (id, h31) => {
  await fetch(`${url}?item_id=${id}`)
    .then((response) => response.json()).then((data) => {
      showComment(data, id, h31);
    });
};

export { setComment, getComment, showComment };