my_list = [s for s in "hello"]

print(my_list)

# param for param in iterable, creates the comprehension

my_list2 = [num * 2 for num in range(0, 100)]

print(my_list2)

my_list3 = [num**2 for num in range(0, 100) if num % 2 == 0]
print(my_list3)

# set and dict comprehension

# set is similar to list, can just put {} and you're good

my_dict = {index: element for index, element in enumerate(my_list)}
print(my_dict)

# using enumerate here would give you the index then the value, here you're getting the original num as the key and the times 2 as  the value
my_other_dict = {num: num * 2 for num in [1, 2, 3]}

print(my_other_dict)
