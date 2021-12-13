import string
alphabet = string.ascii_letters
alphabet_list = list(alphabet)

# print(alphabet_list)

direction = input("Type 'encode' to encrypt, type 'decode' to decrypt: ")
text = input('Enter your message: ')
shift = int(input('Type the amount of numbers to shift over: '))

# TODO-1: Create a function called 'encrypt' that takes the 'text' and 'shift' as inputs.


def encrypt(message, letters_to_shift_over):
    message_to_encode = message.lower()
    encoded_message = ''
    for letter in message_to_encode:
        # print(letter)
        index_of_letter = alphabet_list.index(letter)
        new_letter = alphabet_list[index_of_letter+letters_to_shift_over]
        encoded_message += new_letter
    print(f'The encoded message is {encoded_message}')


encrypt(letters_to_shift_over=shift, message=text)

# TODO-2: Inside the 'encrypt' function, shift each letter of the 'text' forwards in the alphabet by the shift amount and print the encrypted text.
# e.g.
#plain_text = "hello"
#shift = 5
#cipher_text = "mjqqt"
# print output: "The encoded text is mjqqt"

# HINT: How do you get the index of an item in a list:
# https://stackoverflow.com/questions/176918/finding-the-index-of-an-item-in-a-list

# 🐛Bug alert: What happens if you try to encode the word 'civilization'?🐛

# TODO-3: Call the encrypt function and pass in the user inputs. You should be able to test the code and encrypt a message.
