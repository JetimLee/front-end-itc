def banner_text(text, width):
    if len(text) > width - 4:
        raise ValueError(
            "String {0} is larger then specified width {1}".format(text, width)
        )

    if text == "*":
        print("*" * width)
    else:
        centred_text = text.center(width - 4)
        output_string = "**{0}**".format(centred_text)
        print(output_string)


banner_text("*", 50)
banner_text("Always look on the bright side of life...", 20)
banner_text("If life seems jolly rotten,", 100)
banner_text("There's something you've forgotten!", 60)
banner_text("And that's to laugh and smile and dance and sing,", 40)
banner_text(" ")
banner_text("When you're feeling in the dumps,", 60)
banner_text("Don't be silly chumps,", 1000)
banner_text("Just purse your lips and whistle - that's the thing!", 20)
banner_text("And... always look on the bright side of life...", 30)
banner_text("*", 1)
