package main

import (
	"fmt"
)

type person struct {
	first string
	last  string
	age   int
}
type secretAgent struct {
	person
	ltk bool
}

//You create values of type x, not classes/objects

func main() {

	gavin := person{first: "Gavin", last: "Coulson", age: 28}
	fmt.Println(gavin.age)
	jamesBond := secretAgent{person: person{first: "James", last: "Bond", age: 34}, ltk: true}
	fmt.Println(jamesBond)
	fmt.Printf("%T", jamesBond)

	anakin := struct {
		Jedi       bool
		Sith       bool
		JediMaster bool
	}{
		Jedi: false, Sith: true, JediMaster: false,
	}
	fmt.Printf("\n %T, %v", anakin, anakin)

	//structs are pretty much like TS's union types - as far as being able to group different things of different types

}
