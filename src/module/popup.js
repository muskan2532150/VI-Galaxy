import create from './ceateElement.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HXiyRBssDCt7xgEOUDxr/comments';
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

const showComment = async (data, id) => {
  const comment = document.querySelectorAll('.comment-content');
  [...data].forEach((el) => {
    const pText = create('p', ['comment'], comment[id]);
    pText.append(`${el.creation_date}  ${el.username} : ${el.comment} `);
  });
};

const getComment = async (id) => {
  await fetch(`${url}?item_id=${id}`)
    .then((response) => response.json()).then((data) => {
      showComment(data, id);
    });
};

export { setComment, getComment, showComment };