def be_polite(fn):
    def wrapper():
        print("What a pleasure to meet you!")
        fn()
        print("Have a great day!")

    return wrapper


@be_polite
def greet():
    print("My name is Matt.")


greet()


def shout(fn):
    def wrapper(*args, **kwargs):
        return fn(*args, **kwargs).upper()

    return wrapper


@shout
def greet_two(name):
    print("greet two was called")
    return f"Hello, I'm {name}"


greet_two("Gavin")
