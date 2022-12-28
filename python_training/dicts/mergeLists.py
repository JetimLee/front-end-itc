# Write your code here.

def merge_lists(l1, l2):
    merged_dict = {}
    for i in range(len((l1))):
        merged_dict[l1[i]] = l2[i]
    return merged_dict


lst1 = ['a', 'b']
lst2 = [1, 2]
merged_dict = merge_lists(lst1, lst2)
print(merged_dict)      # { 'a': 1, 'b': 2 }
