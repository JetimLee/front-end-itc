def create_favorite_hash(color, number)
  # return a hash with the following key/value pairs:
  # key of color (as a symbol) with value of the color argument
  # key of number (as a symbol) with the value of the number argument
  return { color: color, number: number }
end
puts create_favorite_hash("blue", 3)

my_hash = create_favorite_hash("blue", 3)

def favorite_color(favorite_list)
  # return the value of the color key
  return favorite_list[:color]
end
puts favorite_color(my_hash)

def favorite_number(favorite_list)
  # use #fetch to return the value of the number key or 42 if the key is not found
  return favorite_list.fetch(:number, 42)
end
puts favorite_number({})
def update_favorite_movie(favorite_list, movie)
  # Step 1: add/update the key of movie (as a symbol)
  favorite_list[:movie] = movie

  # Step 2: return the hash (because Step 1 returns the value of the movie key)
  return favorite_list
end
puts update_favorite_movie({}, "lord of the rings")

def remove_favorite_number(favorite_list)
  # Step 1: delete the number data
  favorite_list.delete(:number)

  # Step 2: return the hash (because Step 1 returns the value of the number key)
  return favorite_list
end

puts remove_favorite_number(my_hash)
def favorite_categories(favorite_list)
  return favorite_list.keys
end
my_hash[:something] = "hello"
print favorite_categories(my_hash)

def favorite_items(favorite_list)
  return favorite_list.values
end

print "\n#{favorite_items(my_hash)}"

def merge_favorites(original_list, additional_list)
  # merge the two hashes: original_list and additional_list
  return original_list.merge(additional_list)
end

puts merge_favorites(my_hash, { name: "gavin", age: 29 })
