import CandyController from "./Controllers/CandyController.js";

import CartController from "./Controllers/CartController.js"

class App {
  
  candyController = new CandyController();

  cartController = new CartController()
}

window["app"] = new App();
