class Train:
    def __init__(self, num_cars) -> None:
        self.num_cars = num_cars

    def __repr__(self) -> str:
        return f"{self.num_cars} car train"

    def __len__(self):
        return self.num_cars


gavin_train = Train(4)

print(gavin_train)
length = len(gavin_train)
print(length)
