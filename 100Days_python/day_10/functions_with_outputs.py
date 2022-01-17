def format_name(f_name,l_name):
    first_char = f_name[0:1]
    upper_char = first_char.upper()
    new_name = upper_char + f_name[1:]
    first_char_last = l_name[0:1]
    last_upper = first_char_last.upper()
    new_last = last_upper + l_name[1:]
    return f'{new_name} {new_last}'

output = format_name('gavin','coulson ')
print(output)