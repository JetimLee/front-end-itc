number_input = int(input(
    'Enter 1 if you want a string with big letters. Enter 2 if you want a string with small letters: '))
message = input('Enter a message to change! ')


def change_string(num, inputted_message):
    is_valid = False
    while is_valid == False:
        try:
            if type(num) == int and type(inputted_message) == str:
                if num == 1:
                    print(string.upper())
                    is_valid = True
                elif num == 2:
                    print(string.lower())
                    is_valid = True
            else:
                print('Not a number!')
                num = int(input(
                    'Enter 1 if you want a string with big letters. Enter 2 if you want a string with small letters: '))
                string = input('Enter a message to change! ')
        except Exception as error:
            print(f'An error occurred! {error}')


change_string(inputted_message=message, num=number_input)
