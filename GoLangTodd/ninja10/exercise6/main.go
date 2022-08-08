package main

import (
	"fmt"
	"sync"
)

var wg sync.WaitGroup

func main() {
	c := make(chan int)

	go func() {
		for i := 0; i <= 100; i++ {
			c <- i
		}
		close(c)
	}()

	for value := range c {
		fmt.Println(value)
	}
}
