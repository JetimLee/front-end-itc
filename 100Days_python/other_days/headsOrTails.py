import random


def headsOrTails():
    coin_outcome = random.random()*1
    actual_count_outcome = round(coin_outcome)
    if actual_count_outcome == 1:
        print('heads')
    else:
        print('tails')


headsOrTails()
