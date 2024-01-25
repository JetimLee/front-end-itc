def factorial(num: int):
    """Returns the factorial of whatever number is passed in"""
    num_factorial = 1
    for i in range(1, num + 1):
        num_factorial = num_factorial * i
    return num_factorial


print(factorial(5))
