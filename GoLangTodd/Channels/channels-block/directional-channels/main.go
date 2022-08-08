package main

import "fmt"

func main() {
	//this is a bi-directional channel
	c := make(chan int, 2)

	d := make(<-chan int)

	e := make(chan<- int)

	fmt.Printf("%T the type of d\n", d)
	fmt.Printf("%T the type of e\n", e)

	c <- 42

	c <- 43

	//this will block and get the value
	fmt.Println(<-c)
	fmt.Println(<-c)
	fmt.Println("---------")
	fmt.Printf("%T\n", c)

}
