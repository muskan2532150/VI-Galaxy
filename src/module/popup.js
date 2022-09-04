import create from './ceateElement.js';
import { counterComment } from './counter.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UUylOKb37iCx1pUBEwLt/comments';

const Comment = class {
  static postComment = async (id, name, comment) => {
    await fetch(url, {
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

  static displayComment = async (data, id, h31) => {
    const comment = document.querySelectorAll('.comment-content');
    if (counterComment([...data])) {
      [...data].forEach((el) => {
        const pText = create('p', ['comment'], comment[id]);
        pText.append(`${el.creation_date}  ${el.username} : ${el.comment} `);
      });
      h31.append(`Comments(${counterComment([...data])})`);
    }
  };

  static getComment = async (id, h31) => {
    await fetch(`${url}?item_id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.error)
          Comment.displayComment(data, id, h31);
      });
  };

};

export default Comment;
