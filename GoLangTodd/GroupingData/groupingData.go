package main

import "fmt"

func main() {
	//go doesn't really use arrays except for as building blocks for slices
	// var x [5]int
	// fmt.Println(x)
	// x[3] = 69
	// fmt.Println(x)

	//A SLICE allows you to group together values of the same TYPE
	x := []int{4, 5, 7, 8, 42}
	fmt.Println(x)
	//slicing
	// fmt.Print(x[1:])
	// for _, value := range x {
	// 	fmt.Println(value)
	// }
	// for i := 0; i < len(x); i++ {
	// 	fmt.Println(x[i])
	// }

	y := []int{66, 69, 666}
	x = append(x, y...)
	fmt.Println(x)
	x = append(x[:2], x[4:]...)
	fmt.Printf("%v\t The new value of x\n", x)
	//when the capacity is exceeded the runtime throws away the old array and creates a new array that is double in the original arrays capacity
	z := make([]int, 10, 12)
	z = append(z, 6969)
	fmt.Println(z)
	fmt.Println(len(z))
	fmt.Println(cap(z))
	z = append(z, 6969)
	z = append(z, 6969)
	fmt.Println(z)
	fmt.Println(len(z))
	fmt.Println(cap(z))

	m := map[string]int{
		"James": 48,
		"Sapir": 28,
		"Gavin": 28,
	}
	//adding to a map
	m["todd"] = 33
	for key, value := range m {
		fmt.Printf("\n%v the key\t %d the value \t", key, value)
	}
	//deleting from a map
	delete(m, "todd")
	for key, value := range m {
		fmt.Printf("\n%v the key\t %d the value \t", key, value)
	}
}
