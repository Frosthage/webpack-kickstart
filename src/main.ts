
import txt from './text.txt'
import {add} from "./math";

const s = require('./style.scss');

export function txtFunc() {
  alert(txt);
}

let x = 123;
let y = 321;

let result = `${x} + ${y} = ${add(x,y)}`;

document.getElementById("hej").innerText = result;

document.getElementById('alert-text').onclick = () => alert(txt);
