import { ProxyState } from "../AppState.js";
import { cartService } from "../Services/CartService.js";


//Private
function _draw() {
    let cart = ProxyState.cart;
    let template = ''
    cart.forEach(c => template += c.CartTemplate)
    document.getElementById("cart").innerHTML = template
}

//Public
export default class CartController {
    constructor() {
        ProxyState.on("cart", _draw);
        console.log("cartcontroller");
         _draw()
    }


}
