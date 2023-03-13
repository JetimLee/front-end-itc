options = ["Learn Python", "Learn Java",
           "Go Swimming", "Have dinner", "Go to bed", "Exit"]

print("Please choose your option from the list below: ")
for i in range(len(options)):
    if options[i] == "Exit":
        print(f"0. {options[i]}")
    else:
        print(f"{i+1}. {options[i]}")

while True:
    user_choice = int(input())
    if user_choice >= len(options):
        print(f"Invalid choice of {user_choice}, choose again")
        for i in range(len(options)):
            if options[i] == "Exit":
                print(f"0. {options[i]}")
            else:
                print(f"{i+1}. {options[i]}")
        continue

    if user_choice == 0:
        print("Goodbye!")
        break

    print(f"{options[user_choice - 1]} sounds fun!")
