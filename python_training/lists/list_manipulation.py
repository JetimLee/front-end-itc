def list_manipulation(lst, command, location, val):
    if command == "remove" and location == "end":
        return lst.pop()
    elif command == "remove" and location == "beginning":
        return lst.pop(0)
    elif command == "add" and location == "beginning":
        lst.insert(0, val)
        return lst
    elif commad == "add" and location == "end":
        lst.append(val)
        return lst
