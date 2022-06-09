//--Summary:
//  Use functions to perform basic operations and print some
//  information to the terminal.
//
//--Requirements:
//* Write a function that accepts a person's name as a function
//  parameter and displays a greeting to that person.
//* Write a function that returns any message, and call it from within
//  fmt.Println()
//* Write a function to add 3 numbers together, supplied as arguments, and
//  return the answer
//* Write a function that returns any number
//* Write a function that returns any two numbers
//* Add three numbers together using any combination of the existing functions.
//  - Print the result
//* Call every function at least once
package main

import "fmt"

//* Write a function that returns any two numbers
func getPersonsName(name string) string {
	fmt.Println(`Hello ` + name)
	return `Hello ` + name
}
func returnMessage(msg string) string {
	return msg
}
func add3(x int, y int, z int) int {
	return x + y + z
}
func returnNumber(num int) int {
	return num
}

func twoTwos() (int, int) {
	return 2, 2
}

//* Write a function that returns any number
func five() int {
	return 5
}

//* Write a function to add 3 numbers together, supplied as arguments, and
//  return the answer
func addThree(a, b, c int) int {
	return a + b + c
}

//* Write a function that accepts a person's name as a function
//  parameter and displays a greeting to that person
func greetPerson(name string) {
	fmt.Println("Hello", name)
}

//* Write a function that returns any message, and call it from within
//  fmt.Println()
func hiThere() string {
	return "Hi there!"
}

func main() {
	greetPerson("Alice")
	getPersonsName("Gavin")
	fmt.Println(hiThere())
	fmt.Println(returnMessage("Hello"))
	var result int = add3(3, 4, 3)
	otherResult := returnNumber(9)
	var anotherResult = addThree(10, 10, 10)
	total := add3(result, otherResult, anotherResult)
	fmt.Println(total, "my total")

	//* Add three numbers together using any combination of the existing functions.
	a, b := twoTwos()
	answer := addThree(five(), a, b)
	//  * Print the result
	fmt.Println(answer)
}
