from functools import reduce

my_list = [1, 2, 3]


def accumulator(acc, item):
    return acc + item


# similar to JS's reduce func
print(reduce(accumulator, my_list, 0))
