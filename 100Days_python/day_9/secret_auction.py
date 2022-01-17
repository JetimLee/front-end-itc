
def start_secret_auction():
    other_bidders = True
    list_of_bidders = []
    while other_bidders:
        name = input('What is your name? ')
        bid = int(input('Enter your bid: '))
        bidder_details = {"name_of_bidder":name,"bid":bid,}
        list_of_bidders.append(bidder_details)
        another_bidder = input("Are there other bidders? Enter 'y' if yes, otherwise enter 'n'. ")
        if another_bidder == 'n':
            highest_bidder = ''
            highest_bid = 0
            print('no other bidders')
            other_bidders=False
            for bidder in list_of_bidders:
                if(bidder["bid"]>highest_bid):
                    highest_bid=bidder["bid"]
                    highest_bidder=bidder['name_of_bidder']
            print(f'The winner of the auction is {highest_bidder} with a bid of ${highest_bid}')
                # for key in bidder:
                #     print(bidder[key])

start_secret_auction()