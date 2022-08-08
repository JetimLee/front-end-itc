package main

import "fmt"

func main() {

	c := make(chan int)
	//send
	go foo(c)
	//receive
	for v := range c {
		fmt.Println("reading")
		fmt.Println(v)
	}
	fmt.Println("about to exit")
}

//send
func foo(d chan<- int) {
	fmt.Println("foo")
	for i := 0; i < 100; i++ {
		fmt.Println("sending")
		d <- i
	}
	close(d)
}
