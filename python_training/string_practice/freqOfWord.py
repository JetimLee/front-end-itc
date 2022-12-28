def readFileToArray(file, wordToSearch):
    freq = 0
    with open(file) as f:
        for line in (f.readlines()):
            if (line.find(wordToSearch) != -1):
                freq += 1
    return freq


frequency = readFileToArray("test.txt", "fun")

print(frequency)
