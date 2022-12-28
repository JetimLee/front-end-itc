midterms = [80, 91, 78]
finals = [98, 89, 53]
students = ["dan", "ang", "kate"]
final_grades = [max(pair)for pair in zip(midterms, finals)]
print(final_grades)
