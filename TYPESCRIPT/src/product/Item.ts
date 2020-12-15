export class Item {
  private _name: string;

  private _amount: number;

  constructor(name: string, amount: number) {
    this._name = name;
    this._amount = amount;
  }

  public get getAmount(): number {
    return this._amount;
  }

  public get getName(): string {
    return this._name;
  }

  public set setAmount(value: number) {
    this._amount = value;
  }

  public set setName(value: string) {
    this._name = value;
  }

  public equals(object: object): boolean {
    if (!(object instanceof Item)) {
      return false;
    }
    return this._name === object._name;
  }

  public toString(): string {
    return `name: ${this._name}, amount: ${this._amount}`;
  }
}
