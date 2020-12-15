"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const Manager_1 = require("../product/Manager");
var Option;
(function (Option) {
    Option[Option["ADD"] = 0] = "ADD";
    Option[Option["REMOVE"] = 1] = "REMOVE";
    Option[Option["VIEW"] = 2] = "VIEW";
    Option[Option["BACK"] = 3] = "BACK";
    Option[Option["QUIT"] = 4] = "QUIT";
})(Option || (Option = {}));
class Customer {
    constructor() {
        this.manager = new Manager_1.Manager();
        this.modeSelector = (splitInput, userInput) => {
            if (splitInput[0] === Option.ADD.toString()) {
                try {
                    console.log(this.add(splitInput[1], parseInt(splitInput[2])));
                }
                catch (_a) {
                    console.log("Invalid input: please type in format as the instruction.");
                }
            }
            else if (splitInput[0] === Option.REMOVE.toString()) {
                try {
                    console.log(this.remove(splitInput[1]));
                }
                catch (_b) {
                    console.log("Invalid input: please type in format as the instruction.");
                }
            }
            else if (splitInput[0] === Option.VIEW.toString()) {
                console.log(this.view());
            }
            else if (splitInput[0] === Option.BACK.toString()) {
                console.log("Back to home.");
                this.isExitMode = true;
            }
            else if (splitInput[0] === Option.QUIT.toString()) {
                console.log("Quit program!");
                process.exit(0);
            }
            else {
                console.log("Error");
            }
        };
    }
    run() {
        console.log("\nWelcome customer.\n");
        console.log(this.manager.getStockItems() + "\n");
        console.log("What do you want to do?\n");
        console.log("Enter 'ADD' <name> <amount> to add item to cart.");
        console.log("      example: ADD milk 4");
        console.log("Enter 'REMOVE' <name> <amount> to remove item from cart.");
        console.log("      example: REMOVE milk 5");
        console.log("Enter 'VIEW' to see all items in cart.");
        console.log("Enter 'BACK' to go to login page");
        console.log("Enter 'QUIT' to exit program\n");
        this.isExitMode = false;
        const readline = require("readline");
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        // ask user for the input
        rl.question(``, (userInput) => {
            while (!this.isExitMode) {
                let input = userInput.nextLine().trim().toUpperCase();
                let splitInput = input.split(" ");
                let isValidInput = false;
                for (let o in Option) {
                    if (o.toLowerCase() == splitInput[0].toLowerCase()) {
                        isValidInput = true;
                    }
                }
                if (!isValidInput) {
                    console.log("Error: Please enter 'ADD', 'REMOVE', 'VIEW', 'BACK' or 'QUIT' only.(can enter both lower case and upper case)");
                }
                else {
                    this.modeSelector(splitInput, userInput);
                }
            }
            rl.close();
        });
    }
    add(name, amount) {
        return this.manager.addItemToCart(name, amount);
    }
    remove(name) {
        return this.manager.removeItemFromCart(name);
    }
    view() {
        return this.manager.getCartItems();
    }
}
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map