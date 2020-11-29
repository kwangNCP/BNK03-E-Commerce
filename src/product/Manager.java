package product;

public class Manager {
    private Product cartProduct = ShoppingCart.getInstance();
    private ShoppingCart shoppingCart = (ShoppingCart) cartProduct;

    private Product stockProduct = Stock.getInstance();
    private Stock stock = (Stock) stockProduct;

    public Manager() {
        // Do nothing
    }

    public void addItemToCart(String name, int amount) {
        Item item = new Item(name, amount);
        boolean isRemove = stock.removeItem(item);
        if (isRemove) {
            shoppingCart.addItem(item);
        }
        System.out.println();
    }

    public void removeItemFromCart(String name) {
        int amount = shoppingCart.removeItem(name);
        if (amount > 0) {
            Item item = new Item(name, amount);
            stock.addItem(item);
        }
    }

    public String getCartItems() {
        return shoppingCart.getItems();
    }

    public void addItemToStock(String name, int amount) {
        Item item = new Item(name, amount);
        stock.addItem(item);
    }

    public void removeItemFromStock(String name, int amount) {
        Item item = new Item(name, amount);
        stock.removeItem(item);
    }

    public String getStockItems() {
        return stock.getItems();
    }
}
