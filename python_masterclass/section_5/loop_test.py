# mystring = "hello"

# mylist = [letter for letter in mystring]

# print(mylist)
# list comprehensions

# results = [x if x % 2 == 0 else "ODD" for x in range(0, 11)]
# print(results)

st = "Print only the words that start with s in this sentence"


st_array = st.split(" ")

for _, word in enumerate(st_array):
    if word.lower().startswith("s"):
        print(word)

for i in range(0, 11):
    if i % 2 == 0:
        print(i)

divisble_by_3 = [num for num in range(1, 51) if num % 3 == 0]
print(divisble_by_3)

st = "Print every word in this sentence that has an even number of letters"

st_array = st.split(" ")

for _, word in enumerate(st_array):
    if len(word) % 2 == 0:
        print("even")

for i in range(0, 101):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)


st = "Create a list of the first letters of every word in this string"

first_letters = [letter[0] for letter in st.split(" ")]

print(first_letters)
