package main

import (
	"fmt"
	"math"
)

type person struct {
	first string
	last  string
	age   int
}
type square struct {
	length float64
	width  float64
}
type circle struct{ radius float64 }

type shape interface {
	area() float64
}

func main() {
	defer delay()
	meaningOfLife := foo(42)

	theAnswer, theQuestion := bar(meaningOfLife, "the ultimate question")

	fmt.Println(theAnswer, theQuestion)

	sum := foo2(1, 2, 3)
	fmt.Println(sum)

	sum2 := bar2([]int{1, 2, 3})
	fmt.Println(sum2)

	gavin := person{first: "Gavin", last: "Coulson", age: 28}

	gavin.speak()

	mySquare := square{length: 15, width: 15}
	myCircle := circle{radius: 12.345}
	info(myCircle)
	info(mySquare)
	expr := myfFnExpression
	expr()

	func(x int) {
		fmt.Println("Hello from anon", x)
	}(69)

	doubleFn := fnThatReturnsFn()()
	fmt.Println(doubleFn)

	resultFromCb := takeCallBack(myCb, `Hello from call back`)
	fmt.Println(resultFromCb)

	myCount := count()
	myOtherCount := count()

	fmt.Println(myCount())
	fmt.Println(myCount())
	fmt.Println(myCount())
	fmt.Println(myCount())
	fmt.Println(myOtherCount())
	fmt.Println(myOtherCount())
	fmt.Println(myOtherCount())
	fmt.Println(myOtherCount())
	fmt.Println(myOtherCount())
	fmt.Println(myOtherCount())

}
func fnThatReturnsFn() func() string {
	fmt.Println("First func was called, this returns a func")
	return func() string {
		return `hello from inside the func that was returned by the first func`

	}
}
func count() func() int {
	var x int

	return func() int {
		x++
		return x
	}
}
func myCb(s string) string {
	return s
}
func takeCallBack(x func(y string) string, s string) string {
	return x(s)
}
func myfFnExpression() {
	fmt.Println("Hello from fn expression")
}
func (s square) area() float64 {
	return s.length * s.width
}
func (c circle) area() float64 {
	return math.Pi * (c.radius * c.radius)
}
func info(s shape) {
	switch s.(type) {
	case circle:
		fmt.Println("The circles area is", s.area())
	case square:
		fmt.Println("The squarea area is", s.area())
	}

}
func delay() {
	fmt.Println("This was delayed!")
}
func foo(x int) int {
	return x
}
func bar(x int, y string) (int, string) {
	return x, y
}

func (s person) speak() {
	fmt.Printf("Hello, I am %v %s and I am %d years old\n", s.first, s.last, s.age)
}

func foo2(x ...int) int {
	var sum int

	for _, value := range x {
		sum += value
	}
	return sum
}

func bar2(x []int) int {
	var sum int

	for _, value := range x {
		sum += value
	}
	return sum
}
