package main

import (
	"encoding/json"
	"fmt"
	"log"
)

type person struct {
	First   string
	Last    string
	Sayings []string
}

func main() {
	p1 := person{
		First:   "James",
		Last:    "Bond",
		Sayings: []string{"Shaken, not stirred", "Any last wishes?", "Never say never"},
	}

	bs, e := json.Marshal(p1)
	if e != nil {
		log.Fatalln("the program failed to marshal the objects", e)
	}
	fmt.Println(string(bs))

}
