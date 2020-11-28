import java.util.Scanner;
import user.Admin;
import user.Customer;
import user.User;

public class Main {
  enum Mode {
    BUY, MANAGE, QUIT
  }
  enum Option {
    ADD, VIEW, REMOVE, BACK, QUIT
  }

  private static String currentUser = "none";

  public static void main(String[] args) {
    User customer = new Customer();
    User admin = new Admin();

    Scanner userInput = new Scanner(System.in);

    while (true) {
      if (currentUser.equals("none")) {
        System.out.println("What do you want to do? [BUY, MANAGE, QUIT]\n");
        System.out.println("Enter 'QUIT' to exit program\n");
      } else {
        System.out.println("\n[ADD, REMOVE, VIEW, BACK, QUIT]");
      }
      String input = userInput.nextLine().trim().toUpperCase();
      if (input.equalsIgnoreCase(Mode.QUIT.toString())) {
        userInput.close();
        System.out.println("Program exited");
        break;
      }
      if (currentUser.equals("none")) {
        boolean isValid = false;
        for (Mode m : Mode.values()) {
          if (m.name().equalsIgnoreCase(input)) {
            isValid = true;
          }
        }
        if (!isValid) {
          System.out.println("Input is invalid, please use 'BUY' or 'MANAGE' or 'QUIT'\n");
        } else {
          System.out.println(((Customer) customer).viewStock());
          if (input.equalsIgnoreCase(Mode.BUY.toString())) {
            currentUser = "customer";
          } else if (input.equalsIgnoreCase(Mode.MANAGE.toString())) {
            currentUser = "admin";
          }
        }
      } else {
        boolean isValid = false;
        for (Option o : Option.values()) {
          if (o.name().equalsIgnoreCase(input)) {
            isValid = true;
          }
        }
        if (!isValid) {
          System.out.println(
              "Input is invalid, please use 'ADD' or 'VIEW' or 'REMOVE' or 'BACK' or 'QUIT'\n");
        } else {
          String item;
          int amount;
          if (currentUser.equals("customer")) {
            switch (input.toUpperCase()) {
              case "ADD":
                System.out.print("\nEnter item name: ");
                item = userInput.nextLine().toUpperCase().trim();
                try {
                  System.out.print("\nEnter item amounts: ");
                  amount = Integer.parseInt(userInput.nextLine().trim());
                } catch (Exception e) {
                  System.out.println("Invalid input, please enter positive number(Integer) only.");
                  break;
                }
                customer.add(item, amount);
                break;
              case "REMOVE":
                System.out.print("\nEnter item name: ");
                item = userInput.nextLine().toUpperCase().trim();
                customer.remove(item);
                break;
              case "VIEW":
                System.out.println(customer.view());
                break;
              case "BACK":
                currentUser = "none";
                break;
              default:
                break;
            }
          } else if (currentUser.equals("admin")) {
            switch (input.toUpperCase()) {
              case "ADD":
                System.out.print("\nEnter item name: ");
                item = userInput.nextLine().toUpperCase().trim();
                try {
                  System.out.print("\nEnter item amounts: ");
                  amount = Integer.parseInt(userInput.nextLine().trim());
                } catch (Exception e) {
                  System.out.println("Invalid input, please enter positive number(Integer) only.");
                  break;
                }
                admin.add(item, amount);
                break;
              case "REMOVE":
                System.out.print("\nEnter item name: ");
                item = userInput.nextLine().toUpperCase().trim();
                admin.remove(item);
                break;
              case "VIEW":
                System.out.println(admin.view());
                break;
              case "BACK":
                currentUser = "none";
                break;
              default:
                break;
            }
          }
        }
      }
    }
  }
}
