# elif will execute if all other conditions are false
# else will execute if everything else is false


name = 'A'
age = 0
if name == 'Alice':
    print('Hi Alice')
elif age < 12:
    print('You are not Alice, kiddo')
elif age > 2000:
    print('Unlike you, Alice is not an undead, immortal vampire.')
elif age > 100:
    print('You are not Alice, grannie')
else:
    print('End of the line')
