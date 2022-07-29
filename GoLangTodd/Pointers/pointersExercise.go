package main

import "fmt"

type person struct {
	first string
	last  string
}

func main() {
	a := 38

	fmt.Println(&a)

	gavin := person{first: "Gavin", last: "coulson"}
	fmt.Println(gavin)
	changeMe(&gavin)
	fmt.Println(gavin)

}

func changeMe(x *person) {
	(*x).first = "sapir"
	(*x).last = "coulson"

}
