import create from "./ceateElement.js";
import { pop } from "./Import.js";

const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HXiyRBssDCt7xgEOUDxr/comments`;
//  https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HXiyRBssDCt7xgEOUDxr/comments?item_id=0
const popStruct = async (el, index) => {
    const mainDiv = create('div', ['main-pop'], pop);
    create('i', ['fa-solid', 'fa-xmark'], mainDiv);
    const imgDiv = create('div', ['img-head'], mainDiv);

    const img = create('img', undefined, imgDiv);
    img.src = el.image['original'];
    img.alt = el.name;
    const h3 = create('h3', ['popupHeader'], imgDiv);
    h3.append(el.name);
    const para = create('div', ['summary'], mainDiv);
    const pText = create('p', undefined, para);
    pText.append(el.summary);
    const itemDiv = create('div', ['item-info'], mainDiv);
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
    const h31 = create('h3', ['commentCount'], mainDiv);
    h31.append('Comments');
    getComment(index);
    const comment = create('div', ['comment-content'], mainDiv);
    comment.id = index;
    const commentDiv = create('div', ['commentFormsec'], mainDiv);
    const h3Text = create('h3', ['leave-cut'], commentDiv);
    h3Text.append('Leave a comment');
    const form = create('form', ['form'], commentDiv);
    form.id=index;
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
    button.append( 'Comment');

    const Form = document.querySelector('.form');
     Form.addEventListener('submit',(e)=>{
        e.preventDefault();
        let id =index;
        if(index.toString()===e.target.id)
        {
            const names=document.querySelector('.names').value;
            const comm =document.querySelector('.textarea').value;
            setComment(e.target.id,names,comm);
               getComment(e.target.id);
        }
     });
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

const getComment = async (id) => {
    console.log(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HXiyRBssDCt7xgEOUDxr/comments?item_id=0`);
    const comment = document.querySelector('.comment-content')
    fetch(`  https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HXiyRBssDCt7xgEOUDxr/comments?item_id=0`)
        .then((response) => response.json)
        .then((data) => {
            console.log( data.result);
            // [...data].forEach((el, index) => {
            //     const pText = create('p', ['comment'], comment);
            //     pText.append(el.comment);
            // })
        })
}

export default popStruct;