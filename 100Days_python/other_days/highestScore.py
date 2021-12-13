def highest_score(arr):
    highest_student_score = int()
    for score in arr:
        if score > highest_student_score:
            highest_student_score = score
    print(f'The highest score is {highest_student_score}')


scores_list = [95, 85, 77, 108, -1, 3]

highest_score(scores_list)
