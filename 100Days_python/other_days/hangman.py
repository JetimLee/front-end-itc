# Step 1
import random

word_list = ["aardvark", "baboon", "camel"]


def hangman():
    guessed_letter = input('Enter a random letter: ')
    random_index = random.randint(0, len(word_list))
    random_word = word_list[random_index]
    for letter in random_word:
        if letter == guessed_letter.lower():
            print('RIGHT')
            break
        else:
            print('WRONG')


hangman()

# TODO-1 - Randomly choose a word from the word_list and assign it to a variable called chosen_word.

# TODO-2 - Ask the user to guess a letter and assign their answer to a variable called guess. Make guess lowercase.

# TODO-3 - Check if the letter the user guessed (guess) is one of the letters in the chosen_word.
