package user;

import java.util.Scanner;
import product.Manager;

public class Customer implements User {
    private Manager manager = new Manager();
    private boolean isExitMode;

    private enum Option {
        ADD, REMOVE, CHECKOUT, VIEW, BACK, QUIT
    }

    @Override
    public void run(Scanner userInput) {
        System.out.println("\nWelcome customer.\n");

        System.out.println("Our shop have -> ");
        System.out.println(manager.getStockItems() + "\n");

        System.out.println("What do you want to do?\n");

        System.out.println("Enter 'ADD' <name> <amount> to add item to cart.");
        System.out.println("      example: ADD milk 4");
        System.out.println("Enter 'REMOVE' <name> to remove item from cart.");
        System.out.println("      example: REMOVE milk");
        // System.out.println("Enter 'CHECKOUT' to checkout all items and receive receipt.");
        System.out.println("Enter 'VIEW' to see all items in cart.");
        System.out.println("Enter 'BACK' to go to login page");
        System.out.println("Enter 'QUIT' to exit program\n");
        isExitMode = false;
        while (!isExitMode) {
            String input = userInput.nextLine().trim().toUpperCase();
            String[] splitInput = input.split(" ");
            boolean isValidInput = false;
            for (Option o : Option.values()) {
                if (o.name().equalsIgnoreCase(splitInput[0])) {
                    isValidInput = true;
                }
            }
            if (!isValidInput) {
                System.out.println(
                        "Error: Please enter 'ADD', 'REMOVE', 'VIEW', 'BACK' or 'QUIT' only.(can enter both lower case and upper case)\n");
            } else {
                modeSelector(splitInput, userInput);
            }
        }
    }

    private void modeSelector(String[] splitInput, Scanner userInput) {
        if (splitInput[0].equals(Option.ADD.toString())) {
            try {
                System.out.println(add(splitInput[1], Integer.parseInt(splitInput[2])));
            } catch (Exception e) {
                System.out.println("Invalid input: please type in format as the instruction.");
            }
        } else if (splitInput[0].equals(Option.REMOVE.toString())) {
            try {
                System.out.println(remove(splitInput[1]));
            } catch (Exception e) {
                System.out.println("Invalid input: please type in format as the instruction.");
            }
            // } else if (splitInput[0].equals(Option.CHECKOUT.toString())) {
            // System.out.println(checkout());
        } else if (splitInput[0].equals(Option.VIEW.toString())) {
            System.out.println(view());
        } else if (splitInput[0].equals(Option.BACK.toString())) {
            System.out.println("Back to home.");
            isExitMode = true;
        } else if (splitInput[0].equals(Option.QUIT.toString())) {
            System.out.println("Quit program!");
            userInput.close();
            System.exit(0);
        } else {
            System.out.println("Error");
        }
    }

    private String add(String name, int amount) {
        return manager.addItemToCart(name, amount);
    }

    private String remove(String name) {
        return manager.removeItemFromCart(name);
    }

    private String checkout() {
        return manager.checkout();
    }

    private String view() {
        return manager.getCartItems();
    }

}
