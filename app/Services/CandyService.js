import { ProxyState } from "../AppState.js";
import Candy from "../Models/Candy.js";

class CandyService {
  // addValue() {
  //   ProxyState.values = [...ProxyState.values, new Value({ title: Math.random() })]
  // }

  constructor() {
    console.log("service");
  }

  addToCart(id) {
    let boughtCandy = ProxyState.candy.find(c => c.id == id)
    
    console.log(boughtCandy);
    ProxyState.cart = [...ProxyState.cart, boughtCandy]
    console.log(ProxyState.cart);
  }
  
  makeMoney() {
    money += 10
    document.getElementById('totalMoney').innerHTML = `${money}`
    console.log(money);
  }

}

export const candyService = new CandyService();

