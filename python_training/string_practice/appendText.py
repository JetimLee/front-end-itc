def appendTextToFile(file, textToAppend):
    with open(file, "a") as f:
        f.write(textToAppend)
        f.close()

    with open(file) as f:
        lines = f.read()
        print(lines)
        f.close()


appendTextToFile("test.txt", "\nyour mother")
