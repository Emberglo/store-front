import CandyController from "./Controllers/CandyController.js";

class App {
  candyController = new CandyController();
}

window["app"] = new App();
