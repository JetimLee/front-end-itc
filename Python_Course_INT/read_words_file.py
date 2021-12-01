def read_words_from_file(file):
    with open(file, 'r') as inputted_file:
        content = inputted_file.read()
        # this turns the read content into a string
        joined_content = content.replace(',', " ")
        words = joined_content.split(" ")
        print(len(words))


read_words_from_file("myText.txt")
