import java.util.Scanner;
import user.Admin;
import user.Customer;
import user.User;

public class Main {
    private static User admin = new Admin();
    private static User customer = new Customer();

    private enum Mode {
        BUY, MANAGE, QUIT
    }

    public static void main(String[] args) {
        Scanner userInput = new Scanner(System.in);
        while (true) {
            System.out.println("What do you want to do? [BUY, MANAGE, QUIT]\n");
            System.out.println("Enter 'BUY' to enter customer mode");
            System.out.println("Enter 'MANAGE' to enter admin mode");
            System.out.println("Enter 'QUIT' to exit program");
            System.out.print("\nEnter mode: ");
            String input = userInput.nextLine().trim().toUpperCase();
            boolean isValidInput = false;
            for (Mode m : Mode.values()) {
                if (m.name().equalsIgnoreCase(input)) {
                    isValidInput = true;
                }
            }
            if (!isValidInput) {
                System.out.println(
                        "Error: Please enter 'BUY', 'MANAGE', or 'QUIT' only.(can enter both lower case and upper case)");
            } else {
                modeSelector(input, userInput);
            }
        }
    }

    public static void modeSelector(String input, Scanner userInput) {
        if (input.equals(Mode.BUY.toString())) {
            customer.run(userInput);
        } else if (input.equals(Mode.MANAGE.toString())) {
            System.out.print("Enter password: ");
            String password = userInput.nextLine();
            if (password.equals("1234")) {
                admin.run(userInput);
            } else {
                System.out.println("Password incorrect! Hint: 456+778=?");

            }
        } else if (input.equals(Mode.QUIT.toString())) {
            System.out.println("Quit program!");
            userInput.close();
            System.exit(0);
        } else {
            System.out.println("Error");
        }
    }
}
