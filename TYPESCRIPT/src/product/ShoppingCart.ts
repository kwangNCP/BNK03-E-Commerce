import { IProduct } from "./IProduct";
import { Item } from "./Item";

export class ShoppingCart implements IProduct {
  private static _singleInstance = null;
  private _cart: Map<string, number> = new Map();

  private constructor() {}

  public static getInstance(): ShoppingCart {
    if (this._singleInstance === null) {
      this._singleInstance = new ShoppingCart();
    }
    return this._singleInstance;
  }

  public addItem(item: Item): void {
    this._cart.set(item.getName, item.getAmount);
  }

  /**
   * TODO  change this after ToString util finished.
   */
  public getItems(): any {
    return this._cart;
  }

  public removeItem(name: string): number {
    let amount: number = this._countItemInCart(name);
    if (amount > 0) {
      this._cart.delete(name);
    }
    return amount;
  }

  public removeAllItem(): Array<Item> {
    let items: Array<Item> = new Array();
    for (let entry of this._cart) {
      items.push(new Item(entry[0], entry[1]));
    }
    this._cart.clear();
    return items;
  }

  private _countItemInCart(name: string): number {
    if (this._cart.has(name)) {
      return this._cart.get(name);
    }
    return 0;
  }
}
