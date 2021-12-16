

import string
alphabet = string.ascii_letters
alphabet_list = list(alphabet)


direction = input("Type 'encode' to encrypt, type 'decode' to decrypt: ")
text = input('Enter your message: ')
shift = int(input('Type the amount of numbers to shift over: '))


def encrypt(message, letters_to_shift_over):
    message_to_encode = message.lower()
    encoded_message = ''
    for letter in message_to_encode:
        # print(letter)
        index_of_letter = alphabet_list.index(letter)
        new_letter = alphabet_list[index_of_letter+letters_to_shift_over]
        encoded_message += new_letter
    print(f'The encoded message is {encoded_message}')


# TODO-1: Create a different function called 'decrypt' that takes the 'text' and 'shift' as inputs.

def decrypt(message, letters_to_shift_over):
    message_to_decode = message.lower()
    decoded_message = ''
    for letter in message_to_decode:
        index_of_letter = alphabet_list.index(letter)
        new_letter = alphabet_list[index_of_letter-letters_to_shift_over]
        decoded_message += new_letter
    print(f'The decoded message is {decoded_message}')


# TODO-2: Inside the 'decrypt' function, shift each letter of the 'text' *backwards* in the alphabet by the shift amount and print the decrypted text.
# e.g.
# cipher_text = "mjqqt"
# shift = 5
# plain_text = "hello"
# print output: "The decoded text is hello"

# TODO-3: Check if the user wanted to encrypt or decrypt the message by checking the 'direction' variable. Then call the correct function based on that 'direction' variable. You should be able to test the code to encrypt *AND* decrypt a message.

if direction == 'encode':
    encrypt(letters_to_shift_over=shift, message=text)
elif direction == 'decode':
    decrypt(letters_to_shift_over=shift, message=text)
