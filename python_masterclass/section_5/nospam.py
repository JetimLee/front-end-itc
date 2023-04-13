menu = [
    ["egg", "bacon"],
    ["egg", "sausage", "bacon"],
    ["egg", "spam"],
    ["egg", "bacon", "spam"],
    ["egg", "bacon", "sausage", "spam"],
    ["spam", "bacon", "sausage", "spam"],
    ["spam", "sausage", "spam", "bacon", "spam", "tomato", "spam"],
    ["spam", "egg", "spam", "spam", "bacon", "spam"],
]

# my solution


def remove_spam(lst:list):
    for indx, menu in enumerate(lst):
        while "spam" in menu:
            menu.remove("spam")
        print(" ".join(menu))

    return lst


remove_spam(menu)


# tims solution


# for meal in menu:
#     for index in range(len(meal) - 1, -1, -1):
#         if meal[index] == "spam":
#             del meal[index]

# tims other solution

# for meal in menu:
#     for item in meal:
#         if item != "spam":
#             print(item)
