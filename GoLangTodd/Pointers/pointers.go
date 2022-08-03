package main

import (
	"fmt"
)

//pointers are great for when you have a large chunk of data - instead of passing that huge chunk around, you can just pass the address around
//also good for when you need to change a value
func main() {
	a := 42
	//& gives you te address in memory
	fmt.Println(&a)

	b := &a
	fmt.Println(b)
	squareAdd(b)
	fmt.Println("after square add")
	fmt.Println(a)

	//* is used to dereference the address - it will give you the value stored at that address
	fmt.Println(*b)

	*b = 69
	fmt.Println(a)

	// var b int = *&a
	// fmt.Println(b)
	// *&a = 60
	// fmt.Println(a)

	x := 0
	foo(x)
	fmt.Println(x)
	fmt.Println(&x)

	y := &x
	bar(y)
	fmt.Println(x)
	fmt.Println(&x)
}
func foo(y int) {
	fmt.Println(y)
	y = 43
	fmt.Println(y)

}
func bar(y *int) {
	*y = 43
}

func squareAdd(p *int) {
	fmt.Println(p, *p)
	*p *= *p
}
