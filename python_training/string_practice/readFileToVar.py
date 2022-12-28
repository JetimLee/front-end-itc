def readFileToVar(file):
    result = ""
    with open(file) as f:
        for line in (f.readlines()):
            result += line
    return result


res = readFileToVar("test.txt")
print(res)
