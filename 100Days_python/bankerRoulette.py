import random


def banker_roulette():
    names = input("Give me all of the names, separated by a comma")
    names_list = names.split(',')
    random_number = random.randint(0, len(names_list) - 1)
    person_to_pay = names_list[random_number]
    print(f'The person that pays is {person_to_pay}')


banker_roulette()
