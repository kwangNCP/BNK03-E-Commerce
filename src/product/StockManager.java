package product;

public class StockManager {
  private Product stock = Stock.getInstance();

  public StockManager() {
    // Do nothing
  }

  public void addItem(String item, int amount) {
    stock.addItem(item, amount);
  }

  public void removeItem(String item) {
    ((Stock) stock).removeProduct(item);
  }

  public String getAllItems() {
    return stock.getStockItems((Stock) stock);
  }
}
