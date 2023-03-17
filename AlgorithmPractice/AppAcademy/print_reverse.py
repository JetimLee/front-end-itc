def print_reverse(min, max):
    if min > max:
        return []
    return [i for i in range(min + 1, max)][::-1]


print(print_reverse(13, 18))
print(print_reverse(90, 94))
