my_list = [1, 2, 3]
your_list = [10, 20, 30]
other_list = [2, 3]


def only_odd(item):
    return item % 2 != 0


# if lists aren't even in length
print(list(zip(my_list, your_list, other_list)))
