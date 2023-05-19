def concatenate_example(string)
    # use concatenation to format the result to be "Classic <string>"
    "Classic " << string
  end
  
  def concatenate(string)
    return "Hello" + string
    # use concatenation to format the result to be "Hello <string>!"
  end
  
  def substrings(word)
    return word[0,4]
    # return the first 4 letters from the word using substrings
  end
  
  def capitalize(word)
    return word.capitalize
    # capitalize the first letter of the word
  end
  
  def uppercase(string)
    return string.uppcase
    # uppercase all letters in the string
  end
  
  def downcase(string)
    return string.downcase
    # downcase all letters in the string
  end
  
  def empty_string(string)
    return string == ''
    # return true if the string is empty
  end
  
  def string_length(string)
    return string.length
    # return the length of the string
  end
  
  def reverse(string)
    return string.reverse
    # return the same string, with all of its characters reversed
  end
  
  def space_remover(string)
    return string.strip
    # remove all the spaces in the string using gsub
  end