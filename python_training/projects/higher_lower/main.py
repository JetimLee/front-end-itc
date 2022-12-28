from data import data
from art import logo, vs
from random import randint


def game():
    print(logo)
    score = 0
    correct_answers = set()
    for i in range(len(data)):
        p1 = data[randint(0, len(data)-1)]
        p2 = data[randint(0, len(data)-1)]
        while (p2 is p1):
            print("Same person, trying again!")
            p2 = [randint(0, len(data)-1)]
        print("Compare A: {}, a {} from {}".format(
            p1["name"], p1["description"], p1["country"]))
        print(vs)
        print("Against B: {}, a {} from {}".format(
            p2["name"], p2["description"], p2["country"]))
        user_inp = input("Who has more followers? Type 'A' or 'B': ")
        if user_inp.upper() == "A" and p1["follower_count"] > p2["follower_count"]:
            score += 1
            correct_answers.add(p1["name"])
            print(f"Score: {score}")
            continue
        elif user_inp.upper() == "B" and p2["follower_count"] > p1["follower_count"]:
            score += 1
            correct_answers.add(p2["name"])
            print(f"Score: {score}")
            continue
        else:
            print(f"Game over! Final score: {score}")
            break

        if len(correct_answers) == len(data):
            print("You have answered everything correctly! You win!")
            print(score)
            break


game()
