"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
const Item_1 = require("./Item");
class ShoppingCart {
    constructor() {
        this._cart = new Map();
    }
    static getInstance() {
        if (this._singleInstance === null) {
            this._singleInstance = new ShoppingCart();
        }
        return this._singleInstance;
    }
    addItem(item) {
        this._cart.set(item.getName, item.getAmount);
    }
    /**
     * TODO  change this after ToString util finished.
     */
    getItems() {
        return this._cart;
    }
    removeItem(name) {
        let amount = this._countItemInCart(name);
        if (amount > 0) {
            this._cart.delete(name);
        }
        return amount;
    }
    removeAllItem() {
        let items = new Array();
        for (let entry of this._cart) {
            items.push(new Item_1.Item(entry[0], entry[1]));
        }
        this._cart.clear();
        return items;
    }
    _countItemInCart(name) {
        if (this._cart.has(name)) {
            return this._cart.get(name);
        }
        return 0;
    }
}
exports.ShoppingCart = ShoppingCart;
ShoppingCart._singleInstance = null;
//# sourceMappingURL=ShoppingCart.js.map