import { ProxyState } from "../AppState.js";
import Candy from "../Models/Candy.js";

class CandyService {
  // addValue() {
  //   ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  // }

  constructor() {
    console.log("service");
  }

  buy(id) {
    let boughtCandy = ProxyState.candy.filter(c => c.id == id)
    // ProxyState.cart = ProxyState.cart.push(boughtCandy)
    console.log(boughtCandy);
 
  }

}

export const candyService = new CandyService();

