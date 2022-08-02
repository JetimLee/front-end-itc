package main

import (
	"fmt"

	"golang.org/x/crypto/bcrypt"
)

func main() {

	s := `package123`
	bs, err := bcrypt.GenerateFromPassword([]byte(s), bcrypt.MinCost)

	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(bs)

	// loginPword1 := `package123`

	err = bcrypt.CompareHashAndPassword(bs, []byte(`hello`))
	if err != nil {
		fmt.Println("YOU CANNOT LOGIN")
		return
	}
	fmt.Println("You are logged in")
}
