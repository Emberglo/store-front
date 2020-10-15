import Candy from "./Models/Candy.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Candy[]} */
  candy = [new Candy({ title: "Skittles", img: "https://www.gilturners.com/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0984.png", price: 1000000, qty: 57, id: "laksdjf" })]

/**@type {Cart[]}*/
  cart = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
