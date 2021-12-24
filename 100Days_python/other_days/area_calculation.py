import math
test_h = int(input('Height of wall: '))
test_w = int(input('Width of wall: '))

coverage = 5

# round up the result


def paint_calc(width, height):
    amount_of_cans = math.ceil((width*height)/coverage)
    print(f'You need {amount_of_cans} to cover {width*height} area. Your wall is {test_h} feet high and {test_w} feet width')


paint_calc(height=test_h, width=test_w)
