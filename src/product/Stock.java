package product;

import java.util.HashMap;

public class Stock extends Product {
  private static Stock singleInstance = null;
  private HashMap<String, Integer> stockItem;

  private Stock() {
    stockItem = new HashMap<>();
    stockItem.put("MLIK", 17);
    stockItem.put("EGG", 12);
    stockItem.put("TEA", 10);
    stockItem.put("RICE", 2);
    stockItem.put("PORK", 3);
    stockItem.put("BROWNIE", 7);
    stockItem.put("WATER", 1);
    stockItem.put("MASK", 1);
    stockItem.put("TISSUE", 7);
  }

  public static Stock getInstance() {
    if (singleInstance == null) {
      singleInstance = new Stock();
    }
    return singleInstance;
  }

  @Override
  public void addItem(String item, int amount) {
    if (this.stockItem.containsKey(item)) {
      this.stockItem.put(item, stockItem.get(item) + amount);
    } else {
      this.stockItem.put(item, amount);
    }
  }

  public String getStockItems() {
    return stockItem.entrySet().toString();
  }

  public void removeProduct(String item) {
    this.stockItem.remove(item);
  }

  // @override
  public boolean removeItem(String item, int amount) {
    if (amount <= checkStock(item)) {
      stockItem.put(item, stockItem.get(item) - amount);
      return true;
    }
    return false;
  }

  public void removeAllItems() {
    this.stockItem.clear();
  }

  private int checkStock(String item) {
    if (this.stockItem.containsKey(item)) {
      return this.stockItem.get(item);
    }
    return 0;
  }
}
