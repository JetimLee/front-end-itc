# map takes a func and an iterable like this

my_list = [1, 2, 3]


def multiply_by2(item):
    return item * 2


# does not mutate the original array, similar to javascripts.map function
# is different in one way from JS.map function as it needs to be passed a function to use on the iterable
print(list(map(multiply_by2, my_list)))
print(my_list)

list_of_usernames = ["gavin", "charlie123"]


def capitalize_names(name):
    return name.upper()


updated_username = list(map(capitalize_names, list_of_usernames))
print(updated_username)
