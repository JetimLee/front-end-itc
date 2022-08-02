package main

import (
	"fmt"
	"runtime"
	"sync"
)

var wg sync.WaitGroup

func main() {
	fmt.Println("OS\t", runtime.GOOS)
	fmt.Println("ARCH\t", runtime.GOARCH)
	fmt.Println("CPUs\t", runtime.NumCPU())

	wg.Add(2)
	go another()

	go foo()
	fmt.Println("Goroutines\t", runtime.NumGoroutine())

	bar()

	fmt.Println("CPUs\t", runtime.NumCPU())
	fmt.Println("Goroutines\t", runtime.NumGoroutine())
	wg.Wait()
}

func foo() {
	for i := 0; i < 10; i++ {
		fmt.Println("foo:", i)

	}
	wg.Done()
}
func another() {
	for i := 0; i < 10; i++ {
		fmt.Println("another:", i)
	}
	wg.Done()

}
func bar() {
	for i := 0; i < 10; i++ {
		fmt.Println("bar:", i)
	}
}
