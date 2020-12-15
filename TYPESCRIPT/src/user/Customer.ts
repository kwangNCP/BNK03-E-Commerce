import { Manager } from "../product/Manager";
import { User } from "./IUser";

enum Option {
  ADD,
  REMOVE,
  VIEW,
  BACK,
  QUIT,
}

export class Customer implements User {
  private manager: Manager = new Manager();
  private isExitMode: boolean;
  constructor() {}

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
        let input: String = userInput.nextLine().trim().toUpperCase();
        let splitInput = input.split(" ");
        let isValidInput: Boolean = false;
        for (let o in Option) {
          if (o.toLowerCase() == splitInput[0].toLowerCase()) {
            isValidInput = true;
          }
        }
        if (!isValidInput) {
          console.log(
            "Error: Please enter 'ADD', 'REMOVE', 'VIEW', 'BACK' or 'QUIT' only.(can enter both lower case and upper case)"
          );
        } else {
          this.modeSelector(splitInput, userInput);
        }
      }
      rl.close();
    });
  }

  private modeSelector = (
    splitInput: Array<string>,
    userInput: Array<string>
  ) => {
    if (splitInput[0] === Option.ADD.toString()) {
      try {
        console.log(this.add(splitInput[1], parseInt(splitInput[2])));
      } catch {
        console.log("Invalid input: please type in format as the instruction.");
      }
    } else if (splitInput[0] === Option.REMOVE.toString()) {
      try {
        console.log(this.remove(splitInput[1]));
      } catch {
        console.log("Invalid input: please type in format as the instruction.");
      }
    } else if (splitInput[0] === Option.VIEW.toString()) {
      console.log(this.view());
    } else if (splitInput[0] === Option.BACK.toString()) {
      console.log("Back to home.");
      this.isExitMode = true;
    } else if (splitInput[0] === Option.QUIT.toString()) {
      console.log("Quit program!");
      process.exit(0);
    } else {
      console.log("Error");
    }
  };

  public add(name: string, amount: number): string {
    return this.manager.addItemToCart(name, amount);
  }

  private remove(name: string): string {
    return this.manager.removeItemFromCart(name);
  }

  private view(): string {
    return this.manager.getCartItems();
  }
}
