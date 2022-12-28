def createShoppingCart():
    print("WELCOME TO YOUR SHOPPING CART")
    shopping_cart = []
    while (True):
        inp = input("Add something to the quart? Type q to quit: ")
        if (inp.lower() == "q"):
            break
        shopping_cart.append(inp)
    print("YOUR FINAL GROCERY LIST")
    for item in shopping_cart:
        print(f"- {item}")


createShoppingCart()
