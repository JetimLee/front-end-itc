print('My name is')
for i in range(5):
    print(f'Slim shaddy {i}')
# i starts at 0, 0 indexing
total = 0
for num in range(101):
    # num here is the index, range is how many times this thing will run
    print(num)
    print(total)
    total = total + num
print(total)
