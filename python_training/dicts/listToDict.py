person = [["name", "Jared"], ["job", "Musician"], ["city", "Bern"]]

# use the person variable in your answer

answer = {}
for line in person:
    for i in range(len(line)-1):
        answer[line[i]] = line[i+1]
        continue


# There are many potential solutions for this:

# Using a dictionary comprehension

# person = [["name", "Jared"], ["job", "Musician"], ["city", "Bern"]]
# answer = {thing[0]: thing[1] for thing in person}
# An alternate solution using a dict comprehension, without any references to list indexes:

# person = [["name", "Jared"], ["job", "Musician"], ["city", "Bern"]]
# answer = {k:v for k,v in person}
# Finally, a really simple solution.  If you have a list of pairs, you can very easily turn it into a dictionary using dict()

# person = [["name", "Jared"], ["job", "Musician"], ["city", "Bern"]]
# answer = dict(person)
