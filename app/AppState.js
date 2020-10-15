import Candy from "./Models/Candy.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Candy[]} */
  candy = [new Candy({ title: "Skittles", img: "https://www.gilturners.com/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0984.png", price: 1.00, qty: 99, id: "laksdjf" }), new Candy({ title: "PB M&M's", img: "https://cdn.influenster.com/media/variety/image/cb397ee8-c488-4394-8448-fe819f36fc2e.png.750x750_q85.png", price: 1.00, qty: 50, id: "abcdefg" }), new Candy({ title: "Milky Way", img: "https://cdn.venees.com/ext/uploads/261882-2.png", price: 1.00, qty: 30, id: "jkditfr" }), new Candy({ title: "Kit-Kat", img: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=2000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2018%2F10%2F193520kit20kat-2000.png", price: 1.00, qty: 75, id: "poritug" }), new Candy({ title: "Twix", img: "https://cdn.shopify.com/s/files/1/0270/6410/7107/products/Screen-Shot-2019-11-04-at-5.02.56-PM_600x.gif?v=1572906027", price: 1.50, qty: 60, id: "yurhfnq" }), new Candy({ title: "Trolli", img: "https://dp3uqzkpcfq4k.cloudfront.net/image/2666", price: .75, qty: 25, id: "qitryup" }), new Candy({ title: "Reeses", img: "https://smartlabel.hersheys.com/images/9a531c52-89e3-4db5-9cc0-d51ef959f002.png", price: 1.00, qty: 60, id: "lktifuk" }), new Candy({ title: "Lettuce", img: "https://www.kroger.com/product/images/xlarge/front/0000000094061", price: .25, qty: 20, id: "yruhtjy" })]

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
