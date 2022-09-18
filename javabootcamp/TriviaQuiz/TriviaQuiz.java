package TriviaQuiz;

import java.util.Scanner;

public class TriviaQuiz {
    public static void main(String[] args) {
        Scanner quizInput = new Scanner(System.in);
        int correctAnswers = 0;
        int maxScore = 20;
        System.out.println("1. Which country held the 2016 Summer Olympics?");
        System.out.println("\ta) China\n\tb) Ireland\n\tc) Brazil\n\td) Italy\n");
        String answer1 = quizInput.nextLine();
        System.out.println("2. Which planet is the hottest?");
        System.out.println("\ta) Venus\n\tb) Saturn\n\tc) Mercury\n\td) Mars\n");
        String answer2 = quizInput.nextLine();
        System.out.println("3. What is the rarest blood type?");
        System.out.println("\ta) O\n\tb) A\n\tc) B\n\td) AB-Negative\n");
        String answer3 = quizInput.nextLine();
        System.out.println("3. Which of these characters are friends with harry potter?");
        System.out.println("\ta) Ron Weasley\n\tb) Hermione Granger\n\tc) Draco Malfoy\n");
        String answer4 = quizInput.nextLine();
        if (answer1.equals("c")) {
            correctAnswers += 5;
        }
        if (answer2.equals("a")) {
            correctAnswers += 5;
        }
        if (answer3.equals("d")) {
            correctAnswers += 5;
        }
        if (answer4.equals("a") || answer4.equals("b")) {
            correctAnswers += 5;
        }

        System.out.println("Your final score is " + correctAnswers + "/" + maxScore);
        if (correctAnswers >= 15) {
            System.out.println("Wow, you know your stuff!");
        } else if (correctAnswers < 15 && correctAnswers >= 5) {
            System.out.println("Not bad!");
        } else {
            System.out.println("Better luck next time!");
        }

    }
}
