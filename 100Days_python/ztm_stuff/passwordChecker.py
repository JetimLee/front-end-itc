username = input("What is your username? ")
password = input("What is your password?")

length_password = len(password)

print(f"{username}, your password {length_password * '*'} is {length_password} letters long")
