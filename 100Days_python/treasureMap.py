def treasure_map():
    row1 = ["", "", ""]
    row2 = ["", "", ""]
    row3 = ["", "", ""]
    map = [row1, row2, row3]
    print(f"{row1}\n{row2}\n{row3}")
    position = input("Where do you want to put the treasure? ")
    p1 = int(position[0])
    p2 = int(position[1])
    selected_row = map[p2-1]
    selected_row[p1-1] = "X"
    print(f"{row1}\n{row2}\n{row3}")

    # print(position_numbers)
    # print(type(position_numbers))


treasure_map()
