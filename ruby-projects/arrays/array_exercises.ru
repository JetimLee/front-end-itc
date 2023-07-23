def nil_array(number)
  # return an array containing `nil` the given number of times
  return Array.new(number, nil)
end
def first_element(array)
  # return the first element of the array
  return array.first
end
puts first_element([1, 2, 3])
print nil_array(3)

def third_element(array)
  # return the third element of the array
  return array[2]
end

puts third_element([3, 4, 5])

def last_three_elements(array)
  # return the last 3 elements of the array
  return array.last(3)
end
puts last_three_elements([1, 2, 3, 4, 5, 6])

def add_element(array)
  # add an element (of any value) to the array
  return array.push(1)
end
puts add_element([1, 2])
def remove_last_element(array)
  # Step 1: remove the last element from the array
  array.pop()

  # Step 2: return the array (because Step 1 returns the value of the element removed)
  return array
end

print remove_last_element([1, 2, 3, 4])

def remove_first_three_elements(array)
  # Step 1: remove the first three elements
  array = array.slice(3, array.size)

  # Step 2: return the array (because Step 1 returns the values of the elements removed)
  return array
end
print "\nremove first\n"
print remove_first_three_elements([1, 2, 3, 4, 5])

def array_concatenation(original, additional)
  # return an array adding the original and additional array together
  return original + additional
end
print array_concatenation([1, 2, 3], [4, 5, 6])

def array_difference(original, comparison)
  # return an array of elements from the original array that are not in the comparison array
  return original - comparison
end

print array_difference([1, 2, 3, 4], [1, 2, 4])

def empty_array?(array)
  # return true if the array is empty
  return array.empty?
end

print empty_array?([3])

def reverse(array)
  # return the reverse of the array
  return array.reverse
end

print reverse([1, 2, 3])

def array_length(array)
  # return the length of the array
  return array.size
end

def include?(array, value)
  # return true if the array includes the value
  return array.include?(value)
end
print include?([1, 2, 3], 4)

def join(array, separator)
  # return the result of joining the array with the separator
  return array.join(separator)
end

print join([1, 2, 3], "-.-")
