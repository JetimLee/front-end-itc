def recursive_string(str):
    if len(str) == 0:
        return str
    return recursive_string(str[1:]) + str[0]
