family = {
  uncles: %w[bob joe steve],
  sisters: %w[jane jill beth],
  brothers: %w[frank rob david],
  aunts: %w[mary sally susan],
}

immediate_family = family.select { |k, v| k == :sisters || k == :brothers }

arr = immediate_family.values.flatten

p arr

family.each { |key, value| puts "Key: #{key}, value: #{value}" }

keys = family.keys

keys.each { |key| puts key }

values = family.values

values.each { |val| puts val }

person = { name: "Bob", occupation: "web developer", hobbies: "painting" }

puts person[:name]
