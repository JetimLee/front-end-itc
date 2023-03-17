def cakes(recipe, available):
    # if recipe calls for more stuff than there is available

    return min([available[i] // recipe[i] if i in available else 0 for i in recipe])
