def findIfLeapYear(year):
    print(year)
    if(year % 400 == 0 and year % 4 == 0):
        print('leap year')
    elif (year % 4 == 0 and year % 100 == 0 and year % 400 != 0):
        print('not a leap year')
    elif (year % 4 == 0):
        print('leap year')


findIfLeapYear(2000)
findIfLeapYear(2100)
findIfLeapYear(1900)
findIfLeapYear(2020)
findIfLeapYear(2024)
findIfLeapYear(2028)
findIfLeapYear(1700)
findIfLeapYear(1800)
