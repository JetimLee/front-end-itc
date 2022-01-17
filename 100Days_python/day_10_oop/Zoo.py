class Lion:
    def __init__(self, my_name):
        self.my_name = my_name

    def rawr(self):
        print(f'Rawr, my name is {self.my_name}')


class Zoo:
    def __init__(self):
        self.lions_in_zoo = []

    def add_lion(self, lion_name):
        new_lion = Lion(lion_name)
        is_lion_found = False
        for lion in self.lions_in_zoo:
            if lion.my_name == lion_name:
                is_lion_found = True
                print('Cannot add lion with name that exists already')
                return lion, ' was not added'
        if not is_lion_found:
            self.lions_in_zoo.append(new_lion)
            print(lion_name, ' was added')
            return lion_name, ' was added'
        print(self.lions_in_zoo)

    def delete_lion(self, lion_name):
        for lion in self.lions_in_zoo:
            # print(lion.my_name)
            if lion.my_name == lion_name:
                print(f'deleting {lion_name}')
                self.lions_in_zoo.remove(lion)
                break
        # syntax of deleting item in dictionary by the key

    def print_zoo(self):
        print('Printing the names of the lions in the zoo')
        if len(self.lions_in_zoo) == 0:
            print('There are no lions in the zoo!')
        else:
            longest_name = 0
            longest_name_string = ''
            tied_name = ''
            for lion in self.lions_in_zoo:
                # print(lion.my_name)
                if len(lion.my_name) > longest_name:
                    longest_name_string = lion.my_name
                    longest_name = len(lion.my_name)
                elif len(lion.my_name) == longest_name:
                    print('There is a tie!')
                    tied_name = lion.my_name
                    print(
                        f'The two longest names are {longest_name_string} and {tied_name}')
            print(f'The longest name is {longest_name_string}')

    def count_lions(self):
        print(f'There are {len(self.lions_in_zoo)} lions in the zoo')


class ZooManager(Zoo):
    def __init__(self):
        self.lions_in_zoo = []


myZooManager = ZooManager()
myZooManager.add_lion('Shlomi')
myZooManager.add_lion('gavin')
myZooManager.add_lion('gavin')
myZooManager.add_lion('lol234934lsofjf')
myZooManager.add_lion('Sapir')
myZooManager.count_lions()
myZooManager.print_zoo()
myZooManager.delete_lion('Shlomi')
myZooManager.delete_lion('lol234934lsofjf')
# myZooManager.delete_lion('Gavin')
myZooManager.print_zoo()
myZooManager.count_lions()
