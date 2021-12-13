def loveCalculator():
    print("Welcome to the love calculator!")
    name1 = input("What is your name?")
    name2 = input("What is the second name?")
    name1_low = name1.lower()
    name2_low = name2.lower()
    t1_count = name1_low.count("t")
    r1_count = name1_low.count("r")
    u1_count = name1_low.count("u")
    e1_count = name1_low.count("e")
    l1_count = name1_low.count('l')
    o1_count = name1_low.count('o')
    v1_count = name1_low.count('v')
    total_name1 = t1_count+r1_count+u1_count + \
        e1_count + l1_count+o1_count+v1_count+e1_count
    t2_count = name1_low.count("t")
    r2_count = name1_low.count("r")
    u2_count = name1_low.count("u")
    e2_count = name1_low.count("e")
    l2_count = name2_low.count("l")
    o2_count = name2_low.count("o")
    v2_count = name2_low.count("v")
    total_name2 = t2_count+r2_count+u2_count + \
        e2_count+l2_count+o2_count+v2_count+e2_count
    print(
        f"You, {name1} have a {total_name1}{total_name2}% of being with {name2}")


loveCalculator()
