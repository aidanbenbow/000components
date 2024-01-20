

export class Navbar extends HTMLElement {
    
    constructor(){
        super()

    }connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

const title = document.createElement('h3')
title.setAttribute('class', 'title')
title.innerHTML = 'photoApp'

const style = document.createElement("style");
style.textContent = `
.title {
  color: red;
}`

shadow.appendChild(style);
shadow.appendChild(title);

}
}

