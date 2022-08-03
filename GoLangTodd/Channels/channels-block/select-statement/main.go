package main

import "fmt"

func main() {
	eve := make(chan int)
	odd := make(chan int)
	quit := make(chan int)

	//sending stuff onto the channel
	go send(eve, odd, quit)

	//receive
	receive(eve, odd, quit)

	fmt.Println("about to exit")
}

func send(e, o, q chan<- int) {
	for i := 0; i < 100; i++ {
		if i%2 == 0 {
			e <- i
		} else {
			o <- i
		}

	}
	// close(e)
	// close(o)
	q <- 0
}

func receive(e, o, q <-chan int) {
	for {
		//select statement looks for which channel it can pull a value off ond pulls from that channel
		//we'll keep pulling values off until the value from the quit chanel comes in and then return happens
		select {
		case v := <-e:
			fmt.Println("from the even channel: ", v)
		case v := <-o:
			fmt.Println("from the odd channel: ", v)
		case v := <-q:
			fmt.Println("from the quit channel: ", v)
			return
		}
	}
}
