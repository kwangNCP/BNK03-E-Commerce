package product;

public class Manager {
    private Product cartProduct = ShoppingCart.getInstance();
    private ShoppingCart shoppingCart = (ShoppingCart) cartProduct;

    private Product stockProduct = Stock.getInstance();
    private Stock stock = (Stock) stockProduct;

    public Manager() {
        // Do nothing
    }

    public String addItemToCart(String name, int amount) {
        Item item = new Item(name, amount);
        boolean isRemove = stock.removeItem(item);
        if (isRemove) {
            shoppingCart.addItem(item);
            return "Success: Add " + name + " to cart completed!";
        }
        return "Error: Add " + name + " to cart incomplete!, " + name + " in stock not enough.";
    }

    public String removeItemFromCart(String name) {
        int amount = shoppingCart.removeItem(name);
        if (amount > 0) {
            Item item = new Item(name, amount);
            stock.addItem(item);
            return "Success: Remove " + name + " from cart completed!";
        }
        return "Error: No " + name + " in cart.";
    }

    public String getCartItems() {
        return shoppingCart.getItems();
    }

    public String addItemToStock(String name, int amount) {
        try {
            Item item = new Item(name, amount);
            stock.addItem(item);
            return "Success: Add " + name + " completed!";
        } catch (Exception e) {
            return "Error: Add " + name + " failed!";
        }
    }

    public String removeItemFromStock(String name, int amount) {
        Item item = new Item(name, amount);
        boolean isRemove = stock.removeItem(item);
        if (isRemove) {
            return "Success: Remove " + name + " completed!";
        }
        return "Error: Remove " + name + " failed!, " + name + " in stock not enough.";
    }

    public String getStockItems() {
        return stock.getItems();
    }
}
