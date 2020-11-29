package product;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

public class Manager {
    private Product cartProduct = ShoppingCart.getInstance();
    private ShoppingCart shoppingCart = (ShoppingCart) cartProduct;

    private Product stockProduct = Stock.getInstance();
    private Stock stock = (Stock) stockProduct;

    public Manager() {
        // Do nothing
    }

    public String addItemToCart(String name, int amount) {
        if (amount <= 0) {
            return "Error: amount must more than 0";
        }
        Item item = new Item(name, amount);
        boolean isRemove = stock.removeItem(item);
        if (isRemove) {
            shoppingCart.addItem(item);
            return "Success: Add " + name + " to cart completed!\n";
        }
        return "Error: Add " + name + " to cart incomplete!, " + name + " in stock not enough.\n";
    }

    public String removeItemFromCart(String name) {
        int amount = shoppingCart.removeItem(name);
        if (amount > 0) {
            Item item = new Item(name, amount);
            stock.addItem(item);
            return "Success: Remove " + name + " from cart completed!\n";
        }
        return "Error: No " + name + " in cart.\n";
    }

    public String checkout() {
        ArrayList<Item> cartItem = (ArrayList<Item>) shoppingCart.removeAllItem();
        try (BufferedWriter receipt =
                new BufferedWriter(new FileWriter("../../receipt.txt", true))) {
            for (Item item : cartItem) {
                receipt.write(item.getName() + " " + item.getAmount());
            }
            return "Success!";
        } catch (IOException e) {
            System.out.println("An error occurred.");
            return "Failed!";
        }
    }

    public String getCartItems() {
        return shoppingCart.getItems() + "\n";
    }

    public String addItemToStock(String name, int amount) {
        if (amount <= 0) {
            return "Error: amount must more than 0";
        }
        try {
            Item item = new Item(name, amount);
            stock.addItem(item);
            return "Success: Add " + name + " completed!\n";
        } catch (Exception e) {
            return "Error: Add " + name + " failed!\n";
        }
    }

    public String removeItemFromStock(String name, int amount) {
        if (amount <= 0) {
            return "Error: amount must more than 0";
        }
        Item item = new Item(name, amount);
        boolean isRemove = stock.removeItem(item);
        if (isRemove) {
            return "Success: Remove " + name + " completed!\n";
        }
        return "Error: Remove " + name + " failed!, " + name + " in stock not enough.\n";
    }

    public String getStockItems() {
        return stock.getItems() + "\n";
    }
}
