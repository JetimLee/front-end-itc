MENU = {
    "espresso": {
        "ingredients": {
            "water": 50,
            "coffee": 18,
        },
        "cost": 1.5,
    },
    "latte": {
        "ingredients": {
            "water": 200,
            "milk": 150,
            "coffee": 24,
        },
        "cost": 2.5,
    },
    "cappuccino": {
        "ingredients": {
            "water": 250,
            "milk": 100,
            "coffee": 24,
        },
        "cost": 3.0,
    }
}

resources = {
    "water": 300,
    "milk": 200,
    "coffee": 100,
    "money": 0
}


def print_report():
    for k in resources:
        if (k == "water" or k == "milk"):
            print("{}: {}ml".format(k.capitalize(), resources[k]))
        elif (k == "coffee"):
            print("{}: {}g".format(k.capitalize(), resources[k]))
        elif (k == "money"):
            print("{}: ${}".format(k.capitalize(), resources[k]))


def figure_amount(quarters, dimes, nickles, pennies):
    amount_in_quarters = quarters * .25
    amount_in_dimes = dimes * .10
    amount_in_nickles = nickles * .05
    amount_in_pennies = pennies * .01
    total = amount_in_quarters+amount_in_dimes+amount_in_nickles+amount_in_pennies
    return total


def get_flavor_ingredients(flavor):
    global MENU
    for k in MENU:
        if k.lower() == flavor.lower():
            return MENU[k]["ingredients"]


def get_coins():
    print("Please insert coins.")
    coins_list = []
    quarter_amount = int(input("How many quarters?: "))
    dimes_amount = int(input("How many dimes?: "))
    nickles_amount = int(input("How many nickles?: "))
    pennies_amount = int(input("How many pennies?: "))
    coins_list.append(quarter_amount)
    coins_list.append(dimes_amount)
    coins_list.append(nickles_amount)
    coins_list.append(pennies_amount)
    return coins_list


def check_has_ingredients(required_ingredients):
    global resources
    for k in required_ingredients:
        if required_ingredients[k] > resources[k]:
            return k
    return None


def deposit_money(amount):
    global resources
    resources["money"] += amount


def change_resources(ingredients_to_update):
    """ Takes in the ingredients that need to be updated """
    global resources
    for k in ingredients_to_update:
        resources[k] -= ingredients_to_update[k]


def figure_change(selected_item, amount):
    """ Takes the name of the drink and the amount that was given by the user """
    return amount - MENU[selected_item]["cost"]


def dispense(selected_item, required_ingredients):
    """ Takes in the required ingredients for the drink and the drink name """
    coins = get_coins()
    amount = figure_amount(*coins)
    if amount < MENU[selected_item]["cost"]:
        print("That isn't enough money, refunding your coins")
        return
    change = figure_change(selected_item, amount)
    formatted_change = format(change, ".2f")
    print("Here is ${} in change.".format(formatted_change))
    print(f"Here is your {selected_item}. Enjoy!")
    amount_to_deposit = amount - change
    deposit_money(amount_to_deposit)
    change_resources(required_ingredients)


def apologize(missingIngredient):
    print(f"Sorry, we are out of {missingIngredient}")


def start_machine():
    while True:
        user_input = input(
            "What would you like? (espresso/latte/cappuccino): ")
        if user_input.lower() == "off":
            print("System shutting down...")
            exit(0)
        if user_input.lower() == "report":
            print_report()
        elif user_input.lower() == "latte":
            required_ingredients = get_flavor_ingredients(user_input.lower())
            has_ingredients = check_has_ingredients(required_ingredients)
            dispense(user_input.lower(),
                     required_ingredients) if has_ingredients == None else apologize(has_ingredients)
        elif user_input.lower() == "espresso":
            required_ingredients = get_flavor_ingredients(user_input.lower())
            has_ingredients = check_has_ingredients(required_ingredients)
            dispense(user_input.lower(),
                     required_ingredients) if has_ingredients == None else apologize(has_ingredients)
        elif user_input.lower() == "cappuccino":
            required_ingredients = get_flavor_ingredients(user_input.lower())
            has_ingredients = check_has_ingredients(required_ingredients)
            dispense(user_input.lower(),
                     required_ingredients) if has_ingredients == None else apologize(has_ingredients)


start_machine()
