package main

import "fmt"

func main() {
	myArray := [5]int{68, 67, 66, 65, 64}
	mySlice := []int{42, 43, 44, 45, 46, 47, 48, 49, 50, 51}
	for _, value := range myArray {
		fmt.Println(value)
	}
	fmt.Printf("%T\n", myArray)
	for _, value := range mySlice {
		fmt.Println(value)
	}
	fmt.Printf("%T\n", mySlice)
	// fmt.Println(len(mySlice))
	slice1 := mySlice[:5]
	slice2 := mySlice[5:]
	slice3 := mySlice[2:7]
	slice4 := mySlice[1:6]
	fmt.Println(slice1)
	fmt.Println(slice2)
	fmt.Println(slice3)
	fmt.Println(slice4)

	// x := []int{42, 43, 44, 45, 46, 47, 48, 49, 50, 51}
	// x = append(x, 52)
	// fmt.Printf("\n%v the new x slice\t", x)
	// x = append(x, 53, 54, 55)
	// fmt.Printf("\n%v the new x slice\t", x)
	// newerSlice := []int{56, 57, 58, 59, 60}
	// x = append(x, newerSlice...)
	// fmt.Printf("\n%v the new x slice\t", x)

	// x = append(x[:3], x[6:]...)
	// fmt.Printf("\n%v the new x slice\t", x)

	//JY: in order to use append, do we want to specify a length of 0?
	//goal here is not to have the old array thrown array and to create a new array
	//a new array will be created if the cap is hit and the new array will have a cap that is double of the old array
	// y := make([]string, 0, 50)
	// fmt.Println("third time WITH Y")
	// fmt.Println(len(y))
	// fmt.Println(cap(y))

	// states := []string{` Alabama`, ` Alaska`, ` Arizona`, ` Arkansas`, ` California`, ` Colorado`, ` Connecticut`, ` Delaware`, ` Florida`, ` Georgia`, ` Hawaii`, ` Idaho`, ` Illinois`, ` Indiana`, ` Iowa`, ` Kansas`, ` Kentucky`, ` Louisiana`, ` Maine`, ` Maryland`, ` Massachusetts`, ` Michigan`, ` Minnesota`, ` Mississippi`, ` Missouri`, ` Montana`, ` Nebraska`, ` Nevada`, ` New Hampshire`, ` New Jersey`, ` New Mexico`, ` New York`, ` North Carolina`, ` North Dakota`, ` Ohio`, ` Oklahoma`, ` Oregon`, ` Pennsylvania`, ` Rhode Island`, ` South Carolina`, ` South Dakota`, ` Tennessee`, ` Texas`, ` Utah`, ` Vermont`, ` Virginia`, ` Washington`, ` West Virginia`, ` Wisconsin`, ` Wyoming`}

	// //JY: use append instead of assignment
	// y = append(y, states...)

	// fmt.Println("fourth time WITH Y")
	// fmt.Println(y)
	// fmt.Println(len(y))
	// fmt.Println(cap(y))

	// for i := 0; i < len(y); i++ {
	// 	fmt.Println(i, y[i])
	// }
	exercise7Slice1 := []string{"James", "Bond", "Shaken, not stirred"}
	exercise7Slice2 := []string{"Miss", "Moneypenny", "Helllooooo, James"}
	my2DSlice := [][]string{exercise7Slice1, exercise7Slice2}
	for i := 0; i < len(my2DSlice); i++ {
		for j := 0; j < len(my2DSlice[i]); j++ {
			fmt.Println(my2DSlice[i][j])
		}
	}

}
