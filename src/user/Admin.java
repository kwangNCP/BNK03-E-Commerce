package user;

import product.StockManager;

public class Admin implements User {
  private StockManager stockManager = new StockManager();

  public Admin() {
    // Do nothing
  }

  @Override
  public void add(String item, int amount) {
    stockManager.addItem(item, amount);
  }

  @Override
  public void remove(String item) {
    stockManager.removeItem(item);
  }

  @Override
  public String view() {
    return stockManager.getAllItems();

  }

}
