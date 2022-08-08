package main

import "fmt"

func main() {
	c := make(chan int)
	const goroutines = 10
	for i := 0; i < goroutines; i++ {
		go func() {
			for j := 0; j < 10; j++ {
				c <- j
			}
		}()

	}

	for k := 0; k < 100; k++ {
		fmt.Println(k, <-c)
	}

}
