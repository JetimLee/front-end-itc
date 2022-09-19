package SectionSix;

import java.util.Scanner;

public class Bank {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("\n****ROYAL BANK OF JAVA****");
        System.out.println("Are you here to get a mortgage? (yes or no)");
        String option = scan.next();
        System.out.println(option);
        if (option.equals("yes")) {
            System.out.println("\nGreat! In one line" +
                    "\nHow much money do you have in your savings?" +
                    "\nAnd, how much do you owe in credit card debt?");
            double savingsAmount = scan.nextDouble();
            double creditCardDebt = scan.nextDouble();
            System.out.println("\nHow many years have you worked for?");
            int yearsWorked = scan.nextInt();
            scan.nextLine();
            System.out.println("What is your name?");
            String name = scan.nextLine();
            if (savingsAmount >= 10000 && creditCardDebt <= 5000 && yearsWorked >= 2) {
                System.out.println("Congratulations " + name + " you have been approved!");
            } else {
                System.out.println("Sorry, you are not eligible for a mortgage.");
            }

            // scan nextLine trap will occur if you put it after:
            // scan.nextInt, nextLong, nextDouble, and next
        } else {
            System.out.println("\nOK. Have a nice day!");
            scan.close();
        }
        // System.out.println("Sorry, you are not eligible for a mortgage");
        scan.close();
    }
}
