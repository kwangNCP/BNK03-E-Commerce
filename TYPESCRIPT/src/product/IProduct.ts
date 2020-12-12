import { Item } from "./Item";

export interface IProduct {
  addItem(item: Item): void;
  getItems(): string;
}
