from functools import reduce

# 1 Capitalize all of the pet names and print the list
my_pets = ["sisi", "bibi", "titi", "carla"]


def cap_pets(pet):
    return pet.capitalize()


capital_pets = list(map(cap_pets, my_pets))

print(capital_pets)

# 2 Zip the 2 lists into a list of tuples, but sort the numbers from lowest to highest.
my_strings = ["a", "b", "c", "d", "e"]
my_numbers = [5, 4, 3, 2, 1]

strings_and_numbers = sorted(zip(my_strings, my_numbers), key=lambda x: x[1])

print(strings_and_numbers)

# 3 Filter the scores that pass over 50%
scores = [73, 20, 65, 19, 76, 100, 88]


def passed(x):
    return x >= 50


passed = filter(passed, scores)

passed_list = list(passed)

print(passed_list)


# 4 Combine all of the numbers that are in a list on this file using reduce (my_numbers and scores). What is the total?
def add(x, y):
    return x + y


sum = reduce(add, scores + my_numbers)

print(sum)
