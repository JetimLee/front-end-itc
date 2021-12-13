def treasureIsland():
    print("Welcome to treasure island!")
    print("Your mission is to find the treasure")
    choice1 = input(
        'You\'re at a cross road! Where do you want to go?, "left" or "right?"')
    if choice1.lower() == 'right':
        print('Game over!')
    elif choice1.lower() == 'left':
        choice2 = input(
            'You arrive at a lake. Do you want to swim across or wait for a boat? ')
        if choice2.lower() == 'swim':
            print('game over!')
        elif choice2.lower() == 'wait':
            choice3 = input(
                'You arrive at an island after a long boat ride. You enter a cave and see three doors. One is red, one is blue and one is yellow. Which door do you go through? ')
            if choice3.lower() == 'red' or choice3.lower() == 'blue':
                print('game over!')
            elif choice3.lower() == 'yellow':
                print('you win!')


treasureIsland()
