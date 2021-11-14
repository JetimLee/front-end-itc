# get current age
# calculate amount of days, weeks and months left until 90
# 1 year = 365 days, 1 year = 52 weeks and 1 year = 12 months

def calculateTimeLeft():
    age = input('Please enter your age: ')
    ageNumber = int(age)
    yearsLeft = int(90-ageNumber)
    monthsLeft = int(yearsLeft*12)
    weeksLeft = int(yearsLeft * 52)
    daysLeft = int(yearsLeft * 365)
    print(
        f'You have {yearsLeft} years, {monthsLeft} months, {weeksLeft} weeks, and {daysLeft} days left until you die.')


calculateTimeLeft()
