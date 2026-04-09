export class Groceries {
  public id: string;
  public name: string;
  public category: string;
  public quantity: number;
  public price: number;
  public purchased: boolean;

  constructor(
    id: string,
    name: string,
    category: string,
    quantity: number,
    price: number,
    purchased: boolean,
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.quantity = quantity;
    this.price = price;
    this.purchased = purchased;
  }
}
