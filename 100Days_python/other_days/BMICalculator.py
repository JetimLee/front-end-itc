def figureBMI():
    heightString = input(('Enter your height in meters: '))
    weightString = input(('Enter your weight in kg: '))
    weight = float(weightString)
    height = float(heightString)
    calculateBMI = weight/(height**2)
    finalBMI = round(calculateBMI)
    print(finalBMI)


figureBMI()
