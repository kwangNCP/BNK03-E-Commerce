"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = void 0;
const Item_1 = require("./Item");
class Stock {
    constructor() {
        this._stockItem = new Map();
        this._nextAvailableID = 0;
        this.addItem(new Item_1.Item("MILK", 17));
        this.addItem(new Item_1.Item("EGG", 12));
        this.addItem(new Item_1.Item("TEA", 10));
        this.addItem(new Item_1.Item("RICE", 2));
        this.addItem(new Item_1.Item("PORK", 3));
        this.addItem(new Item_1.Item("BROWNIE", 7));
        this.addItem(new Item_1.Item("WATER", 1));
        this.addItem(new Item_1.Item("MASK", 1));
        this.addItem(new Item_1.Item("TISSUE", 7));
    }
    static getInstance() {
        if (this._instance === null) {
            this._instance = new Stock();
        }
        return this._instance;
    }
    addItem(item) {
        let id = this._getItemID(item);
        if (id === this._nextAvailableID) {
            this._stockItem.set(id, item);
            this._nextAvailableID++;
        }
        else {
            let currentAmount = this._getAmount(id);
            this._stockItem.set(id, new Item_1.Item(item.getName, currentAmount + item.getAmount));
        }
    }
    /**
     * TODO  change this after ToString util finished.
     */
    getItems() {
        this._stockItem.forEach((element) => {
            console.log(element);
        });
        return this._stockItem;
    }
    removeItem(item) {
        if (item.getAmount <= this._checkStock(item)) {
            let id = this._getItemID(item);
            let currentItemInStock = this._getAmount(id);
            this._stockItem.set(id, new Item_1.Item(item.getName, currentItemInStock - item.getAmount));
            return true;
        }
        return false;
    }
    removeProduct(id) {
        this._stockItem.delete(id);
    }
    _checkStock(item) {
        let id = this._getItemID(item);
        if (id === this._nextAvailableID) {
            return 0;
        }
        return this._getAmount(id);
    }
    _getItemID(item) {
        for (let entry of this._stockItem) {
            if (item.equals(entry[1])) {
                return entry[0];
            }
        }
        return this._nextAvailableID;
    }
    _getAmount(id) {
        return this._stockItem.get(id).getAmount;
    }
}
exports.Stock = Stock;
Stock._instance = null;
//# sourceMappingURL=Stock.js.map