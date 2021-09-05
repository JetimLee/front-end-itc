def checkPalindrome():
    string = input('please enter a word:')
    string.replace('!', "")
    if string == string[::-1]:
        print('palindrome')
    else:
        print('not a palindrome')
