
 class Canvas extends HTMLElement {
    
    constructor(){
        super()

    }connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

const title = document.createElement('div')
title.setAttribute('class', 'canvas1')


const style = document.createElement("style");
style.textContent = `
.canvas1{
    width: 1080;
    height: 540;
}`

shadow.appendChild(style);
shadow.appendChild(title);

}

}

customElements.define('my-canvas', Canvas)



