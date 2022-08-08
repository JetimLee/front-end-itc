package main

import (
	"fmt"
	"sync"
)

var wg sync.WaitGroup

func main() {
	c := make(chan int)
	go func() {
		c <- 42
	}()

	fmt.Println(<-c)
}
