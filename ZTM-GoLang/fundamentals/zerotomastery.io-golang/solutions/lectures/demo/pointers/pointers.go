package main

import "fmt"

type Counter struct {
	hits int
}

func increment(counter *Counter) {
	// Using dot notation automatically dereferences. No asterisk(*) needed.
	counter.hits += 1
	fmt.Println("Counter", counter)
}

func replace(old *string, new string, counter *Counter) {
	*old = new
	increment(counter)
}
func replaceValue(old *int, new int) {
	*old = new
}
func squareAdd(p *int) {
	*p = *p * *p
	println("address", p, "value", *p)
}

type Person struct {
	name string
	age  int
}

func initPerson() *Person {
	p := Person{name: "gavin", age: 28}
	pPointer := &p
	fmt.Println(pPointer, "init person")
	return pPointer
}

func main() {
	person := initPerson()
	fmt.Println(person.name)
	*person = Person{name: "Sandra", age: 30}
	fmt.Println(person.name)
	omg := 10
	omgPointer := &omg
	squareAdd(omgPointer)
	fmt.Println(omg, "omg")
	i, j := 42, 2701
	iPointer := &i
	jPointer := &j
	fmt.Println("\nBefore changing values via pointer")
	fmt.Println(i, j)
	fmt.Println(iPointer, jPointer)
	*iPointer = 60
	*jPointer = 70
	fmt.Println("\nAfter changing values via pointer")
	fmt.Println(i, j)
	fmt.Println(iPointer, jPointer)

	myValue := 69
	//pointer just points to the variables address in memory, the variable holds the value
	//can change the value by accessing what is inside the memory
	//& creates a pointer from a variable, * when used with a type indicates the value is a pointer
	myValuePtr := &myValue
	replaceValue(myValuePtr, 40)
	//will get the address in memory
	fmt.Println(myValue)
	counter := Counter{}

	hello := "Hello"
	world := "World!"
	fmt.Println(hello, world)

	// Pointer to hello
	replace(&hello, "Hi", &counter)
	replace(&world, "Israel", &counter)
	fmt.Println(hello, world)

	phrase := []string{hello, world}
	fmt.Println(phrase)

	// Pointer to `world` in the `phrase` slice
	replace(&phrase[1], "Go!", &counter)
	fmt.Println(phrase)

}
