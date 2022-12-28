def readFileToArray(file):
    line_array = []

    with open(file) as f:
        for line in (f.readlines()):
            line_array.append(line.strip("\n"))
    return len(line_array)


lines = readFileToArray("test.txt")

print(lines)
