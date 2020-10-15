export default class Candy {
    constructor(data) {
        this.title = data.title
        this.img = data.img
        this.price = data.price
        this.qtyPurchased = data.qtyPurchased
        this.id = data.id
    }

    get Template() {

        return /*html*/`
        <div class="row">
            <div class="col-8 d-flex">
                <img src="${this.img}" alt="">
                <p>${this.title}</p>
                <p>${this.price}</p>
            </div>
            <div class="col-2 d-flex">
                <p>Qty Ordered: <span>${this.qtyPurchased}</span></p>
                <p>Total: $</p>
            </div>
            <div class="col-2 d-flex">
                <button>buy</button>
            </div>
        </div >`

    }
}
