
export class Button extends HTMLElement {
    
    constructor(){
        super()
        this.attachShadow({ mode: "open" })

    }
    
    connectedCallback() {
const icon = this.getAttribute('data-icon')
const variant = this.getAttribute('data-variant')
console.log(variant)

    this.shadowRoot.innerHTML = `
    <style>${css}</style>
    <button class='btn'>
    ${
        (icon && `<ion-icon name="${icon}"></ion-icon>`)|| ''
    }
    <span class="label">
    <slot></slot>
    </span>
    </button>
    `
if(variant){
    this.shadowRoot.querySelector('.btn').classList.add(`variant-${variant}`)
}

}
}

const css = `
.btn{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    gap: 8px;
    
    background-color: aqua;
    border-radius: 5px;
    color: azure;
    border: none;
    outline: none;
    cursor: pointer;
    
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    
    }

    .variant-error{
        background-color: red;
        color: seashell;
    }
    
    .variant-success{
        background-color: rgb(76, 16, 187);
        color: rgb(223, 194, 173);
    }
`