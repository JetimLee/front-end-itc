
names = [{'first': 'Elie', 'last': 'Schoppik'},
         {'first': 'Colt', 'last': 'Steele'}]


def extract_full_name(lstDict):
    return list(map(lambda val: "{} {}".format(val['first'], val['last']), l))
