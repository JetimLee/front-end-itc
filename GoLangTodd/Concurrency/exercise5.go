package main

import (
	"fmt"
	"runtime"
	"sync"
	"sync/atomic"
)

var wg sync.WaitGroup

func main() {
	var counter int64

	const gs = 100
	wg.Add(gs)
	for i := 0; i < gs; i++ {
		go func() {
			atomic.AddInt64(&counter, 1)
			fmt.Println("counter", atomic.LoadInt64(&counter))

			runtime.Gosched()
			wg.Done()
		}()
		fmt.Println(runtime.NumGoroutine(), "number of go routines")
	}
	wg.Wait()
	fmt.Println("counter", counter)
}
