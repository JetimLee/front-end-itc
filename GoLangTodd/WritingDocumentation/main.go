package main

import (
	"fmt"

	"example.com/packages/dog"
	"example.com/packages/utils"
)

type canine struct {
	name string
	age  int
}

func main() {
	fmt.Printf("%d\n", utils.StringLength(`hello`))

	fido := canine{name: "fido", age: dog.Years(10)}
	fmt.Println(fido)
}
