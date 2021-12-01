
def write_list_to_file(list):
    for i in list:
        with open('writing_lists', "a") as writing_lists:
            writing_lists.write(f'{i} ')


my_list = ['hello darkness', 'my old friend', 'i have come to see you again']

write_list_to_file(my_list)
