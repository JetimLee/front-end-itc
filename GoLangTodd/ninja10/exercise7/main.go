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

// func Arithmetic(a int, b int, operator string) int {
// 	//your code here
// 	switch operator {
// 	case "add":
// 		return a + b
// 	case "subtract":
// 		return a - b
// 	case "multiply":
// 		return a * b
// 	case "divide":
// 		return a / b
// 	}
// 	return 0
// }
