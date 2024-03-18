from csv import DictWriter

# Version using writer
# with open("cats.csv", "w") as file:
#     csv_writer = writer(file)
#     csv_writer.writerow(["Name", "Age"])
#     csv_writer.writerow(["Blue", 3])
#     csv_writer.writerow(["Kitty", 1])

# Version using DictWriter
with open("cats.csv", "w") as file:
    headers = ["Name", "Breed", "Age"]
    csv_writer = DictWriter(file, fieldnames=headers)
    csv_writer.writeheader()
    csv_writer.writerow({"Name": "Garfield", "Breed": "Orange Tabby", "Age": 10})
