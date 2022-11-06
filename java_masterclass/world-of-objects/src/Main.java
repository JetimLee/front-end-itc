import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("\t************************************************");
        System.out.println("\t\t\t\t WELCOME TO JAVA DRINKS");
        System.out.println("\t************************************************");
//        Item pepsi = new Item("Pepsi", 1.99, 3);
////        System.out.println(pepsi);

        Item[][] items = new Item[][]{
                {new Item("Pepsi", 1.99, 3), new Item("Fresca", 1.49, 3), new Item("Brisk", 2.49, 2)},
                {new Item("Fanta", 1.99, 2), new Item("Barq's", 1.49, 2), new Item("A & W", 2.49, 3)},
                {new Item("Crush", 1.99, 2), new Item("C-Cola", 1.49, 2), new Item("Berry", 2.49, 1)}
        };

        VendingMachine myMachine = new VendingMachine(items);

        Scanner myScanner = new Scanner(System.in);
        while (true) {
            System.out.println("Pick a row: ");
            int row = myScanner.nextInt();

            System.out.println("Pick a column");
            int column = myScanner.nextInt();

            boolean dispensed = myMachine.dispense(row, column);
            System.out.println("\n" + myMachine);
            if (dispensed) System.out.println("\nEnjoy your drink! Press 1 to purchase another: ");
            if (!dispensed) System.out.println("\nSorry, we're out of this item. Press 1 to purchase another: ");
            int userChoice = myScanner.nextInt();
            if (userChoice != 1) {
                break;
            }

        }


    }


}