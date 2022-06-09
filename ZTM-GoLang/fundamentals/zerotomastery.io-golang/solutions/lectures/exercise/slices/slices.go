//--Summary:
//  Create a program to manage parts on an assembly line.
//
//--Requirements:
//* Using a slice, create an assembly line that contains type Part
//* Create a function to print out the contents of the assembly line
//* Perform the following:
//  - Create an assembly line having any three parts
//  - Add two new parts to the line
//  - Slice the assembly line so it contains only the two new parts
//  - Print out the contents of the assembly line at each step
//--Notes:
//* Your program output should list 3 parts, then 5 parts, then 2 parts

package main

import "fmt"

type Part string

//* Create a function to print out the contents of the assembly line
func printAssemblyLine(slice []Part) {
	length := len(slice)
	for i := 0; i < length; i++ {
		currentPart := slice[i]
		fmt.Println(currentPart)
	}
}

func main() {
	//* Using a slice, create an assembly line that contains type Part
	assemblyLine := make([]Part, 3)
	//nothing will show since the values haven't been declared
	printAssemblyLine(assemblyLine[:])
	assemblyLine[0] = "jackhammer"
	assemblyLine[1] = "hammer"
	assemblyLine[2] = "saw"
	printAssemblyLine(assemblyLine)

	//  - Create an assembly line having any three parts
	var otherAssemblyLine [3]Part
	otherAssemblyLine[0] = "Something"
	otherAssemblyLine[1] = "Yoram"
	otherAssemblyLine[2] = "Would"
	fmt.Println("\ndifferent assembly line using an array")
	printAssemblyLine(otherAssemblyLine[:])
	modifiedAssemblyLine := otherAssemblyLine[:]
	//  - Add two new parts to the line

	modifiedAssemblyLine = append(modifiedAssemblyLine, "Use", "Duh")
	fmt.Println("\nadded new parts")
	printAssemblyLine(modifiedAssemblyLine)

	//  - Slice the assembly line so it contains only the two new parts
	onlyNewParts := modifiedAssemblyLine[3:]
	fmt.Println("\nBegin new parts")
	printAssemblyLine(onlyNewParts)

}
