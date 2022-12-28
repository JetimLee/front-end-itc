def is_prime(num, i=2):
    if (num <= 2):
        return True if (num == 2) else False
    if (num % i == 0):
        return False
    if (num < i * i):
        return True

    return is_prime(num, i + 1)
