import string
import random


def create_password():
    number_of_letters = int(
        input('How many letters do you want in your password?'))
    number_of_symbols = int(
        input('How many symbols do you want in your password?'))
    number_of_numbers = int(
        input('How many numbers do you want in your password?'))
    alphabet = string.ascii_letters
    numbers = string.digits
    symbols = string.punctuation
    password_array = []
    for letter in range(number_of_letters):
        chosen_letter = alphabet[random.randint(0, 46)]
        password_array.append(chosen_letter)
    # print(password_array)
    for number in range(number_of_numbers):
        chosen_number = numbers[random.randint(0, number)*3]
        password_array.append(chosen_number)
    # print(password_array)
    for symbol in range(number_of_symbols):
        chosen_symbol = symbols[random.randint(0, number_of_symbols)]
        password_array.append(chosen_symbol)
    password = random.sample(password_array, len(password_array))
    password
    actual_password = (''.join(password))
    print(f'Your password is {actual_password}')


create_password()
