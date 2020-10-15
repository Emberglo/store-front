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
            <h3>${this.title}</h3>
            <h5>${this.price}</h5>
            <h5>${this.qty}</h5>
            <button class="btn btn-primary" onclick="app.candyController.addToCart('${this.id}')">Add To Cart</button>
        </div>
        `
    }

    get CartTemplate() {

        return /*html*/`
        <div class="row">
            <div class="col-6 d-flex">
                <img src="${this.img}" class="img-fluid" alt="">
                <p>${this.title}</p>
                <p>${this.price}</p>
            </div>
        </div >`
            

    }
}
