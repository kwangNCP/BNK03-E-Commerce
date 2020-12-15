"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const Manager_1 = require("../product/Manager");
var Option;
(function (Option) {
    Option["ADD"] = "add";
    Option["REMOVE"] = "remove";
    Option["VIEW"] = "view";
    Option["BACK"] = "back";
    Option["QUIT"] = "quit";
})(Option || (Option = {}));
class Admin {
    constructor() {
        this._manager = new Manager_1.Manager();
        this.modeSelector = (splitInput, readline) => {
            splitInput[0] = splitInput[0].toLowerCase();
            if (splitInput[0] === Option.ADD || splitInput[0] === Option.REMOVE) {
                if (splitInput[1] === undefined || splitInput[2] === undefined) {
                    console.log("Invalid input: please type in format as the instruction.");
                    return;
                }
                if (isNaN(parseInt(splitInput[2]))) {
                    console.log("Invalid input: please enter number as the instruction.");
                    return;
                }
            }
            if (splitInput[0] === Option.ADD) {
                try {
                    console.log(this.add(splitInput[1], parseInt(splitInput[2])));
                }
                catch (_a) {
                    console.log("Invalid input: please type in format as the instruction.");
                }
            }
            else if (splitInput[0] === Option.REMOVE) {
                try {
                    console.log(this._remove(splitInput[1], parseInt(splitInput[2])));
                }
                catch (_b) {
                    console.log("Invalid input: please type in format as the instruction.");
                }
            }
            else if (splitInput[0] === Option.VIEW) {
                console.log(this._view());
            }
            else if (splitInput[0] === Option.BACK) {
                console.log("Back to home.");
                this._isExitMode = true;
            }
            else if (splitInput[0] === Option.QUIT) {
                console.log("Quit program!");
                readline.close();
                process.exit(0);
            }
            else {
                console.log("Error");
            }
        };
    }
    run() {
        console.log("\nWelcome admin.\n");
        console.log(this._manager.getStockItems() + "\n");
        console.log("What do you want to do?\n");
        console.log("Enter 'ADD' <name> <amount> to add item to cart.");
        console.log("      example: ADD milk 4");
        console.log("Enter 'REMOVE' <name> <amount> to remove item from cart.");
        console.log("      example: REMOVE milk 5");
        console.log("Enter 'VIEW' to see all items in cart.");
        console.log("Enter 'BACK' to go to login page");
        console.log("Enter 'QUIT' to exit program\n");
        this._isExitMode = false;
        const readline = require("readline");
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        // ask user for the input
        let recursiveAsyncReadLine = () => {
            rl.question("Type command here >> ", (input) => {
                let splitInput = input.toUpperCase().split(" ");
                let isValidInput = false;
                for (let o in Option) {
                    if (Option[o] === splitInput[0].toLowerCase()) {
                        isValidInput = true;
                    }
                }
                if (!isValidInput) {
                    console.log("Error: Please enter 'ADD', 'REMOVE', 'VIEW', 'BACK' or 'QUIT' only.(can enter both lower case and upper case)");
                }
                else {
                    this.modeSelector(splitInput, rl);
                }
                if (!this._isExitMode) {
                    recursiveAsyncReadLine();
                }
            });
        };
        recursiveAsyncReadLine();
    }
    add(name, amount) {
        return this._manager.addItemToStock(name, amount);
    }
    _remove(name, amount) {
        return this._manager.removeItemFromStock(name, amount);
    }
    _view() {
        return this._manager.getStockItems();
    }
}
exports.Admin = Admin;
//# sourceMappingURL=Admin.js.map