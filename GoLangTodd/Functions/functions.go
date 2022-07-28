package main

import "fmt"

//EVERYTHING IN GO IS PASSED BY VALUE
//func (r receiver) identifier(params) (return(s)) {code}
func main() {
	/*
		A defer statement defers the execution of a function until the surrounding function returns.

		The deferred call's arguments are evaluated immediately, but the function call is not executed until the surrounding function returns.*/

	//when func main exits anything with defer is then run
	defer foo()
	greet("Gavin")
	wooo := woo()
	fmt.Println(wooo)

	xi := []int{60, 9}

	x, y := isASith("Obi-wan", "Kenobi")
	fmt.Println(x)
	fmt.Println(y)

	//the type here will be of []int
	//seems pretty similar to rest operator
	sum := variadicParams(60, 9)
	otherSum := variadicParams(xi...)
	fmt.Println(sum)
	fmt.Println(otherSum)

}

func greet(s string) {
	fmt.Println("Hello,", s)
}
func foo() {
	fmt.Println("Hello from foo")
}
func woo() string {
	return "Hello from woo"
}
func isASith(fn string, ln string) (string, bool) {
	a := fmt.Sprint(fn, " ", ln, `, says "He is a sith"`)
	b := true
	return a, b
}

func variadicParams(ints ...int) int {

	sum := 0
	for _, num := range ints {
		sum += num
	}
	return sum
}

//variadic parameters - can be 0 or more of that type of param
//can only be used in the last param slot
