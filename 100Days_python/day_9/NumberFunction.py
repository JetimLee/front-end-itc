def handle_number(num):

    while num < 1 or num > 10000:
        try:
            if num < 1:
                print('Enter a number greater than 0')
            elif num > 10000:
                print('Enter a number less than or equal to 10000')
            num = int(input('Enter a number: '))
        except Exception:
            try:
                print('Enter a number, not a string!')
                num = int(input('Enter a number: '))
            except Exception as error:
                print(f'An error occurred {error}')
    print(num)


handle_number(0)
