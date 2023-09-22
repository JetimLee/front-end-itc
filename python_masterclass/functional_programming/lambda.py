my_list = [1, 2, 3]

# anonymous lambda function
print(list(map(lambda item: item * 2, my_list)))

results = [100, 20, 300, 404, 500]

wanted_results = list(filter(lambda item: item >= 300, results))
print(wanted_results)
