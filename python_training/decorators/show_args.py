from functools import wraps


def shout(fn):
    def wrapper(*args, **kwargs):
        return fn(*args, **kwargs).upper()

    return wrapper


def show_args(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print("Positional arguments:", args)
        print("Keyword arguments:", kwargs)
        result = func(*args, **kwargs)
        return result

    return wrapper


def double_function(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return [result, result]

    return wrapper


def ensure_fewer_than_three_args(func):
    def wrapper(*args, **kwargs):
        if len(args) > 2:
            return "Too many arguments!"
        result = func(*args, **kwargs)
        return result

    return wrapper
