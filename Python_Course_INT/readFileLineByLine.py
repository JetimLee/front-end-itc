
file = open("newFile.txt", "w+")

for i in range(10):
    file.write(f'This is line {i+1} \n')

file.close()


def readMyFile(file_name):
    print("reading the file")
    with open(file_name, "r") as myFile:
        file_by_line = myFile.readlines()
        length_of_file = len(file_by_line)
        print(f'The length of the file is {length_of_file}')
        print(file_by_line)


readMyFile("newFile.txt")
