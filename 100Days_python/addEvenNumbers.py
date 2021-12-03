def count_even_numbers(n1, n2):
    for number in range(n1, n2+1):
        if number % 2 == 0:
            print(number)


count_even_numbers(1, 100)
