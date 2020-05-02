
import txt from './text.txt'
import {add} from "./math";

let x = 123;
let y = 321;

let result = `${x} + ${y} = ${add(x,y)}`;

document.getElementById("hello").innerText = result;

document.getElementById('alert-text').onclick = () => alert(txt);
