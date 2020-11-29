package product;

import java.util.HashMap;
import java.util.Map.Entry;
import utility.ToString;

public class Stock extends Product {
    private static Stock instance = null;
    private HashMap<Integer, Item> stockItem = new HashMap<>();
    private int nextAvailableID = 0;

    private Stock() {
        addItem(new Item("MLIK", 17));
        addItem(new Item("EGG", 12));
        addItem(new Item("TEA", 10));
        addItem(new Item("RICE", 2));
        addItem(new Item("PORK", 3));
        addItem(new Item("BROWNIE", 7));
        addItem(new Item("WATER", 1));
        addItem(new Item("MASK", 1));
        addItem(new Item("TISSUE", 7));

    }

    public static Stock getInstance() {
        if (instance == null) {
            instance = new Stock();
        }
        return instance;
    }

    @Override
    public void addItem(Item item) {
        int id = getItemID(item);
        if (id == nextAvailableID) {
            this.stockItem.put(id, item);
            nextAvailableID++;
        } else {
            int currentAmount = getAmount(id);
            this.stockItem.put(id, new Item(item.getName(), currentAmount + item.getAmount()));
        }
    }

    @Override
    public String getItems() {
        return ToString.stockItemToString(stockItem);
    }

    public boolean removeItem(Item item) {
        if (item.getAmount() <= checkStock(item)) {
            int id = getItemID(item);
            int currentItemInStock = getAmount(id);
            this.stockItem.put(id, new Item(item.getName(), currentItemInStock - item.getAmount()));
            return true;
        }
        return false;
    }

    public void removeProduct(int id) {
        this.stockItem.remove(id);
    }

    private int checkStock(Item item) {
        int id = getItemID(item);
        if (id == nextAvailableID) {
            return 0;
        }
        return stockItem.get(id).getAmount();
    }

    private int getItemID(Item item) {
        for (Entry<Integer, Item> entry : stockItem.entrySet()) {
            if (entry.getValue().equals(item)) {
                return entry.getKey();
            }
        }
        return nextAvailableID;
    }

    private int getAmount(int id) {
        return stockItem.get(id).getAmount();
    }

    public static void main(String[] args) {
        Stock stock = Stock.getInstance();
        System.out.println(stock.getItems());
        stock.addItem(new Item("TISSUE", 5));
        System.out.println(stock.getItems());
        stock.removeItem(new Item("WATER", 1));
        stock.removeItem(new Item("EGG", 3));
        stock.removeItem(new Item("RICE", 3));
        System.out.println(stock.getItems());
        stock.removeProduct(7);
        System.out.println(stock.getItems());
    }
}
