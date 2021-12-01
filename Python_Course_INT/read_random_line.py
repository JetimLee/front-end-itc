import random
my_list = open('newFile.txt', "r").readlines()
print(my_list)


def read_random_line(arr):
    print(len(arr))
    random_choice = random.randint(0, len(arr)-1)
    for i in arr:
        if arr[random_choice] == i:
            print(arr[random_choice])
            break


read_random_line(my_list)
