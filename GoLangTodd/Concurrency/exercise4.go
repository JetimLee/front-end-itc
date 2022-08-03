package main

import (
	"fmt"
	"runtime"
	"sync"
)

var wg sync.WaitGroup

func main() {
	counter := 0
	var mu sync.Mutex

	const gs = 100
	wg.Add(gs)
	for i := 0; i < gs; i++ {
		go func() {
			mu.Lock()
			counter++
			fmt.Println("value of counter after increase", counter)
			mu.Unlock()
			wg.Done()
			//data race will occur here since the value is being read from, so best to read before unlock
			// fmt.Println("value of counter after wg.done()", counter)
		}()
		fmt.Println(runtime.NumGoroutine(), "number of go routines")
	}
	wg.Wait()
	fmt.Println("counter", counter)
}
