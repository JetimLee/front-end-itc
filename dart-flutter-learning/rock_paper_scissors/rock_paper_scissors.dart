import 'dart:io';
import 'dart:math';

void main() {
  while (true) {
    stdout.write(
        "rock paper scissors, type r for rock, p for paper, s for scissors: ");
    final input = stdin.readLineSync();
    const choices = ["rock", "paper", "scissors"];
    Random random = Random();
    int computerChoiceNumber = random.nextInt(3);
    String computerChoice = choices[computerChoiceNumber];
    Map<String, dynamic> playerChoices = {
      'r': 'rock',
      's': "scissors",
      'p': "paper",
    };
    if (playerChoices[input?.toLowerCase()] == computerChoice) {
      print("It's a tie! You both chose ${computerChoice}");
    } else if (input?.toLowerCase() == "r") {
      if (computerChoice == "paper") {
        print("The AI wins, it chose ${computerChoice}!");
      } else {
        print("You win! the AI chose ${computerChoice}");
      }
    } else if (input?.toLowerCase() == "s") {
      if (computerChoice == "rock") {
        print("The AI wins, it chose ${computerChoice}!");
      } else {
        print("You win! the AI chose ${computerChoice}");
      }
    } else if (input?.toLowerCase() == "p") {
      if (computerChoice == "scissors") {
        print("The AI wins, it chose ${computerChoice}!");
      } else {
        print("You win! the AI chose ${computerChoice}");
      }
    }
    stdout.write("Do you want to  play again? Press y for yes, n for no: ");
    final playAgain = stdin.readLineSync();
    if (playAgain?.toLowerCase() == "y") {
      continue;
    } else {
      break;
    }
  }
}
