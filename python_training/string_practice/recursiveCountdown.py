def recursive_countdown(num):
    if (num == 0):
        return
    print(num)
    nextNum = num - 1
    recursive_countdown(nextNum)


recursive_countdown(5)
