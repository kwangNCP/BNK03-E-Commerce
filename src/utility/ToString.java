package utility;

import java.util.Map;
import product.Item;

public class ToString {
    private ToString() {
    }

    public static String stockItemToString(Map<Integer, Item> stockItem) {
        StringBuilder bld = new StringBuilder();
        bld.append("{");
        for (Map.Entry<Integer, Item> entry : stockItem.entrySet()) {
            bld.append("(id: " + entry.getKey() + ", " + entry.getValue().toString() + "),\n");
        }
        if (bld.length() > 1) {
            bld.setLength(bld.length() - 2);
        }
        bld.append("}");
        return bld.toString();
    }

    public static String cartItemToString(Map<String, Integer> cart) {
        StringBuilder bld = new StringBuilder();

        bld.append("{");
        for (Map.Entry<String, Integer> entry : cart.entrySet()) {
            bld.append("(name: " + entry.getKey() + ", " + entry.getValue() + "),\n");
        }
        if (bld.length() > 1) {
            bld.setLength(bld.length() - 2);
        }
        bld.append("}");
        return bld.toString();
    }
}
