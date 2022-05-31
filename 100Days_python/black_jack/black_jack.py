# ace can be one or 10
# face cards are 10
# assuming unlimited deck
# number cards are their value
# goal is to get to 21, going above makes you lose
import random


def get_random_card(arr):
    card = random.choice(arr)
    return card


def get_user_input():
    print('get user input was called')
    user_play = input(
        'Would you like to play a game? Enter "y" for yes, "n" for no. ')
    print('the value user input is returning', user_play)
    return user_play


def compare_scores(score1, score2):
    """Score 1 represents the players score, score2 represents the dealers score
    Returns true if player score is bigger than dealers score, otherwise returns false"""
    if score1 > score2:
        # player wins
        return True
    return False


def check_if_bust(score):
    """Checks if the score is over 21 and if so, returns true. Otherwise returns false"""
    # check if went over, return true if so
    if score > 21:
        return True
    return False


def check_if_draw(s1, s2):
    """Takes two variables, s1 and s2, which are scores and compares if they're equal. If they are it returns true. Is used when determining if the match is a draw match or not."""
    if s1 == s2:
        print(f"It's a draw, with {s1} and {s2}!")
        return True
    return False


def play_blackjack():
    # could outsource some of the repeat logic to different functions
    # currently not accounting for if the ace counts as a 1 or a 10
    # we have a limitless deck - can try limiting it
    # dealer also does not take a hit, could take a hit
    # implement different difficulty settings?
    # SOME SORT OF ISSUE WITH THE BUST SETTINGS, does not go back to beginning of the game, WILL LOOK INTO WHY IT IS DOING THIS
    user_play = get_user_input()
    print('Entering while loop for the game')
    while user_play == 'y':
        print('While loop has started', user_play)
        cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
        # player_cards = [10, 11]
        # dealer_cards = [10, 11]
        player_cards = [get_random_card(cards), get_random_card(cards)]
        dealer_cards = [get_random_card(cards), get_random_card(cards)]
        playerScore = sum(player_cards)
        dealerScore = sum(dealer_cards)
        print(
            f'Current scores {playerScore} is players score, {dealerScore} is dealers score')
        if playerScore == 21 and dealerScore == 21:
            print(
                f'Blackjack draw! Player had {playerScore} and the dealer had {dealerScore}!')
            user_play = get_user_input()
            return
        user_hit = input(
            f'You have {playerScore}, would you like to take a hit? Enter "y" for yes, "n" for no.')
        # control variable for the hit loop phase, put here so its available to the stuff that needs it
        playerIsStanding = ''
        if user_hit == 'y':
            player_cards.append(get_random_card(cards))
            playerScore = sum(player_cards)
            playersBusts = check_if_bust(playerScore)
            if playersBusts == True:
                print('enter bust comparison')
                print(f'You went BUST!!!')
                return
        else:
            playerIsStanding = True
        # score of player is checked here in a continus while loop, if it's above 21 the game is over and the dealer wins
        while playerIsStanding != True:
            print('inside of player is standing loop')
            user_hit = input(
                f'You have {playerScore}, would you like to take another hit? Enter "y" for yes, "n" for no.')
            if user_hit == 'y':
                player_cards.append(get_random_card(cards))
                playerScore = sum(player_cards)
                playersBusts = check_if_bust(playerScore)
                if playersBusts == True:
                    print(f'You went BUST!!!')
                    print('Inside of hit loop')
                    user_play = get_user_input()
                    playerIsStanding = True
                    return
                # 'hit' period ends here if player says no
            else:
                print('player is standing')
                playerIsStanding = True
        print('evaluating dealer score now with while loop')
        while dealerScore < 16:
            dealer_cards.append(get_random_card(cards))
            dealerScore = sum(dealer_cards)
            dealerBusts = check_if_bust(dealerScore)
            if dealerBusts == True:
                print(
                    f'The dealer went BUSTTTTT {dealerScore}, you win with a score of {playerScore}!')
                return
        # check if draw again since original scores have changed
        draw = check_if_draw(s1=playerScore, s2=dealerScore)
        if draw == True:
            user_play = get_user_input()
            return
        playerWins = compare_scores(score1=playerScore, score2=dealerScore)
        if playerWins == True:
            print(
                f'You win! Your score was {playerScore} and the dealer had {dealerScore}')
            user_play = get_user_input()
            return
        else:
            print(
                f'You lose! The dealer had {dealerScore} and you had {playerScore}')
            user_play = get_user_input()
            return

    print('Ending black jack! Thanks for playing!')


play_blackjack()
print('Ending games...')
