n = int(input('Check this number: '))


def check_prime_number(number):
    divisible_numbers = []

    for num in range(1, number+1):
        if number % num == 0:
            divisible_numbers.append(num)

    if len(divisible_numbers) > 2:
        print('Not a prime number')
    else:
        print('Prime number')


check_prime_number(number=n)
