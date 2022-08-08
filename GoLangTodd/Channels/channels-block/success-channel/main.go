package main

import "fmt"

func main() {
	c := make(chan int)

	go func() {
		c <- 42
	}()

	//this will block and get the value
	fmt.Println(<-c)
}
