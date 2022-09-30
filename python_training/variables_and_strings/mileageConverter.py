km_user_input = float(input("How many kilometers did you run today? "))
print(km_user_input)
kmToMiles = round(km_user_input / 1.60934, 2)
print(f"Your {km_user_input}km run was {kmToMiles}mi")
