class GrumpyDict(dict):
    def __repr__(self) -> str:
        print("NONE OF YOUR BUSINESS")
        return super().__repr__()

    def __missing__(self, key):
        return f"You want {key}? WELL IT AIN'T HERE!"

    def __setitem__(self, __key, __value) -> None:
        print(f"YOU WANT TO CHANGE {__key}? FINE!")
        return super().__setitem__(__key, __value)


data = GrumpyDict({"first": "Tom", "animal": "cat"})

print(data)
print(data["Gavin"])
data["first"] = "Emily"
print(data["first"])
