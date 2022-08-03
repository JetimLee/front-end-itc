package main

import (
	"fmt"
)

const (
	C2018 = iota + 2018
	C2019
	C2020
	C2021
)

var x int = 42

const mySomething int = 69
const anotherSomething = "hello"

func main() {
	fmt.Println(C2021, C2020, C2019, C2018)
	helloWorld := `hello world
	oh yeah
	this is a big string`
	fmt.Println(helloWorld)
	fmt.Printf("%d\t%b\t%#x\n", mySomething, mySomething, mySomething)

	newSomething := mySomething << 1
	fmt.Printf("%d\t%b\t%#x", newSomething, newSomething, newSomething)

	// something := 3 == 3
	// anotherThing := 3 <= 2
	// somethingElse := 2 >= 1
	// onceMore := 2 != 1
	// heyo := 2 < 3
	// yesss := 4 > 3
	// fmt.Println("\n", something, anotherThing, somethingElse, onceMore, heyo, yesss)
	// fmt.Println(mySomething, anotherSomething)

}
