//--Summary:
//  Create a program to display server status. The server statuses are
//  defined as constants, and the servers are represented as strings
//  in the `servers` slice.
//
//--Requirements:
//* Create a function to print server status displaying:
//  - number of servers
//  - number of servers for each status (Online, Offline, Maintenance, Retired)
//* Create a map using the server names as the key and the server status
//  as the value
//* Set all of the server statuses to `Online` when creating the map
//* After creating the map, perform the following actions:
//  - call display server info function
//  - change server status of `darkstar` to `Retired`
//  - change server status of `aiur` to `Offline`
//  - call display server info function
//  - change server status of all servers to `Maintenance`
//  - call display server info function

package main

import "fmt"

const (
	Online      = 0
	Offline     = 1
	Maintenance = 2
	Retired     = 3
)

//* Create a function to print server status displaying:
func showServerStatus(servers map[string]int) {
	totalServers := len(servers)
	stats := make(map[int]int)
	for i, element := range servers {
		// fmt.Println(i)
		// fmt.Println(element)
		switch element {
		case 0:
			fmt.Println("Server", i, "is online")
			stats[Online] += 1
		case 1:
			fmt.Println("Server", i, "is offline")
			stats[Offline] += 1
		case 2:
			fmt.Println("Server", i, "is in maintenance")
			stats[Maintenance] += 1
		case 3:
			fmt.Println("Server", i, "is retired")
			stats[Retired] += 1
		default:
			panic("unahndled server status")
		}
	}
	fmt.Println("\nThere are", totalServers, "servers")
	println("\nThere are", stats[Online], "online servers")
	println("There are", stats[Offline], "offline servers")
	println("There are", stats[Maintenance], "servers in maintenance")
	println("There are", stats[Retired], "retired servers")
}

func main() {
	servers := []string{"darkstar", "aiur", "omicron", "w359", "baseline"}

	//* Create a map using the server names as the key and the server status
	//  as the value
	serverStatus := make(map[string]int)
	for _, server := range servers {
		serverStatus[server] = Online
	}

	fmt.Println(serverStatus)
	//* Set all of the server statuses to `Online` when creating the map

	//* After creating the map, perform the following actions:
	//  - call display server info function
	showServerStatus(serverStatus)

	//  - change server status of `darkstar` to `Retired`
	serverStatus["darkstar"] = Retired
	//  - change server status `aiur` to `Offline`
	serverStatus["aiur"] = Offline

	//  - call display server info function
	showServerStatus(serverStatus)

	//  - change server status all servers to `Maintenance`
	for _, server := range servers {
		serverStatus[server] = Maintenance
	}

	//  - call display server info function
	showServerStatus(serverStatus)

}
