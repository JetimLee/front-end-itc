

class User:
    def __init__(self,id,name,age):
        self.id = id
        self.name = name
        self.age = age
    def greeting(self):
         print(f'Hello, my name is {self.name}, I am {self.age} years old and my id is {self.id}')

#pass in my attributes here, which are variables for the class
user_1 = User(30,'Gavin',28)

user_1.greeting()

# user_1 = User()
# user_1.id = "001"
# print(user_1.id)
#attribute is a variable associated with an object