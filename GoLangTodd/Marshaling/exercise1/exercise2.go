package main

import (
	"encoding/json"
	"fmt"
)

type People struct {
	First   string
	Last    string
	Age     int
	Sayings []string
}

func main() {
	s := `[{"First":"James","Last":"Bond","Age":32,"Sayings":["Shaken, not stirred","Youth is no guarantee of innovation","In his majesty's royal service"]},{"First":"Miss","Last":"Moneypenny","Age":27,"Sayings":["James, it is soo good to see you","Would you like me to take care of that for you, James?","I would really prefer to be a secret agent myself."]},{"First":"M","Last":"Hmmmm","Age":54,"Sayings":["Oh, James. You didn't.","Dear God, what has James done now?","Can someone please tell me where James Bond is?"]}]`
	fmt.Println(s)

	bs := []byte(s)

	var secretAgents []People

	err := json.Unmarshal(bs, &secretAgents)

	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(secretAgents)

	for i, v := range secretAgents {
		fmt.Printf("%d the index, the value %v\n", i, v)
	}

}
