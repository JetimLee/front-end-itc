package main

import (
	"fmt"
)

type person struct {
	First string
	Last  string
}
type human interface {
	speak()
}

func main() {

	g := person{First: "Gavin", Last: "Coulson"}

	h := &g

	saySomething(h)

}

func (p *person) speak() {
	fmt.Printf("\n Hello, I am %v %s", p.First, p.Last)
}

func saySomething(h human) {
	h.speak()
}
