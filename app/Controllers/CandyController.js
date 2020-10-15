import { ProxyState } from "../AppState.js";
import { candyService } from "../Services/CandyService.js";


//Private
function _draw() {
  let candy = ProxyState.candy;
  let template = ''
  candy.forEach(c => template += c.Template)
  document.getElementById("app").innerHTML = template
}

//Public
export default class CandyController {
  constructor() {
    ProxyState.on("candy", _draw);
    console.log("controller");
    _draw()
  }

  addToCart(id) {
    candyService.addToCart(id)
  }

  makeMoney() {
    candyService.makeMoney()
  }

}
