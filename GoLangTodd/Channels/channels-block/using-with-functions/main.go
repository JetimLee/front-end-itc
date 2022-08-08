package main

import "fmt"

func main() {

	c := make(chan int)
	//send
	go foo(c)
	//receive
	bar(c)
	fmt.Println("about to exit")
}

//send
func foo(d chan<- int) {
	fmt.Println("foo")
	d <- 42
}

//receive
func bar(d <-chan int) {
	fmt.Println("bar")
	fmt.Println(<-d)
	fmt.Println("read from channel")
}
