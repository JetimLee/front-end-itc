package main

import "fmt"

func double(x int) int {
	return x * x
}
func triple(x int) int {
	return x * x * x
}

func add(lhs, rhs int) int {
	return lhs + rhs
}

func greet() {
	fmt.Println("Hello from Go!")
}

func main() {
	greet()
	triple := triple(10)
	fmt.Println(triple)
	dozen := double(6)
	fmt.Println("A dozen is", dozen)

	bakersDozen := add(dozen, 1)
	fmt.Println("A baker's dozen is", bakersDozen)

	anotherBakersDozen := add(double(6), 1)
	fmt.Println("Have another", anotherBakersDozen)
}
