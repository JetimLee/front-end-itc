package main

import (
	"fmt"
	"sort"
)

type Person struct {
	First string
	Last  string
	Age   int
}

func main() {
	xi := []int{4, 7, 3, 42, 99, 18, 16, 56, 12}
	xs := []string{"James", "Q", "M", "Moneypenny", "Dr.No", "Que", "Qu", "Qua"}

	sort.Ints(xi)
	sort.Strings(xs)
	fmt.Println(xi)
	fmt.Println(xs)

}
