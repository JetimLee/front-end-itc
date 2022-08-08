package main

import "fmt"

func main() {
	c := make(chan int)

	//42 gets here into the channel and its stuck since nothing comes to take it off
	c <- 42

	fmt.Println(<-c)
}

//this will result ina  all goroutines are sleep - deadlock
//this is because the send and receive in the channel cannot happen at the same time
