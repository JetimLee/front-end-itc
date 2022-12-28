def perfNumber():
    inp = int(input("Enter the number:"))
    divisors = []
    for i in range(1, inp+1):
        if inp % i == 0 and i != inp:
            divisors.append(i)
    return sum(divisors) == inp


print(perfNumber())
