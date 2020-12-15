import { Item } from "./Item";
import { ShoppingCart } from "./ShoppingCart";
import { Stock } from "./Stock";

export class Manager {
  private _shoppingCart: ShoppingCart = ShoppingCart.getInstance();
  private _stock: Stock = Stock.getInstance();

  private _errorText: string = "Error: amount must more than 0";

  constructor() {
    // Do nothing
  }

  public addItemToCart(name: string, amount: number): string {
    if (amount <= 0) {
      return this._errorText;
    }
    let item: Item = new Item(name, amount);
    let isRemove: boolean = this._stock.removeItem(item);
    if (isRemove) {
      this._shoppingCart.addItem(item);
      return `Success: Add ${name}to cart completed!`;
    }
    return `Error: Add ${name} to cart incompleted!, ${name} in stock not enough.`;
  }

  public removeItemFromCart(name: string): string {
    let amount: number = this._shoppingCart.removeItem(name);
    if (amount > 0) {
      let item: Item = new Item(name, amount);
      this._stock.addItem(item);
      return `Success: Remove ${name} from cart completed!`;
    }
    return `Error: No ${name} in cart.`;
  }

  public checkout(): string {
    // let cartItem: Array<Item> = this._shoppingCart.removeAllItem();
    // if (cartItem.length === 0) {
    //   return "Cannot checkout, your cart is empty.";
    // }
    // let destination: string = "C:\\Users\\natthapongjie\\Desktop\\receipt.txt";
    return "Can't checkout.";
  }

  public getCartItems(): string {
    return `${this._shoppingCart.getItems()}\n`;
  }

  public addItemToStock(name: string, amount: number): string {
    if (amount <= 0) {
      return this._errorText;
    }
    try {
      let item: Item = new Item(name, amount);
      this._stock.addItem(item);
      return `Success: Add ${name} completed!`;
    } catch {
      return `Error: Add ${name} failed!`;
    }
  }

  public removeItemFromStock(name: string, amount: number): string {
    if (amount <= 0) {
      return this._errorText;
    }
    let item: Item = new Item(name, amount);
    let isRemove: boolean = this._stock.removeItem(item);
    if (isRemove) {
      return `Success: Remove ${name} completed!`;
    }
    return `Error: Remove ${name} failed!, ${name} in stock not enough.`;
  }

  public getStockItems(): string {
    return `${this._stock.getItems()}\n`;
  }
}
