package main

import (
	"fmt"
	"runtime"
	"sync"
	"sync/atomic"
)

/*

Atomic operations leverage processor support (compare and swap instructions) and don't use locks at all, whereas locks are more OS-dependent and perform differently on, for example, Win and Linux.

Locks actually suspend thread execution, freeing up cpu resources for other tasks, but incurring in obvious context-switching overhead when stopping/restarting the thread. On the contrary, threads attempting atomic operations don't wait and keep trying until success (so-called busy-waiting), so they don't incur in context-switching overhead, but neither free up cpu resources.

Summing up, in general atomic operations are faster if contention between threads is sufficiently low. You should definitely do benchmarking as there's no other reliable method of knowing what's the lowest overhead between context-switching and busy-waiting.

*/

func main() {

	fmt.Println("number of cpus \t", runtime.NumCPU())
	fmt.Println("number of go routines \t", runtime.NumGoroutine())
	var counter int64

	const gs = 100
	var wg sync.WaitGroup

	// var mu sync.Mutex

	wg.Add(gs)
	for i := 0; i < gs; i++ {
		go func() {
			// mu.Lock()
			atomic.AddInt64(&counter, 1)
			fmt.Println("counter", atomic.LoadInt64(&counter))
			// v := counter
			runtime.Gosched()
			// v++
			// counter = v
			// mu.Unlock()
			wg.Done()
		}()
		fmt.Println("number of go routines \t", runtime.NumGoroutine())

	}
	wg.Wait()

	fmt.Println("number of go routines \t", runtime.NumGoroutine())
	fmt.Println("counter", counter)
}
