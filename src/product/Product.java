package product;

public abstract class Product {
  protected abstract void addItem(String item, int amount);

  protected String getStockItems(Stock instance) {
    return instance.getStockItems();
  }


  public String getCartItems() {
    return null;
  }


}
