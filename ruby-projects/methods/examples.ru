puts "anything".reverse

#this is an implict return, does not need an explicit return
def my_name
  "Joe Smith"
end

puts my_name

def greet(name = "stranger")
  "Hello, " + name + "!"
end

puts greet

#an example of a return guard, doing it this way also tells ruby to exit out of the function if it gets into this position
def even_odd(number)
  unless number.is_a? Numeric
    return "A number was not entered."
  end

  if number % 2 == 0
    "That is an even number."
  else
    "That is an odd number."
  end
end
