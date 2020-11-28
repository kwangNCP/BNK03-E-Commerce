package product;

import java.util.HashMap;
import java.util.Map;

public class ShoppingCart extends Product {
  private static ShoppingCart singleInstance = null;
  private HashMap<String, Integer> cart = new HashMap<>();

  private ShoppingCart() {}

  public static ShoppingCart getInstance() {
    if (singleInstance == null) {
      singleInstance = new ShoppingCart();
    }
    return singleInstance;
  }

  @Override
  public void addItem(String item, int amount) {
    this.cart.put(item, amount);
  }

  public String getCartItems() {
    return this.cart.entrySet().toString();
  }

  public int removeItem(String item) {
    int amount = countItemInCart(item);
    if (amount > 0) {
      this.cart.remove(item);
    }
    return amount;
  }

  public Map<String, Integer> removeAllItems() {
    Map<String, Integer> items = new HashMap<>(cart);
    this.cart.clear();
    System.out.println(items);
    return items;
  }

  private int countItemInCart(String item) {
    if (this.cart.containsKey(item)) {
      return this.cart.get(item);
    }
    return 0;
  }
}
