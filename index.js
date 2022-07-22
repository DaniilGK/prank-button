let mainEl = document.documentElement;
let mainElW = mainEl.clientWidth;
let mainElH = mainEl.clientHeight;
let body = document.body;
    body.style.background = "#000";
    body.style.display = "flex";
    body.style.height = "98vh";
    body.style.justifyContent = "center";
    body.style.alignItems = "center";
    body.style.fontSize = "40pt";
    body.style.color = "red";
    body.innerHTML = "Нажми на кнопу, получи прикол!"
let buttAround = document.createElement("div");
let button = document.createElement("div");

function createButton() {
    buttAround.style.position = "absolute";
    buttAround.style.left = "0";
    buttAround.style.right = "0";
    buttAround.style.bottom = "0";
    buttAround.style.top = "0";
    buttAround.style.margin = "auto";
    buttAround.style.padding = "3px";
    buttAround.style.width = "116px";
    buttAround.style.height = "61px";
    
    button.style.position = "relative";
    button.style.display = "flex";
    button.style.justifyContent = "center";
    button.style.alignItems = "center";
    button.style.height = "calc(100% - 6px)";
    button.style.background = "rgb(171 171 171)";
    button.style.border = "3px solid #2196f3"
    button.style.borderRadius = "10px";
    button.style.cursor = "pointer";
    button.style.color = "#FFF";
    button.style.fontSize = "15px"
    button.innerHTML = "ПрИкОл!11)";
    buttAround.append(button);
    body.append(buttAround);
}
createButton()

let funnyWords = ["кскс, я мышка0", "не знаю...", "omg", "я тута", "а я уже вон там", "ты салка"]

buttAround.onmousemove = buttAround.onmouseout = flyButton;
function flyButton(event) {
  let left = Math.floor(Math.random() * (mainElW - 130)) + 1;
  let top = Math.floor(Math.random() * (mainElH - 70)) + 1;
  let word = Math.floor(Math.random() * funnyWords.length);
    if (event.type == 'mousemove') {
      buttAround.style.left = left + "px";
      buttAround.style.top = top + "px";
      button.innerHTML = funnyWords[word];
    }
    if (event.type == 'mouseout') {
      return
    }
}