class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species

    def make_sound(self, sound):
        print(f"This animal says {sound}")

    def __repr__(self):
        return f"{self.name} is a {self.species}"


class Cat(Animal):
    def __init__(self, name, species, breed, toy):
        super().__init__(name, species)
        self.breed = breed
        self.toy = toy


blue = Cat("Gavin", "Feline", "Golden Lion", "A Red Ball")

print(blue)


class Character:
    def __init__(self, name, hp, level):
        self.name = name
        self.hp = hp
        self.level = level


class NPC(Character):
    def __init__(self, name, hp, level):
        super().__init__(name, hp, level)
