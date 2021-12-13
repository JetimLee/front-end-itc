def findIfLeapYear(year):
    print(year)
    if(year % 400 == 0 and year % 4 == 0):
        print('leap year')
    elif (year % 4 == 0 and year % 100 == 0 and year % 400 != 0):
        print('not a leap year')
    elif (year % 4 == 0):
        print('leap year')
    else:
        print(year)
        print('not a leap year')


findIfLeapYear(2400)
findIfLeapYear(1989)
findIfLeapYear(1990)
findIfLeapYear(1996)
