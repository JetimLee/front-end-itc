package main

import (
	"fmt"
	"runtime"
	"sync"
)

var wg sync.WaitGroup

func main() {

	wg.Add(2)

	go foo()
	go bar()
	fmt.Println(runtime.NumGoroutine())

	//important to wait, otherwise once the main go routine finishes the other ones will stop as well.
	wg.Wait()
	fmt.Println("about to exit")
	fmt.Println(runtime.NumGoroutine())

}

func foo() {
	fmt.Println("Foo")
	wg.Done()
}
func bar() {
	fmt.Println("Bar")
	wg.Done()

}
