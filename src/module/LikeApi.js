import { home } from './Import.js';

const urlLike = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UUylOKb37iCx1pUBEwLt/likes';

const Like = class {
  static getLike = async () => {
    await fetch(urlLike)
      .then((response) => response.json())
      .then((data) => {
        const pText = document.querySelectorAll('.card-p');
        [...data].forEach((el, index) => {
          [...pText][index].innerHTML = `${el.likes} likes`;
        });
      });
  };

  static setLike = async (id) => {
    await fetch(urlLike, {
      method: 'POST',
      body: JSON.stringify({
        item_id: `${id}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  };
};

home.addEventListener('click',async (e) => {
  if (e.target.className.toString() === 'fa-solid fa-heart'.toString()) {
    const { id } = e.target.parentNode.parentNode.parentNode;
   await Like.setLike(id);
    const error = document.querySelectorAll('.cards p');
    [...error].forEach(async (el) => {
      el.innerHTML = '';
     await Like.getLike();
    });
  }
});

export default Like;
