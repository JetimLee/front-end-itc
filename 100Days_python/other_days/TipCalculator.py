# tip calculator
# welcome to the tip calculator
# asks for total bill
# asks how much you want to tip
# asks how many people to split the bill
# returns you how much the tip is and the new total bill per person, accurate to two decimal places
# test case - $124.56

def tipCalculator():
    print('Welcome to the tip calculator!')
    totalBill = input('What was the total bill? $')
    totalBillNumber = float(totalBill)
    selectPercentage = input(
        'What percentage tip would you like to give? 10, 12, or 15? ')
    selectedPercentage = float(selectPercentage)/100
    amountOfPeopleToSplitBill = input('How many people to split the bill? ')
    amountOfPeopleToSplitBillNumber = float(amountOfPeopleToSplitBill)
    newBill = (totalBillNumber*selectedPercentage + totalBillNumber) / \
        amountOfPeopleToSplitBillNumber
    print(f'Your new bill is ${round(newBill,2)}')


tipCalculator()
