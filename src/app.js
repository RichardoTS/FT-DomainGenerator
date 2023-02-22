/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // console.log("Hello Rigo from the console!");
};

var art = ["the", "a"];
var adj1 = ["big", "small", "gigantic", "tiny", "huge"];
var adj2 = ["red", "blue", "yellow", "green", "pink"];
var noun = ["dog", "whale", "table", "laptop", "keyboard"];
var dom = [".com", ".net", ".org", ".io", ".cl", ".asdf"];

for (let i = 0; i < art.length; i++) {
  for (let j = 0; j < adj1.length; j++) {
    for (let k = 0; k < adj2.length; k++) {
      for (let l = 0; l < noun.length; l++) {
        for (let p = 0; p < dom.length; p++) {
          // console.log(`${art[i]}${adj1[j]}${adj2[k]}${noun[l]}${dom[p]}`);
          let div = document.createElement("div");
          div.innerText = `${art[i]}${adj1[j]}${adj2[k]}${noun[l]}${dom[p]}`;
          document.body.appendChild(div).style.padding = "10px";
        }
      }
    }
  }
}
// let asdf = adj1[i];
// let asdf1 = document.getElementsByTagName("p");

// for (let p of asdf1) {
//   p.innerHTML = "asdfahora sí? !!!!!!!!! >.<" + " asf";
// }
