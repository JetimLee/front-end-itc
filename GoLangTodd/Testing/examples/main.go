package main

import "fmt"

func main() {
	myNumbers := []int{1, 2, 3}
	sum := mySum(myNumbers...)
	fmt.Println(sum)
}

func mySum(xi ...int) int {
	sum := 0
	for _, value := range xi {
		sum += value
	}
	return sum
}
