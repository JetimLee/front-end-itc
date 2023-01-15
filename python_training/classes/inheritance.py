class Human:
    def __init__(self, first, last, age):
        self.first = first
        self.last = last
        if age >= 0:
            self._age = age
        else:
            self._age = 0

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, value):
        if value >= 0:
            self._age = value
        else:
            raise ValueError("An invalid age was given to the age setter")

    @property
    def full_name(self):
        return f'{self.first} {self.last}'

    def __repr__(self):
        return f"Human({self.first},{self.last},{self._age})"

# old javaish way
        # def get_age(self):
    #     return self._age

    # def set_age(self, new_age):
    #     if new_age >= 0:
    #         self._age = new_age
    #     else:
    #         raise ValueError("An invalid age was given to the set age method")


jane = Human("Jane", "Goodall", 50)
gavin = Human("Gavin", "Coulson", -10)
print(jane.age)
print(gavin.age)
gavin.age = 29
# gavin.age = -1

print(repr(gavin))
print(gavin.full_name)

print(gavin.__dict__)
