def wantPizza():
    print("Welcome to Python Pizza Deliveries!")
    size = input("What size pizza do you want? S, M, L? ")
    add_pineapple = input("Do you want pineapple?")
    extra_cheese = input("Do you want extra cheese?")
    bill = 0
    if(size == 'S'):
        bill += 15
    elif(size == 'M'):
        bill += 20
    elif(size == 'L'):
        bill += 25
    answer_to_pineapple = add_pineapple
    if(answer_to_pineapple == 'Yes'):
        if(size == 'S'):
            bill += 2
        else:
            bill += 3
    answer_to_cheese = extra_cheese
    if(answer_to_cheese == 'Yes'):
        bill += 1
    print(f'You chose {size}, {answer_to_pineapple} to pineapple and {answer_to_cheese} to extra cheese. \n Your total bill is {bill}')


wantPizza()
# small pizza: $15
# medium pizza: $20
# large pizza: $25

# pineapple for small pizza: $2
# pineapple for medium/large pizza: $3

# extra cheese: $1
