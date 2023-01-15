class Pet:
    allowed = ['cat', 'dog', 'fish', 'rat']

    def __init__(self, name, species):
        if species not in Pet.allowed:
            raise ValueError(
                "An unsupported pet time was sent to the pet constructor")
        self.name = name
        self.species = species


cat = Pet("Blue", "cat")
dog = Pet("Wyatt", "dog")
something = Pet("something", "lion")
