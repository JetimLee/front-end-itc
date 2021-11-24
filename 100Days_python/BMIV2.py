

def figureBMI():
    heightString = input(('Enter your height in meters: '))
    weightString = input(('Enter your weight in kg: '))
    weight = float(weightString)
    height = float(heightString)
    calculateBMI = weight/(height**2)
    finalBMI = round(calculateBMI)
    if(finalBMI < 18.5):
        print(f'Your BMI of {finalBMI} means you are underweight.')
    elif(finalBMI >= 18.5 and finalBMI < 25):
        print(f'Your BMI of {finalBMI} means you have a normal weight')
    elif(finalBMI >= 25 and finalBMI < 30):
        print(f'Your final BMI of {finalBMI} means you are obese')
    elif(finalBMI > 35):
        print(f'Your BMI of {finalBMI} means you are clinically obese')


figureBMI()
