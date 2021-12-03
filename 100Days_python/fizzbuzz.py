def fizz_buzz():
    for num in range(1, 101):
        print(num)
        if num % 3 == 0 and num % 5 == 0:
            print('fizz buzz')
        elif num % 3 == 0:
            print('fizz')
        elif num % 5 == 0:
            print('buzz')


fizz_buzz()
