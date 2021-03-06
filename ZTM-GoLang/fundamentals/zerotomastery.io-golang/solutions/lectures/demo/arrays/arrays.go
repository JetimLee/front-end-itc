package main

import "fmt"

type Room struct {
	name    string
	cleaned bool
}
type ForceUser struct {
	name string
	Sith bool
}

// Must specify the number of array elements in the function parameters
func checkCleanliness(rooms [4]Room) {
	for i := 0; i < len(rooms); i++ {
		room := rooms[i]
		if room.cleaned {
			fmt.Println(room.name, "is clean")
		} else {
			fmt.Println(room.name, "is dirty")
		}
	}
}

func main() {
	jedi := [...]ForceUser{
		{name: "Anakin", Sith: false},
	}
	for i := 0; i < len(jedi); i++ {
		currentJedi := jedi[i]
		if !currentJedi.Sith {
			fmt.Println(currentJedi.name + " is not a sith!")
		}
	}
	fmt.Println(jedi)
	rooms := [...]Room{
		{name: "Office"},
		{name: "Warehouse"},
		{name: "Reception"},
		{name: "Ops"},
	}

	checkCleanliness(rooms)

	fmt.Println("Performing cleaning...")
	// Elements start at index 0
	rooms[2].cleaned = true // element 3
	rooms[3].cleaned = true // element 4

	checkCleanliness(rooms)
}
