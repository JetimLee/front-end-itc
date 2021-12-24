import random


def guessNumber():
    randomly_chosen_number = random.randint(0, 101)
    # print(f'pst, the chosen number is {randomly_chosen_number}')
    guess = int(input('Enter a number and see if you guess the right one: '))
    while guess != randomly_chosen_number:
        if guess > randomly_chosen_number:
            print('Try a lower number')
        elif guess < randomly_chosen_number:
            print('Try a higher number')
        guess = int(
            input('Enter a number and see if you guess the right one: '))
    if guess == randomly_chosen_number:
        print('You win!')


guessNumber()
