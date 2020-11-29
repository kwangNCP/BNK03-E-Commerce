package product;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map.Entry;
import utility.ToString;

public class ShoppingCart extends Product {
    private static ShoppingCart singleInstance = null;
    private HashMap<String, Integer> cart = new HashMap<>();

    private ShoppingCart() {
    }

    public static ShoppingCart getInstance() {
        if (singleInstance == null) {
            singleInstance = new ShoppingCart();
        }
        return singleInstance;
    }

    @Override
    public void addItem(Item item) {
        this.cart.put(item.getName(), item.getAmount());
    }

    @Override
    public String getItems() {
        return ToString.cartItemToString(cart);
    }

    public int removeItem(String name) {
        int amount = countItemInCart(name);
        if (amount > 0) {
            this.cart.remove(name);
        }
        return amount;
    }

    public List<Item> removeAllItem() {
        ArrayList<Item> items = new ArrayList<>();
        for (Entry<String, Integer> entry : cart.entrySet()) {
            items.add(new Item(entry.getKey(), entry.getValue()));
        }
        cart.clear();
        return items;
    }

    private int countItemInCart(String name) {
        if (this.cart.containsKey(name)) {
            return this.cart.get(name);
        }
        return 0;
    }
}
