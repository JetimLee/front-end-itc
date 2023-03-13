name = input("What is your name? ")
age = int(input("What is your age? "))

if age >= 18 and age <= 30:
    print(f"Welcome to the holiday {name}")
else:
    print(f"Sorry, {name}, but you cannot come!")
