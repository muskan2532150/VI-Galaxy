import create from "./ceateElement.js";
import { pop } from "./Import.js";

const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/HXiyRBssDCt7xgEOUDxr/comments`

const popStruct = (el, index) => {
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
    const comment = create('div', ['comment-content'], mainDiv);
    comment.id = index;
    const commentDiv = create('div', ['commentFormsec'], mainDiv);
    const h3Text = create('h3', ['leave-cut'], commentDiv);
    h3Text.append('Leave a comment');
    const form = create('form', undefined, commentDiv);
    const text = create('input', undefined, form);
    text.type = 'text';
    text.id = 'username';
    text.placeholder = 'Your name please';
    const input = create('textarea', undefined, form);
    input.name = 'comment';
    input.id = "comment";
    input.cols = 30; input.rows = 10;
    input.placeholder = 'Your comment in here';
    const button = create('input', undefined, form);
    button.type = 'button';
    button.name = 'comment';
    button.value = 'comment';
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
    const comment = document.querySelectorAll('.comment-content')
    fetch(`${url}?item-id=${id}`)
        .then((response) => response.json)
        .then((data) => {
            [...data].forEach((el, index) => {
                const pText = create('p', ['comment'], [...comment][index]);
                pText.append(el.comment);
            })
        })
}

export default popStruct;