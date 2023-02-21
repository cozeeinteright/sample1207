let div = document.createElement("div");
let el = document.querySelector('h1');
div.append("Some text");
el.append(div)


console.log(el.childNodes);