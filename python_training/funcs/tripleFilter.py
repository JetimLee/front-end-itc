def triple_and_filter(lstNum):
    return [num*3 for num in lstNum if num % 4 == 0]

# def triple_and_filter(lst):
#     return list(filter(lambda x: x % 4 == 0, map(lambda x: x*3, lst)))
# with map/filter combo
