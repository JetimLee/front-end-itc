str = 'all'
str2 = 'welcome to the jungle'


def majority_char(string):
    stringMap = {}
    majorityNum = len(string)//2
    majorityCharNum = 0
    majorityChar = ""
    for i in range(len(string)):
        if string[i] not in stringMap:
            stringMap[string[i]] = 1
        else:
            stringMap[string[i]] += 1
    for k in stringMap:
        if stringMap[k] > majorityCharNum:
            majorityCharNum = stringMap[k]
            majorityChar = k
    if majorityCharNum > majorityNum:
        return majorityChar
    else:
        return None


print(majority_char(str))
print(majority_char(str2))
