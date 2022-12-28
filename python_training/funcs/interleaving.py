def interleave(str1, str2):
    firstStage = list(zip(str1, str2))
    print(firstStage)
    secondStage = ["".join(v) for v in firstStage]
    print(secondStage)
    thirdStage = "".join(secondStage)
    return thirdStage


interleave("hi", "no")

# def interleave(str1,str2):
#     return ''.join(''.join(x) for x in (zip(str1,str2)))
# very pythonic, much wow
