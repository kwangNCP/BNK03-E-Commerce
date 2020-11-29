package user;

import product.Manager;

public class Customer implements User {
    private Manager manager = new Manager();

    @Override
    public void run() {
        // TODO Auto-generated method stub

    }

    private String add(String name, int amount) {
        return manager.addItemToCart(name, amount);
    }

    private String remove(String name) {
        return manager.removeItemFromCart(name);
    }

    private String view() {
        return manager.getCartItems();
    }

}
