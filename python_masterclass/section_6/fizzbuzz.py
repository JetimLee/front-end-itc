def fizz_buzz(num: int):
    """Returns fizz, buzz or fizzbuzz depending on the number that is given"""
    if num % 3 == 0 and num % 5 == 0:
        return "fizz buzz"
    elif num % 3 == 0:
        return "fizz"
    elif num % 5 == 0:
        return "buzz"
    return str(num)
