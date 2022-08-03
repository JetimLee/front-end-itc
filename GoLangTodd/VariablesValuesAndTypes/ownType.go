package main

import "fmt"

type hotdog int

var s hotdog

func main() {
	fmt.Printf("%T\n", s)

	s = 60

	x := 69
	fmt.Printf("%T\n", x)
	x = int(s)
	fmt.Println(x)
}
