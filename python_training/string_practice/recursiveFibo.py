def recursive_fibo(num):
    if (num == 1 or num == 2):
        return 1
    return recursive_fibo(num - 1) + recursive_fibo(num-2)


print(recursive_fibo(12))
