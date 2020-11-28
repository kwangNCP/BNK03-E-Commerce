package user;

import product.CustomerManager;
import product.StockManager;

public class Customer implements User {
  CustomerManager customerManager = new CustomerManager();
  StockManager stockManager = new StockManager();

  public Customer() {
    // Do nothing
  }

  public void run() {

  }

  @Override
  public void add(String item, int amount) {
    if (customerManager.addItem(item, amount)) {
      System.out.println("Add " + item + " " + amount + " completed!");
    } else {
      System.out.println("Cannot add " + item + " to cart, " + item + " in stock not enough.");
    }
  }

  @Override
  public void remove(String item) {
    if (customerManager.removeOneFromCart(item)) {
      System.out.println("Remove " + item + " completed!");
    } else {
      System.out.println("Remove " + item + " failed, no" + item + " in cart.");
    }
  }

  @Override
  public String view() {
    return customerManager.getCartItems();
  }

  public String viewStock() {
    return stockManager.getAllItems();
  }
}
