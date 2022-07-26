package main

import "fmt"

func main() {
	// for i := 0; i <= 10; i++ {
	// 	fmt.Printf("The outer loop: %d\t\n", i)

	// 	for j := 0; j < 3; j++ {
	// 		fmt.Printf("The outter loop: %d\t The inner loop:%d\n", i, j)

	// 	}
	// }

	// for i := 33; i <= 122; i++ {
	// 	// fmt.Printf(" %c  ", i) //Prints ONLY the unicode chars
	// 	fmt.Printf("%d: \t%#U  \n", i, i) //Prints the unicode chars and values as well
	// 	// fmt.Printf("%v\t%#U\n", i, i)

	// }

	// for i := 1; i <= 10000; i++ {
	// 	fmt.Println(i)
	// }
	// for i := 65; i <= 90; i++ {
	// 	for j := 0; j < 3; j++ {
	// 		fmt.Printf("%d: \t%#U  \n", i, i) //Prints the unicode chars and values as well

	// 	}

	// }
	// for i := 1993; i <= 2022; i++ {
	// 	fmt.Println(i)
	// }
	// bd := 1993
	// for {
	// 	if bd > 2022 {
	// 		break
	// 	}
	// 	fmt.Println(bd)
	// 	bd++
	// }
	for i := 10; i <= 100; i++ {
		fmt.Printf("When %v is divided by 4, the remainder (aka modulus) is %v\n", i, i%4)
	}
	if true {
		fmt.Println("pie")
	}

}
