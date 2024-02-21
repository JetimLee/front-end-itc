from functools import wraps
from time import sleep


def delay(val):
    def inner(fn):
        @wraps(fn)
        def wrapper(*args, **kwargs):
            print(f"Waiting {val}s before running {fn.__name__}")
            sleep(val)
            return fn(*args, **kwargs)

        return wrapper

    return inner


@delay(3)
def say_hi():
    return "hi"


say_hi()
