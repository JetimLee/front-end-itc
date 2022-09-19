# 🚨 Don't change the code below 👇
row1 = ["⬜️", "column1", "⬜️"]
row2 = ["⬜️", "column2", "⬜️"]
row3 = ["⬜️", "column3", "⬜️"]
map = [row1, row2, row3]
print(f"{row1}\n{row2}\n{row3}")
position = input("Where do you want to put the treasure? ")
# 🚨 Don't change the code above 👆

# Write your code below this row 👇

column = int(position[0]) - 1
row = int(position[1]) - 1

map[row][column] = "x"

# print("This is the column", map[index])
# print(index, map[index])

# Write your code above this row 👆

# 🚨 Don't change the code below 👇
print(f"{row1}\n{row2}\n{row3}")
