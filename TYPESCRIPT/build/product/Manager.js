"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const Item_1 = require("./Item");
const ShoppingCart_1 = require("./ShoppingCart");
const Stock_1 = require("./Stock");
class Manager {
    constructor() {
        this._shoppingCart = ShoppingCart_1.ShoppingCart.getInstance();
        this._stock = Stock_1.Stock.getInstance();
        this._errorText = "Error: amount must more than 0";
        // Do nothing
    }
    addItemToCart(name, amount) {
        if (amount <= 0) {
            return this._errorText;
        }
        let item = new Item_1.Item(name, amount);
        let isRemove = this._stock.removeItem(item);
        if (isRemove) {
            this._shoppingCart.addItem(item);
            return `Success: Add ${name}to cart completed!`;
        }
        return `Error: Add ${name} to cart incompleted!, ${name} in stock not enough.`;
    }
    removeItemFromCart(name) {
        let amount = this._shoppingCart.removeItem(name);
        if (amount > 0) {
            let item = new Item_1.Item(name, amount);
            this._stock.addItem(item);
            return `Success: Remove ${name} from cart completed!`;
        }
        return `Error: No ${name} in cart.`;
    }
    checkout() {
        // let cartItem: Array<Item> = this._shoppingCart.removeAllItem();
        // if (cartItem.length === 0) {
        //   return "Cannot checkout, your cart is empty.";
        // }
        // let destination: string = "C:\\Users\\natthapongjie\\Desktop\\receipt.txt";
        return "Can't checkout.";
    }
    getCartItems() {
        return `${this._shoppingCart.getItems()}\n`;
    }
    addItemToStock(name, amount) {
        if (amount <= 0) {
            return this._errorText;
        }
        try {
            let item = new Item_1.Item(name, amount);
            this._stock.addItem(item);
            return `Success: Add ${name} completed!`;
        }
        catch (_a) {
            return `Error: Add ${name} failed!`;
        }
    }
    removeItemFromStock(name, amount) {
        if (amount <= 0) {
            return this._errorText;
        }
        let item = new Item_1.Item(name, amount);
        let isRemove = this._stock.removeItem(item);
        if (isRemove) {
            return `Success: Remove ${name} completed!`;
        }
        return `Error: Remove ${name} failed!, ${name} in stock not enough.`;
    }
    getStockItems() {
        return `${this._stock.getItems()}\n`;
    }
}
exports.Manager = Manager;
//# sourceMappingURL=Manager.js.map