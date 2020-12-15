import { IProduct } from "./IProduct";
import { Item } from "./Item";

export class Stock implements IProduct {
  private static _instance: Stock = null;
  private _stockItem: Map<number, Item> = new Map();
  private _nextAvailableID: number = 0;

  private constructor() {
    this.addItem(new Item("MILK", 17));
    this.addItem(new Item("EGG", 12));
    this.addItem(new Item("TEA", 10));
    this.addItem(new Item("RICE", 2));
    this.addItem(new Item("PORK", 3));
    this.addItem(new Item("BROWNIE", 7));
    this.addItem(new Item("WATER", 1));
    this.addItem(new Item("MASK", 1));
    this.addItem(new Item("TISSUE", 7));
  }

  public static getInstance(): Stock {
    if (this._instance === null) {
      this._instance = new Stock();
    }
    return this._instance;
  }

  public addItem(item: Item): void {
    let id: number = this._getItemID(item);
    if (id === this._nextAvailableID) {
      this._stockItem.set(id, item);
      this._nextAvailableID++;
    } else {
      let currentAmount: number = this._getAmount(id);
      this._stockItem.set(
        id,
        new Item(item.getName, currentAmount + item.getAmount)
      );
    }
  }

  /**
   * TODO  change this after ToString util finished.
   */
  public getItems(): any {
    this._stockItem.forEach((element) => {
      console.log(element);
    });
    return this._stockItem;
  }

  public removeItem(item: Item): boolean {
    if (item.getAmount <= this._checkStock(item)) {
      let id: number = this._getItemID(item);
      let currentItemInStock: number = this._getAmount(id);
      this._stockItem.set(
        id,
        new Item(item.getName, currentItemInStock - item.getAmount)
      );
      return true;
    }
    return false;
  }

  public removeProduct(id: number): void {
    this._stockItem.delete(id);
  }

  private _checkStock(item: Item): number {
    let id: number = this._getItemID(item);
    if (id === this._nextAvailableID) {
      return 0;
    }
    return this._getAmount(id);
  }

  private _getItemID(item: Item): number {
    for (let entry of this._stockItem) {
      if (item.equals(entry[1])) {
        return entry[0];
      }
    }
    return this._nextAvailableID;
  }

  private _getAmount(id: number): number {
    return this._stockItem.get(id).getAmount;
  }
}
