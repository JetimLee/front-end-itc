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


encrypt(letters_to_shift_over=shift, message=text)
