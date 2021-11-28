def get_average_height(arr):
    sum = 0
    length_of_array = 0
    for height in arr:
        sum += height
        length_of_array += 1

    average = sum/(length_of_array)
    print(round(average))


students = [180, 124, 165, 173, 189, 169, 146]

other_students = [156, 178, 165, 171, 187]
get_average_height(students)
get_average_height(other_students)
