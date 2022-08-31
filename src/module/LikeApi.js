import { Home } from "./Import";

const urlLike = ' https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RJjXXfLZVNow7n5VSnHJ/likes';

const getLike = async () => {
  await fetch(urlLike)
    .then((response) => response.json())
    .then((data) => {
      const pText = document.querySelectorAll('.card-p');
      console.log([...data]);
      [...data].forEach((el, index) => {
        [...pText][index].append(`${el.likes} likes`);
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
// // like button event listener
// Home.addEventListener('click', (e) => {
//   const Like = document.querySelectorAll('.fa-solid');
// console.log(Like);
// Like.forEach((like) => {
//   like.addEventListener('click', (e) => {
//     e.preventDefault();
//     e.classlist.toggle('fa-heart');
//     setLike(e.target.id);
//     console.log(e.target.id);
//     getLike();
//   });
// });
// });




Home.addEventListener('click',(e)=>{

  let id = e.target.parentNode.parentNode.parentNode.id;
  setLike(id);
  const error = document.getElementsByTagName('.cards p');
  console.log([...error].remove());
  getLike();
});
export default getLike;