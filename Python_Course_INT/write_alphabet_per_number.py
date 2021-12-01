import string


def write_alphabet(num):
    alphabet = string.ascii_lowercase
    if num <= len(alphabet):
        with open('alphabet.txt', "w+") as my_file:
            for i in range(num):
                my_file.write(alphabet[i])
    else:
        print('too big of a number!')
        # print(i+1)


write_alphabet(3)
