def range_in_list(lst, start=0, end=None):
    end = end or lst[-1]
    return sum(lst[start:end+1])
