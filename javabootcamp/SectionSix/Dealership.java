package SectionSix;

import java.util.Scanner;

public class Dealership {
    public static void main(String[] args) {
        Scanner dealershipQuestionaire = new Scanner(System.in);
        System.out.println("Welcome to the Java Dealership!");
        System.out.println("Press 'a' to buy a car, press 'b' to sell a car");
        String userAnswer = dealershipQuestionaire.next();
        switch (userAnswer.toLowerCase()) {
            case "a":
                System.out.println("What is your budget?");
                int budget = dealershipQuestionaire.nextInt();
                if (budget >= 10000) {
                    System.out.println("Great! A Nissan Altima is available!");
                    System.out.println("\nDo you have insurance? 'yes' or 'no'");
                    dealershipQuestionaire.nextLine();
                    String hasInsurance = dealershipQuestionaire.nextLine();
                    System.out.println("\nDo you have a drivers license? 'yes' or 'no'");
                    String hasDriversLicense = dealershipQuestionaire.nextLine();
                    System.out.println("\nWhat is your credit score?");
                    int creditScore = dealershipQuestionaire.nextInt();
                    if (hasDriversLicense.equals("yes") && hasInsurance.equals("yes") && creditScore > 660) {
                        System.out.println("Sold, pleasure doing business with you!");
                    } else {
                        System.out.println("We're sorry, you're not eligible.");
                    }
                } else {
                    System.out.println("We don't sell cars under 10,000!");
                }
                break;
            case "b":
                System.out.println("What is the value of the car?");
                int carValue = dealershipQuestionaire.nextInt();
                System.out.println("How much would you like to sell it for?");
                int carSellPoint = dealershipQuestionaire.nextInt();
                if (carSellPoint < carValue && carSellPoint < 30000) {
                    System.out.println("We'd love to buy, pleasure doing business!");
                } else {
                    System.out.println("Sorry, but your cars value is " + carValue
                            + " and you are trying to sell it for " + carSellPoint);
                }
                break;
            default:
                System.out.println("An invalid option was selected");
        }
        dealershipQuestionaire.close();
    }
}
