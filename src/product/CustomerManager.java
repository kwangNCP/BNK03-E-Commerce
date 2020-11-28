package product;

import java.util.Map;
import java.util.Map.Entry;

public class CustomerManager {
  private Product shoppingCart = ShoppingCart.getInstance();
  private Product stock = Stock.getInstance();

  public CustomerManager() {
    // Do nothing
  }

  public boolean addItem(String item, int amount) {
    boolean isRemove = ((Stock) stock).removeItem(item, amount);
    if (isRemove) {
      shoppingCart.addItem(item, amount);
      return true;
    }
    return false;
  }

  public boolean removeOneFromCart(String item) {
    int amount = ((ShoppingCart) shoppingCart).removeItem(item);
    if (amount > 0) {
      this.stock.addItem(item, amount);
    } else {
      return false;
    }
    return true;
  }

  public String removeAllItemFromCart() {
    Map<String, Integer> carts = ((ShoppingCart) shoppingCart).removeAllItems();
    for (Entry<String, Integer> entry : carts.entrySet()) {
      System.out.println(entry);
      stock.addItem(entry.getKey(), entry.getValue());
    }
    return "Completed!";
  }

  public String getCartItems() {
    return shoppingCart.getCartItems();
  }

  public String getAllItems() {
    return stock.getStockItems((Stock) stock);
  }
}
