// import {generateId} from "../Utils/GenerateId.js"

export default class Candy {
    constructor(data) {
        this.title = data.title
        this.img = data.img
        this.price = data.price
        this.qty = data.qty
        this.id = data.id
    }

    get Template() {

        return /*html*/`
        <div class="col-3 flex-column card p-2 m-2 candy">
            <img src="${this.img}" class="img-fluid" alt="" srcset=""/>
            ${this.title}
            ${this.price}
            ${this.qty}
            <button onclick="app.candyController.addToCart('${this.id}')">Add To Cart</button>
        </div>
        `
    }
}
