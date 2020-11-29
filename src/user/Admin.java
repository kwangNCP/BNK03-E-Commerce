package user;

import product.Manager;

public class Admin implements User {
    private Manager manager = new Manager();

    @Override
    public void run() {
        // TODO Auto-generated method stub

    }

    private String add(String name, int amount) {
        return manager.addItemToStock(name, amount);
    }

    private String remove(String name, int amount) {
        return manager.removeItemFromStock(name, amount);
    }

    private String view() {
        return manager.getStockItems();
    }

}
