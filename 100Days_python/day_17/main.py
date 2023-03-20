class User:
    def __init__(self, user_name: str, age: int):
        self.user_name = user_name
        self.age = age
        self.followers = 0
        self.following = 0

    def __repr__(self):
        return f"username: {self.user_name}, age: {self.age}"

    def follow(self, user: User):
        user.followers += 1
        self.following += 1


user_1 = User("Gavin", 29)

user_2 = User("Jetim", 29)

user_1.follow(user_2)
