names = ["Lassie", "Colt", "Rusty"]

new_names = list(filter(lambda n: len(n) < 5, names))

print(new_names)
