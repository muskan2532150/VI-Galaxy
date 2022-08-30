 import "./scss/main.css";
import create from "./module/ceateElement.js";
import {Home} from "./module/Import.js";


const mainDiv = create('div',undefined,Home);
// Array from API
 const cards = create('div',['cards'],mainDiv);
 cards.id=1;
const img = create('img',['card-img'],cards);
img.src = '#';
img.alt = 'Img';
const cardBody = create('div',undefined,cards);
const h1Text = create('h1',undefined,cardBody);
h1Text.append("first card");