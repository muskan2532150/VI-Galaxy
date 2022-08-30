import create from "./ceateElement.js";
import {Home} from "./Import.js";

const url = 'https://api.tvmaze.com/shows/1/episodes?specials=1';

const createcard =  (data) =>{
    const mainDiv = create('div',undefined,Home);
     [...data].forEach(el => {
        if(el.image['medium'] !== null)
        {
            const cards = create('div', ['cards'], mainDiv);
            cards.id = el.id;
            const img = create('img', ['card-img'], cards);
            img.src = el.image['medium'];
            img.alt = el.name;
            const cardBody = create('div', undefined, cards);
            const h1Text = create('h3', undefined, cardBody);
            h1Text.append(el.name);
            const buttText = create('button', undefined, cardBody);
            const buttonText = create('button', undefined, cards);
            buttonText.append('Comment');
            const buttonText1 = create('button', undefined, cards);
            buttonText1.append('Reservation');
        }
    });
}

const getData = async () => {
    await fetch(url)
   .then((response) => response.json())
   .then((data)=>{
      createcard(data);
   })
};

export  default getData;
