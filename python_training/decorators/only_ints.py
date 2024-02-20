from functools import wraps


def only_ints(fn):
    @wraps(fn)
    def inner(*args, **kwargs):
        if any([arg for arg in args if type(arg) != int]):
            return "Please only invoke with integers."
        return fn(*args, **kwargs)

    return inner
