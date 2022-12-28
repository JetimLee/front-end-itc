def readFileStoreInList(file):
    with open(file) as f:
        lines = f.readlines()
        return lines


lines = readFileStoreInList("test.txt")
print(lines)
