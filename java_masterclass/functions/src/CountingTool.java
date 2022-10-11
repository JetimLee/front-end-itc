import java.util.Random;
import java.util.Scanner;

public class CountingTool {

    public static void countForTimmy() {
        Scanner myScanner = new Scanner(System.in);
        System.out.print("Hi Timmy! Choose a number to count to: ");
        int userNumber = myScanner.nextInt();
        assert userNumber >= 0 : "Inputted number must be greater than or equal to 0";

        for (int i = 0; i <= userNumber; i++) {
            System.out.print(i + " ");
        }
    }

    /**
     * Function name -- sing. <------
     *
     * @param i (int)
     *          <p>
     *          <p>
     *          Inside the function:
     *          1. print:
     *          <i> bottles of beer on the wall, <i> bottles of beer!
     *          take one down, pass it around <i-1>, bottles of beer on the wall!
     */

    public static void sing(int value) {
        String messageForPlural = " bottles of beer on the wall, ";
        String messageForPluralP2 = " bottles of beer!";
        String messageForPluralP3 = "take one down, pass it around, ";
        String messageForPluralP4 = " bottles of beer on the wall!";
        String messageForSingular = " bottle of beer on the wall, ";
        String messageForSingularP2 = " bottle of beer!";
        String messageForSingularP3 = "take it down, pass it around, ";

        for (int i = value; i >= 1; i--) {
            if (i == 1) {
                System.out.println(i + messageForSingular + i + messageForSingularP2);
                System.out.println(messageForSingularP3 + (i - 1) + messageForPluralP4);
            } else {
                System.out.println(i + messageForPlural + i + messageForPluralP2);
                System.out.println(messageForPluralP3 + (i - 1) + messageForPluralP4);
            }

        }
    }

    public static void evenOrOdd() {
        for (int i = 0; i < 20; i++) {
            System.out.println(i % 2 == 0 ? i + " - " + "Even" : i + " - " + "Odd");
        }
    }

    public static void fizzBuzz() {
        for (int i = 0; i < 19; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.println(i + " FizzBuzz");
            } else if (i % 3 == 0) {
                System.out.println(i + " Fizz");
            } else if (i % 5 == 0) {
                System.out.println(i + " Buzz");
            }
        }
    }

    public static void guessingGame() {
        double machineNumber = Math.random() * 6;
        int machineGuess = (int) machineNumber;
        Scanner myScanner = new Scanner(System.in);
        System.out.print("I chose a number between 1 and 5. Try to guess it: ");
        int userInput = myScanner.nextInt();
        while (userInput != machineGuess) {
            System.out.println("Guess again: ");
            userInput = myScanner.nextInt();
        }
        System.out.println("You got it!");
    }

    public static void signingIn() {
        String username = "Samantha";
        String password = "Java<3";
        Scanner myScanner = new Scanner(System.in);
        System.out.println("Welcome to Javagram! Sign in below \n");
        System.out.print("Username: ");
        String usernameFromUser = myScanner.nextLine();
        System.out.print("Password: ");
        String passwordFromUSer = myScanner.nextLine();

        while (!(usernameFromUser.equals(username)) || !(passwordFromUSer.equals(password))) {
            System.out.println("Incorrect, please try again! \n");
            System.out.print("Username: ");
            usernameFromUser = myScanner.nextLine();
            System.out.print("Password: ");
            passwordFromUSer = myScanner.nextLine();

        }

        System.out.println("Sign in successful. Welcome!");
    }

    public static int rollDice() {
        Random rand = new Random();
//        random.nextInt(max - min + 1) + min

        int randomNum = rand.nextInt((6 - 1) + 1) + 1;

        return randomNum;
    }

    public static void rollingJava() {
        Scanner myScanner = new Scanner(System.in);
        System.out.println("Let's play Rolling Java. Type anything to start.\n");
        String userInput = "";
        while (userInput.equals("")) {
            userInput = myScanner.nextLine();
        }
        int playerScore = 0;
        System.out.println("Great, here are the rules:\n");
        System.out.println(" . If you roll a 6 the game stops.");
        System.out.println(" . If you roll a 4 nothing happens.");
        System.out.println(" . Otherwise, you get 1 point\n.");
        System.out.println("You must collect at least 3 points to win. Enter anything to roll: ");

        while (true) {
            String userRoll = myScanner.nextLine();
            int diceRoll = rollDice();
            System.out.print("You rolled a " + diceRoll + ".");
            if (diceRoll == 6) {
                System.out.print(" End of game. ");
                break;
            } else if (diceRoll == 4) {
                System.out.print(" Zero points. Keep rolling.");
            } else {
                playerScore += 1;
                System.out.print(" One point. Keep rolling.");
            }
        }

        if (playerScore >= 3) {
            System.out.println("Wow, that's lucky. You win!");
            System.exit(0);
        } else {
            System.out.println("Tough luck, you lose :(");
            System.exit(0);
        }

    }

}
