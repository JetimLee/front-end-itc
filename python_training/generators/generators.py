# Generators are iterators
# Generator functions use the yield keyword, think Pytest
# Generators can be creatred with generator expressions
# When invoked, returns a generator, which is an iterator
# Can yield multiple times, whereas a regular function can only return once
def count_up_to(num):
    count = 1
    while count <= num:
        yield count
        count += 1


for num in count_up_to(10):
    print(num)
