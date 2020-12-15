import { Manager } from "../product/Manager";
import { User } from "./IUser";

enum Option {
  ADD = "add",
  REMOVE = "remove",
  VIEW = "view",
  BACK = "back",
  QUIT = "quit",
}

export class Admin implements User {
  private _manager: Manager = new Manager();
  private _isExitMode: boolean;
  constructor() {}

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
      rl.question("Type command here >> ", (input: string) => {
        let splitInput: Array<string> = input.toUpperCase().split(" ");
        let isValidInput: boolean = false;
        for (let o in Option) {
          if (Option[o] === splitInput[0].toLowerCase()) {
            isValidInput = true;
          }
        }
        if (!isValidInput) {
          console.log(
            "Error: Please enter 'ADD', 'REMOVE', 'VIEW', 'BACK' or 'QUIT' only.(can enter both lower case and upper case)"
          );
        } else {
          this.modeSelector(splitInput, rl);
        }
        if (!this._isExitMode) {
          recursiveAsyncReadLine();
        }
      });
    };
    recursiveAsyncReadLine();
  }

  private modeSelector = (splitInput: Array<string>, readline: any): void => {
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
      } catch {
        console.log("Invalid input: please type in format as the instruction.");
      }
    } else if (splitInput[0] === Option.REMOVE) {
      try {
        console.log(this._remove(splitInput[1], parseInt(splitInput[2])));
      } catch {
        console.log("Invalid input: please type in format as the instruction.");
      }
    } else if (splitInput[0] === Option.VIEW) {
      console.log(this._view());
    } else if (splitInput[0] === Option.BACK) {
      console.log("Back to home.");
      this._isExitMode = true;
    } else if (splitInput[0] === Option.QUIT) {
      console.log("Quit program!");
      readline.close();
      process.exit(0);
    } else {
      console.log("Error");
    }
  };

  public add(name: string, amount: number): string {
    return this._manager.addItemToStock(name, amount);
  }

  private _remove(name: string, amount: number): string {
    return this._manager.removeItemFromStock(name, amount);
  }

  private _view(): string {
    return this._manager.getStockItems();
  }
}
