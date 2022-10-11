import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class ArrayChallenges {

    public static void printStudents() {
        String[] students = {"Harry", "Neville", "Ron", "Hermione", "Seamus"};
        System.out.println("It's time to take your fifth year exams. Please, take your seats");
        for (int i = 0; i < students.length; i++) {
            System.out.println(students[i] + ", you will take seat " + i);
        }
    }

    public static int createRandomNumber() {
        Random rand = new Random();

        int randomInt = rand.nextInt(50000 - 0 + 1) + 0;

        return randomInt;
    }

    public static double calculateNewPrice(double price, double taxRate) {
        return (price * taxRate) + price;
    }

    public static void newPrices() {
        double[] originalPrices = {1.99, 2.99, 3.99, 4.99};
        double[] pricesAfterTax = new double[originalPrices.length];
        double taxRate = .13;

        for (int i = 0; i < originalPrices.length; i++) {
            pricesAfterTax[i] = calculateNewPrice(originalPrices[i], taxRate);
        }
        System.out.println("Prices before tax " + Arrays.toString(originalPrices));
        System.out.println("Prices after taxes " + Arrays.toString(pricesAfterTax));
    }

    public static void pizzaOrder() {
        Scanner myScanner = new Scanner(System.in);
        System.out.println("How many toppings do you want?");

        int amountOfToppings = myScanner.nextInt();
        myScanner.nextLine();
        System.out.println("Great, enter each topping!");
        String[] takeOrder = new String[amountOfToppings];
        for (int i = 0; i < takeOrder.length; i++) {
            System.out.print(i + 1 + ". ");
            String currentTopping = myScanner.nextLine();
            takeOrder[i] = currentTopping;

        }
        System.out.println("Thank you! Here are the toppings you ordered!");

        for (int i = 0; i < takeOrder.length; i++) {
            System.out.println(i + 1 + "." + " " + takeOrder[i]);
        }

        System.out.println("\nHit enter to confirm your order.");
        String userConfirm = null;
        while (userConfirm == null) {
            userConfirm = myScanner.nextLine();
        }
        System.out.println("Great, a driver is on the way to you!");
        myScanner.close();

    }

    public static double[] convertToF(double[] tempInC) {
        double[] fArray = Arrays.copyOf(tempInC, tempInC.length);
        for (int i = 0; i < fArray.length; i++) {
            fArray[i] = (fArray[i] / 5 * 9) + 32;
        }
        return fArray;
    }

    public static void printTemperatures(double[] tempValues, String temp) {
        for (int i = 0; i < tempValues.length; i++) {
            System.out.print(temp + ": " + String.format("%.2f", tempValues[i]) + " ");
        }
        System.out.println("\n");
    }

    public static void showLotteryNumbers(int[] lottoNumbers) {
        for (int i = 0; i < lottoNumbers.length; i++) {
            System.out.print(lottoNumbers[i] + " ");
        }
    }

    public static void staticVoid2DArray() {
        double[][] prices = {{12.99, 8.99, 9.99, 10.49, 11.99}, {0.99, 1.99, 2.49, 1.49, 2.99}, {8.99, 7.99, 9.49, 9.99, 10.99}};

        for (int i = 0; i < prices.length; i++) {
            if (i == 0) {
                System.out.print("Baking: ");
            }
            if (i == 1) {
                System.out.print("Beverage: ");
            }
            if (i == 2) {
                System.out.print("Cereals: ");
            }
            for (int j = 0; j < prices[i].length; j++) {
                System.out.print(prices[i][j] + " ");
            }
            System.out.println("\n");

        }
    }

    public static void print2DArray(String[][] database) {
        for (int i = 0; i < database.length; i++) {
            for (int j = 0; j < database[i].length; j++) {
                System.out.print("\t" + database[i][j] + " ");
            }
            System.out.println("\n");
        }
    }

    public static void javaPedia() {
        Scanner myScanner = new Scanner(System.in);
        System.out.println("How many historical figures will you register?");
        int numberOfFigures = myScanner.nextInt();
        myScanner.nextLine();
        String[][] database = new String[numberOfFigures][3];

        for (int i = 0; i < database.length; i++) {
            System.out.println("Figure " + (i + 1));
            for (int j = 0; j < database[i].length; j++) {
                if (j == 0) {
                    System.out.print("\t Name: ");
                    database[i][j] = myScanner.nextLine();
                }
                if (j == 1) {
                    System.out.print("\t Date of birth: ");
                    database[i][j] = myScanner.nextLine();
                }
                if (j == 2) {
                    System.out.print("\t Occupation: ");
                    database[i][j] = myScanner.nextLine();
                }
            }
            System.out.println("\n");
        }
        System.out.println("These are the values you stored: ");
        print2DArray(database);

        System.out.println("Who do you want information on?: ");
        String userSearch = myScanner.nextLine();
        for (int i = 0; i < database.length; i++) {
            for (int j = 0; j < database[i].length; j++) {
                if (database[i][0].equals(userSearch)) {
                    if (j == 0) {
                        System.out.print("Name: ");
                        System.out.print(database[i][j] + "\n");
                    }
                    if (j == 1) {
                        System.out.print("Date of birth: ");
                        System.out.print(database[i][j] + "\n");
                    }
                    if (j == 2) {
                        System.out.print("Occupation: ");
                        System.out.print(database[i][j] + "\n");
                    }
                }
            }
        }

    }

    public static void copyArrayAndUpdate() {
        int[] originalNumbers = {34, 43, 45, 65, 21, 54};
        int[] newNumbers = Arrays.copyOf(originalNumbers, originalNumbers.length);
        newNumbers[2] = 54;
        System.out.print("Ticket 1 numbers: ");
        showLotteryNumbers(originalNumbers);
        System.out.println("\n");
        System.out.print("Ticket 2 numbers: ");
        showLotteryNumbers(newNumbers);
    }

    public static void copyingArrays() {
        double[] tempInC = {12.5, 14.5, 17.0, 21.0, 23.0, 18.5, 20.0};
        double[] fArray = convertToF(tempInC);
        printTemperatures(tempInC, "Celsius");
        printTemperatures(fArray, "Fahrenheit");

    }

    public static void findHighestScore() {
        int maxScore = Integer.MIN_VALUE;
        int[] pacmanScores = {createRandomNumber(), createRandomNumber(), createRandomNumber(), createRandomNumber(), createRandomNumber(), createRandomNumber(), createRandomNumber(), createRandomNumber(), createRandomNumber(), createRandomNumber()};
        int indexOfWinner = Integer.MIN_VALUE;
        for (int i = 0; i < pacmanScores.length; i++) {
            if (pacmanScores[i] > maxScore) {
                maxScore = pacmanScores[i];
                indexOfWinner = i;
            }
        }
        System.out.println("The highest score is: " + maxScore + ". Impressive");
        System.out.println("It's the gentleman in seat: " + indexOfWinner + ". Give that man a cookie!");
    }

    public static void javaGrocer() {
        String[] groceryAisles = {"apples", "bananas", "candy", "chocolate", "coffee", "tea"};
        Scanner myScanner = new Scanner(System.in);
        System.out.println("What item are you looking for? ");
        String userInput = myScanner.nextLine();
        for (int i = 0; i < groceryAisles.length; i++) {
            if (groceryAisles[i].equals(userInput.toLowerCase())) {
                System.out.println("\n We have " + userInput.toLowerCase() + " in aisle " + i);
            }
        }
    }


    public static void printTicTacToeBoard(char[][] board) {
        System.out.print("\n");
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board.length; j++) {
                System.out.print("\t" + board[i][j] + " ");
            }
            System.out.print("\n\n");
        }
    }

    public static int[] askUser(char[][] board) {
        System.out.print("Pick a row and column ");
        Scanner myScanner = new Scanner(System.in);
        int userRow = myScanner.nextInt();
        int userColumn = myScanner.nextInt();
        System.out.println("UserRow " + userRow);
        System.out.println("UserColumn " + userColumn);
        while (true) {
            if (!(board[userRow][userColumn] == '_')) {
                System.out.println("That spot is taken, try again!");
                System.out.print("Pick a row and column ");
                userRow = myScanner.nextInt();
                userColumn = myScanner.nextInt();
            } else {
                break;
            }

        }
        return new int[]{userRow, userColumn};
    }

    public static int determineWinner(char[][] board) {
        int count = 0;
        //row checking
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[i].length; j++) {
                if (board[i][j] == 'X') {
                    count += 1;
                } else if (board[i][j] == 'O') {
                    count -= 1;
                }
            }
            if (count == 3) {
                return count;
            } else if (count == -3) {
                return count;
            } else {
                //need this so that the next inner loop begins with 0
                count = 0;
            }
        }
        //column checking
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < board.length; j++) {
                //this will keep running until j has indexed every row
                if (board[j][i] == 'X') {
                    count += 1;
                } else if (board[j][i] == 'O') {
                    count -= 1;
                }
            }
            if (count == 3 || count == -3) {
                return count;
            } else {
                count = 0;
            }
        }
        //diagonal checking
        for (int i = 0; i < 3; i++) {
            if (board[i][i] == 'X') {
                count += 1;
            } else if (board[i][i] == 'O') {
                count -= 1;
            }
        }
        if (count == 3 || count == -3) {
            return count;
        } else {
            count = 0;
        }

        for (int i = 0; i < 3; i++) {
            int rowIndex = 2 - i;
            if (board[rowIndex][i] == 'X') {
                count += 1;
            } else if (board[rowIndex][i] == 'O') {
                count -= 1;
            }
        }
        return count;
    }

    public static void ticTacToe() {
        char[][] ticTacToeBoard = {{'_', '_', '_'}, {'_', '_', '_'}, {'_', '_', '_'}};
        System.out.println("Let's play tic tac toe!");
        printTicTacToeBoard(ticTacToeBoard);
        Scanner myScanner = new Scanner(System.in);
        int[] userPlacement;
        for (int i = 0; i < 9; i++) {
            if (i % 2 == 0) {
                System.out.println("Turn X: ");
            } else {
                System.out.println("Turn O: ");
            }
            userPlacement = askUser(ticTacToeBoard);
            int userRow = userPlacement[0];
            int userColumn = userPlacement[1];
            if (i % 2 == 0) {
                System.out.println("Placed an X");
                ticTacToeBoard[userRow][userColumn] = 'X';
            } else {
                ticTacToeBoard[userRow][userColumn] = 'O';
                System.out.println("Placed an O");
            }
            printTicTacToeBoard(ticTacToeBoard);
            int count = determineWinner(ticTacToeBoard);
            if (count == 3) {
                System.out.println("X wins");
                return;
            } else if (count == -3) {
                System.out.println("O wins");
                return;
            }
        }
        System.out.println("It's a tie!");
        System.exit(0);

    }
}
