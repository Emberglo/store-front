import { ProxyState } from "../AppState.js";
import Cart from "../Models/Cart.js";

class CartService {
    // addValue() {
    //   ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
    // }

    constructor() {
        console.log("cartservice");
    }

    // addToCart(id) {
    //     let boughtCandy = ProxyState.candy.find(c => c.id == id)

    //     // console.log(boughtCandy);
    //     ProxyState.cart = [...ProxyState.cart, boughtCandy]
    //     // console.log(ProxyState.cart);
    // }

}

export const cartService = new CartService();

