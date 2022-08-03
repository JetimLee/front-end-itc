package main

import "fmt"

type person struct {
	first string
	last  string
}

type secretAgent struct {
	person
	ltk bool
}

//EVERYTHING IN GO IS PASSED BY VALUE
//func (r receiver) identifier(params) (return(s)) {code}

//an interface is how you define behavior in Go
type human interface {
	speak()
}

//closure - we are limiting that variables existence to one area, IE we're enclosing that variable

//you are of type human if you have the speak method

func main() {
	/*
		A defer statement defers the execution of a function until the surrounding function returns.

		The deferred call's arguments are evaluated immediately, but the function call is not executed until the surrounding function returns.*/

	//when func main exits anything with defer is then run
	defer foo()
	defer func() {
		fmt.Println("I am anonymous!")
	}()
	greet("Gavin")
	wooo := woo()
	fmt.Println(wooo)

	xi := []int{60, 9}

	bb := func(x int) {
		fmt.Println("The year Big Brother started", x)
	}
	bb(1984)

	x, y := isASith("Obi-wan", "Kenobi")
	fmt.Println(x)
	fmt.Println(y)

	//the type here will be of []int
	//seems pretty similar to rest operator
	sum := variadicParams(60, 9)
	otherSum := variadicParams(xi...)
	fmt.Println(sum)
	fmt.Println(otherSum)

	sa1 := secretAgent{person: person{first: "James", last: "Bond"}, ltk: true}
	fmt.Println(sa1)
	sa1.speak()
	sa2 := secretAgent{person: person{first: "Miss", last: "Moneypenny"}, ltk: false}
	sa2.speak()
	fmt.Printf("%T\n", sa1)
	takeHuman(sa1)
	p1 := person{first: "No", last: "Dr"}
	p1.speak()
	takeHuman(p1)
	fmt.Printf("%T\n", p1)

	meaningOfLife := returnAFunc()()
	fmt.Println("The meaning of life", meaningOfLife)
	ii := []int{66, 69, 70}
	s2 := even(variadicParams, ii...)
	allnNums := variadicParams(ii...)
	fmt.Println("sum 2", s2)
	fmt.Println("all nums", allnNums)

	s3 := odd(variadicParams, 1, 3, 2)
	fmt.Println("odds", s3)
	fmt.Println("All nums", variadicParams(1, 3, 2))

	firstTime := incremnetor()
	fmt.Println(firstTime())
	fmt.Println(firstTime())
	fmt.Println(firstTime())

	factorialNum := factorial(5)
	fmt.Println("example with recursion", factorialNum)
	factorialLoopVar := factorialLoop(4)
	fmt.Println("example with loop", factorialLoopVar)

	fiboNumber := fibonacci(6)
	fmt.Println(fiboNumber, "i am fibo")
}
func odd(f func(xi ...int) int, yi ...int) int {
	var yii []int

	for _, value := range yi {
		if value%2 == 1 {
			fmt.Println(value)
			yii = append(yii, value)
		}
	}
	return f(yii...)

}
func factorialLoop(n int) int {
	var factorial int = n
	for i := n - 1; i > 0; i-- {
		factorial *= i
	}
	return factorial
}
func greet(s string) {
	fmt.Println("Hello,", s)
}
func incremnetor() func() int {
	var x int

	return func() int {
		x++
		return x
	}
}
func foo() {
	fmt.Println("Hello from foo")
}
func woo() string {
	return "Hello from woo"
}

func returnAFunc() func() int {
	return func() int {
		return 42
	}
}
func takeHuman(h human) {
	switch h.(type) {
	case person:
		//type assertion - i am asserting that this is the type and i checked that with the switch statement
		fmt.Println("I am a person", h.(person).first)

	case secretAgent:
		fmt.Println("I am a secret agent", h.(secretAgent).first, h.(secretAgent).ltk)
	}
}
func isASith(fn string, ln string) (string, bool) {
	a := fmt.Sprint(fn, " ", ln, `, says "He is a sith"`)
	b := true
	return a, b
}

func even(f func(xi ...int) int, vi ...int) int {
	var yi []int
	for _, v := range vi {
		if v%2 == 0 {
			yi = append(yi, v)
		}
	}
	return f(yi...)
}
func fibonacci(n int) int {
	if n < 2 {
		return n
	}
	return fibonacci(n-1) + fibonacci(n-2)
}

func factorial(n int) int {
	fmt.Println("factorial was called")
	if n < 2 {
		return n
	}
	return n * factorial(n-1)
}

func variadicParams(ints ...int) int {

	sum := 0
	for _, num := range ints {
		sum += num
	}
	return sum
}

func (s person) speak() {
	fmt.Printf("I am %s, %s %v\n", s.last, s.first, s.last)
}

//variadic parameters - can be 0 or more of that type of param
//can only be used in the last param slot
