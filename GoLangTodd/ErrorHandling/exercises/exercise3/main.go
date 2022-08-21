package main

import (
	"fmt"
)

type customError struct {
	info string
}

func (m customError) Error() string {
	return "my custom error"
}

func main() {
	s := customError{info: "need more coffee"}
	foo(s)
}

func foo(s error) {
	fmt.Println("foo ran", s.(customError).info)
}
