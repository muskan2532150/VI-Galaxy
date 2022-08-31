import { Home, arr } from './Import.js';

const urlLike = ' https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HXiyRBssDCt7xgEOUDxr/likes';

const getLike = async () => {
  await fetch(urlLike)
    .then((response) => response.json())
    .then((data) => {
      const pText = document.querySelectorAll('.card-p');
      [...data].forEach((el, index) => {
        [...pText][index].innerHTML = `${el.likes} likes`;
        arr[index] = el.likes;
      });
    });
};

const setLike = async (id) => {
  fetch(urlLike, {
    method: 'POST',
    body: JSON.stringify({
      item_id: `${id}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

Home.addEventListener('click', (e) => {
  if (e.target.className.toString() === 'fa-solid fa-heart'.toString()) {
    const { id } = e.target.parentNode.parentNode.parentNode;
    setLike(id);
    arr[id] += 1;
    const error = document.querySelectorAll('.cards p');
    [...error].forEach((el, index) => {
      el.innerHTML = '';
      el.innerHTML = `${arr[index]} likes`;
    });
  }
});
export default getLike;