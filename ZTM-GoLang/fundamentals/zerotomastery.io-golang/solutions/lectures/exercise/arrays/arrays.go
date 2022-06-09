//--Summary:
//  Create a program that can store a shopping list and print
//  out information about the list.
//
//--Requirements:
//* Using an array, create a shopping list with enough room
//  for 4 products
//  - Products must include the price and the name
//* Insert 3 products into the array
//* Print to the terminal:
//  - The last item on the list
//  - The total number of items
//  - The total cost of the items
//* Add a fourth product to the list and print out the
//  information again

package main

import "fmt"

type Product struct {
	description string
	price       float64
}

//* Print to the terminal:
//  - The last item on the list
//  - The total number of items
//  - The total cost of the items
func printShoppingList(arr []Product) {
	var sum float64
	lastItemIndex := len(arr)
	lastItem := arr[lastItemIndex-1]
	totalItems := len(arr)
	for i := 0; i < len(arr); i++ {
		//always do this, otherwise you'll hit an issue with concurrency
		product := arr[i]
		if product.description != "" {
			sum += product.price
		}
	}
	fmt.Println(`The total price is: `, sum)
	fmt.Println("The last item is ", lastItem)
	fmt.Println("There are:", totalItems, "items on the shopping list.")

}

func main() {
	var shoppingList [4]Product
	shoppingList[0] = Product{description: "Bar of soap", price: 30.80}
	shoppingList[1] = Product{description: "Deodorant", price: 60.20}
	shoppingList[2] = Product{description: "Toothpaste", price: 9}
	printShoppingList(shoppingList[0:3])
	shoppingList[3] = Product{description: "Underwear", price: -31}
	printShoppingList(shoppingList[:])
	items := shoppingList[2:]
	fmt.Println(items)
	//* Using an array, create a shopping list with enough room
	//  for 4 products

	//* Add a fourth product to the list and print out the
	//  information again

}
