def log_between_stepper(min, max, step):
    num_arrays = []
    if min > max:
        return num_arrays
    i = min
    while i <= max:
        num_arrays.append(i)
        i += step
    return num_arrays


print(log_between_stepper(5, 9, 1))

print(log_between_stepper(-10, 15, 5))
