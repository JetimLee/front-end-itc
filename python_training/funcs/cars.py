brands = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

mylist = brands.split(",")
print(len(mylist))
print(mylist)
print(mylist[::-1])

hasOs = [brand for brand in mylist if "o" in brand]
hasIs = [brand for brand in mylist if "T" in brand]

print(hasOs)
print(hasIs)

duplicateList = ["Honda", "Volkswagen", "Toyota",
                 "Ford Motor", "Honda", "Chevrolet", "Toyota"]
noDuplicates = list({k: 1 for k in duplicateList}.keys())
