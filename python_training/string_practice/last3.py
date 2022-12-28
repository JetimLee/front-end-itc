def last_three(string, chars):
    last_three_chars = string[-3:len(string)]
    return last_three_chars.lower() == chars.lower()


last_three("Application", "wer")
