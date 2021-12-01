file = open("myText.txt", "w+")
file.write("Hello World")
file.close()
f = open("myText.txt", "r")
if f.mode == "r":
    contents = f.read()
    print(contents)
