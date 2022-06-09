package main

import "fmt"

func main() {
	shoppingList := make(map[string]int)
	shoppingList["eggs"] = 11
	shoppingList["milk"] = 1
	shoppingList["bread"] += 1
	shoppingList["eggs"] += 1
	shoppingList["cereal"] += 5
	fmt.Println(shoppingList)

	delete(shoppingList, "milk")
	fmt.Println(shoppingList)

	fmt.Println("need", shoppingList["eggs"], "eggs")

	cereal, found := shoppingList["cereal"]
	//the found here is a boolean and its value is determined if the thing in the map exists
	fmt.Println("Need cereal?")
	if !found {
		fmt.Println("nope")
	} else {
		fmt.Println("yup:", cereal, "boxes")
	}

	totalItems := 0
	//iterating over key, value pairs in the map
	for j, amount := range shoppingList {
		fmt.Println(j)
		fmt.Println(amount)
		totalItems += amount
	}
	fmt.Println("There are", totalItems, "on the shopping list")

}
