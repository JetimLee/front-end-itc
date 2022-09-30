import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class RockPaperScissors {
    public boolean startGame() {
        boolean startPlaying = false;
        Scanner myScanner = new Scanner(System.in);
        System.out.println("Let's play Rock Paper Scissors");
        System.out.println("When I say 'shoot', Choose: rock, paper, or scissors.\n");
        System.out.println("Are you ready? Write 'yes' if you are, or 'no' if you don't want to play");
        String userAnswer = myScanner.nextLine();
        if (userAnswer.toLowerCase().equals("yes")) {
            startPlaying = true;
        } else if (userAnswer.toLowerCase().equals("no")) {
            System.out.println("Darn, maybe next time");
        } else {
            System.out.println("Sorry, I did not understand your answer. Please try again");
            System.exit(0);
        }
        return startPlaying;
    }

    public String computerChoice() {
        List<String> computerChoices = new ArrayList<>(Arrays.asList("paper", "rock", "scissors"));
        double randomChoice = Math.random() * 3;
        int index = (int) randomChoice;
        return computerChoices.get(index);
    }
    public boolean validateUserChoice(List<String> gameChoices, String userChoice) {
        boolean isValid = false;
        if(gameChoices.contains(userChoice)){
            isValid = true;
        }
        return isValid;
    }
    public void determineWinner(String playerChoice, String computerChoice) {
        String playerChoiceToLower = playerChoice.toLowerCase();
        switch (playerChoiceToLower){
            case "rock":
                if (computerChoice.equals("scissors")){
                    System.out.println("You win!");
                } else if (computerChoice.equals("paper")){
                    System.out.println("You lose, sorry! Try again!");
                } else {
                    System.out.println("It's a tie!");
                }
                break;
            case "scissors":
                if (computerChoice.equals("paper")){
                    System.out.println("You win!");
                } else if (computerChoice.equals("rock")){
                    System.out.println("You lose, sorry! Try again!");
                } else {
                    System.out.println("It's a tie!");
                }
                break;
            case "paper":
                if (computerChoice.equals("rock")){
                    System.out.println("You win!");
                } else if (computerChoice.equals("scissors")){
                    System.out.println("You lose, sorry! Try again!");
                } else {
                    System.out.println("It's a tie!");
                }
                break;
            default:
                System.out.println("Something happened when trying to determine the winner.");
        }
        System.exit(0);
    }

    public void playGame(boolean isPlaying) {
        Scanner myScanner = new Scanner(System.in);
        List<String> gameChoices = new ArrayList<>(Arrays.asList("paper", "rock", "scissors"));
        if (isPlaying) {
            System.out.println("Great!");
            System.out.println("rock -- paper -- scissors, shoot!");
            String userSelection = myScanner.nextLine();
            boolean isValidSelection = validateUserChoice(gameChoices, userSelection);
            if(!isValidSelection){
                System.out.println("You typed " + userSelection +" which is not a valid playing option. Shutting down.");
                System.exit(0);
            }
            String computersChoice = computerChoice();
            System.out.println("You chose " + userSelection);
            System.out.println("The computer chose " + computersChoice);
            determineWinner(userSelection,computersChoice);
            System.exit(0);
        }
    }
}
