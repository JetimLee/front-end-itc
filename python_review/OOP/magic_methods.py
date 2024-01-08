class MyDict:
    def __init__(self):
        self.data = {}

    def __getitem__(self, key):
        return self.data[key]

    def __setitem__(self, key, value):
        self.data[key] = value


my_dict = MyDict()
my_dict["key"] = "value"
print(my_dict["key"])  # Output: value
