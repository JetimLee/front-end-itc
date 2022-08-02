package main

import (
	"fmt"
	"runtime"
	"sync"
)

var wg sync.WaitGroup

func main() {
	counter := 0

	const gs = 100
	wg.Add(gs)
	for i := 0; i < gs; i++ {
		go func() {
			v := counter
			runtime.Gosched()
			v++
			counter = v
			wg.Done()
			fmt.Println("value of counter after wg.done()", counter)
		}()
		fmt.Println(runtime.NumGoroutine(), "number of go routines")
	}
	wg.Wait()
	fmt.Println("counter", counter)
}
