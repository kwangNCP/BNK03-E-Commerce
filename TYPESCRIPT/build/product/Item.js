"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(name, amount) {
        this._name = name;
        this._amount = amount;
    }
    get getAmount() {
        return this._amount;
    }
    get getName() {
        return this._name;
    }
    set setAmount(value) {
        this._amount = value;
    }
    set setName(value) {
        this._name = value;
    }
    equals(object) {
        if (!(object instanceof Item)) {
            return false;
        }
        return this._name === object._name;
    }
    toString() {
        return `name: ${this._name}, amount: ${this._amount}`;
    }
}
exports.Item = Item;
//# sourceMappingURL=Item.js.map