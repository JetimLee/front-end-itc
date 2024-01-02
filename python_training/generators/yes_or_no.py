"""
gen = yes_or_no()
next(gen) # 'yes'
next(gen) # 'no'
next(gen) # 'yes'
next(gen) # 'no'
"""


def yes_or_no():
    while True:
        # first time next is called
        yield "yes"
        # when next is called again it'll be this
        yield "no"
