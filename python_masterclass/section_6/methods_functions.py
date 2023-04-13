# def lesser_of_two_evens(a,b):
#     if a%2==0 and b%2==0:
#         if a<b:
#             return a
#         return b
#     else:
#         if a>b:
#             return a
#         return b
    
# print(lesser_of_two_evens(2,4))
# print(lesser_of_two_evens(2,5)
# )

# def animal_crackers(string):
#     strings = string.split()
#     return strings[0][0].lower()==strings[1][0].lower()

# print(animal_crackers('Levelheaded Llama')
# )
# print(animal_crackers('Crazy Kangaroo')
# )

# def makes_twenty(n1,n2):
#     if 20 in list([n1,n2]):
#         return True
#     return sum(list([n1,n2]))==20

# print(makes_twenty(20,10)
# )
# print(makes_twenty(2,3)
# )

# def old_macdonald(name):
#     return name[0].upper()+name[1:3]+name[3].upper()+name[4:]

# print(old_macdonald('macdonald')
# )
# print(old_macdonald("sapir"))

# def master_yoda(phrase):
#     return " ".join(phrase.split()[::-1])

# print(master_yoda('I am home')
# )
# print(master_yoda('We are ready')
# )

# def almost_there(num):
#    return abs(num-100)<=10 or abs(num-200)<=10

# print(almost_there(90))
# print(almost_there(104)
# )
# print(almost_there(150)
# )

# print(almost_there(209)
# )

def has_33(nums:list):
    check_list = []
    for num in nums:
        if num==3:
            check_list.append(num)
            if len(check_list)==2:
                return True
        else:
            check_list=[]
    return False

print(has_33([1, 3, 3])
)

print(has_33([1, 3, 1, 3])
)
print(has_33([3, 1, 3])
)

def paper_doll(text):
    new_text = ""
    for char in text:
        new_text+=char*3
    return new_text

print(paper_doll('Hello')
)
print(paper_doll('Mississippi')
)

def blackjack(n1,n2,n3):
    numbers = list([n1,n2,n3])
    numbers_sum=sum(numbers)

    if numbers_sum<=21:
        return numbers_sum
    elif numbers_sum>21:
        if 11 in numbers:
            numbers_sum-=10
            if numbers_sum>21:
                return "BUST"
            return numbers_sum
    return "BUST"
    

print(blackjack(5,6,7)
)
print(blackjack(9,9,9)
)
print(blackjack(9,9,11)
)

def summer_69(nums:list):
    if len(nums)==0:
        return 0
    numbers_between = []
    six_seen = False
    for num in nums:
        if num==6:
            six_seen=True
        elif num==9 and six_seen==True:
            six_seen=False
            continue

        if six_seen==True:
            continue
        numbers_between.append(num)
    return sum(numbers_between)
            

print(summer_69([1, 3, 5])
)
print(summer_69([4, 5, 6, 7, 8, 9])
)
print(summer_69([2, 1, 6, 9, 11])
)

def spy_game(nums:list):
    string_list = [str(num) for num in nums]
    stringified_list = "".join(string_list)
    return "007" in stringified_list

print(spy_game([1,2,4,0,0,7,5])
)
print(spy_game([1,0,2,4,0,5,7])
)
print(spy_game([1,7,2,0,4,5,0])
)
print(spy_game([1,2,3,4,0,0,0,0,0,0,7])
)

def is_prime(n):
  if n == 2 or n == 3: return True
  if n < 2 or n%2 == 0: return False
  if n < 9: return True
  if n%3 == 0: return False
  r = int(n**0.5)
  # since all primes > 3 are of the form 6n ± 1
  # start with f=5 (which is prime)
  # and test f, f+2 for being prime
  # then loop by 6. 
  f = 5
  while f <= r:
    print('\t',f)
    if n % f == 0: return False
    if n % (f+2) == 0: return False
    f += 6
  return True   

def count_primes(num):
    prime_count = 0
    for i in range(num):
        if is_prime(i):
            prime_count+=1
    return prime_count

print(count_primes(100)
)