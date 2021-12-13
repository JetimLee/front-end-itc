import random


def rock_paper_scissors():
    rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

    paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

    scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''
    player_choice = input('Choose "rock", "paper", or "scissors!')
    choice_array = [rock, paper, scissors]
    random_choice = random.randint(0, 2)
    computer_choice = choice_array[random_choice]

    if player_choice == 'scissors':
        if computer_choice == paper:
            print(
                f'The computer chose\n {computer_choice} \n and you chose {player_choice} \n you win!')
        elif computer_choice == scissors:
            print("It's a tie!")
        elif(computer_choice == rock):
            print('You lose!')
    if player_choice == 'rock':
        if computer_choice == paper:
            print(
                f'The computer chose\n {computer_choice} \n and you chose {player_choice} \n you lose!')
        elif computer_choice == scissors:
            print(
                f'The computer chose\n {computer_choice} \n and you chose {player_choice} \n you win!')
        elif(computer_choice == rock):
            print(
                f"The computer chose\n {computer_choice} \n and you chose {player_choice} \n it's a draw !")
    if player_choice == 'paper':
        if computer_choice == paper:
            print(
                f"The computer chose\n {computer_choice} \n and you chose {player_choice} \n It's a tie!")
        elif computer_choice == scissors:
            print(
                f'The computer chose\n {computer_choice} \n and you chose {player_choice} \n you lose!')
        elif(computer_choice == rock):
            print(
                f"The computer chose\n {computer_choice} \n and you chose {player_choice} \n You win!")


rock_paper_scissors()
