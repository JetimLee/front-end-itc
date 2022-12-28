def readNLines(numLines, file):

    with open(file) as f:
        for i in range(numLines):
            current_line = f.readline().strip(("\n"))
            print(current_line)


readNLines(3, "test.txt")
