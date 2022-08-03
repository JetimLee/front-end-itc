package main

import (
	"fmt"
)

type person struct {
	first                   string
	last                    string
	favoriteIceCreamFlavors []string
}

type vehicle struct {
	doors int
	color string
}
type truck struct {
	vehicle
	fourWheel bool
}
type sedan struct {
	vehicle
	luxury bool
}

func main() {
	p1 := person{first: "Gavin", last: "Coulson", favoriteIceCreamFlavors: []string{"Vanilla", "Strawberry", "Fudge"}}
	p2 := person{first: "Sapir", last: "Bond", favoriteIceCreamFlavors: []string{"Cookies n Cream", "Vanilla Bean", "Mango"}}

	for _, value := range p1.favoriteIceCreamFlavors {
		fmt.Printf("\n%s loves %v", p1.first, value)
	}
	for _, value := range p2.favoriteIceCreamFlavors {
		fmt.Printf("\n%s loves %v", p2.first, value)
	}

	myPeopleMap := map[string]person{
		p1.last: p1,
		p2.last: p2,
	}
	fmt.Println("\n the whole map", myPeopleMap)
	for key, value := range myPeopleMap {
		fmt.Println("\n people map", key, value.first)
		for i, v := range value.favoriteIceCreamFlavors {
			fmt.Printf("\n %d the index, %v the value", i, v)
		}
	}

	f150 := truck{vehicle: vehicle{doors: 4, color: "red"}, fourWheel: true}
	cadillac := sedan{vehicle: vehicle{doors: 4, color: "black"}, luxury: true}
	fmt.Println("\nThe cars")
	fmt.Println(f150)
	fmt.Println(cadillac)
	fmt.Println(f150.fourWheel, cadillac.luxury)

	anon := struct {
		first     string
		something int
	}{
		first: "lord", something: 69,
	}
	fmt.Println("\n the anon struct", anon)
}
