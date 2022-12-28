import random
print("Welcome to the Number Guessing Game")
print("I'm thinking of a number between 1 and 100")

random_number = random.randint(1, 100)
user_difficulty = input("Choose a difficulty.Type 'easy' or 'hard': ")


attempts = 10 if user_difficulty.lower() == 'easy' else 5

attempts_remaining_phrase = f"You have {attempts} remaining to guess the number"
print(attempts_remaining_phrase)
user_guess = None

while (type(user_guess) is not int):
    try:
        user_guess = int(input("Make a guess: "))
    except:
        print("You must use a number as your guess")

while (True):
    if user_guess == random_number:
        print("You guessed it!")
        break

    if user_guess > random_number:
        print("Too high.")
    if user_guess < random_number:
        print("Too low")
    print("Guess again")

    attempts = attempts - 1
    if attempts == 0:
        print(
            f"Game over, you couldn't get it! {random_number} was the number!")
        break
    print(f"You have {attempts} remaining to guess the number")
    try:
        user_guess = int(input("Make a guess: "))
    except:
        print("You must use a number as your guess")
