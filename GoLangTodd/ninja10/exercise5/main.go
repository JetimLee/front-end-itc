package main

import "fmt"

func main() {
	c := make(chan string)

	go func() {
		c <- "Luke I am your father"
	}()

	v, ok := <-c

	fmt.Println(v, ok)
	close(c)

	v, ok = <-c
	fmt.Println(v, ok)
	// go func() {
	// 	c <- 42
	// }()

	// v, ok := <-c
	// fmt.Println(v, ok)

	// close(c)

	// v, ok = <-c
	// fmt.Println(v, ok)
}
