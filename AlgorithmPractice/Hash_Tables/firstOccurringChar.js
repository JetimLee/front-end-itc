//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
  //no input validation since an assumption can be made that the input will always be a valid array
  const occuranceTracker = {};
  //keys are automatically set as equal to the value that is being iterated over
  for (let i = 0; i < input.length; i++) {
    //basically like checking if occuranceTracker.2 exists or not
    if (occuranceTracker.hasOwnProperty(input[i])) {
      console.log(input[i]);
      return input[i];
    } else {
      occuranceTracker[input[i]] = 1;
    }
  }
  console.log(undefined);
  return undefined;
}
firstRecurringCharacter([2, 5, 1, 2, 3, 3, 5, 1, 2, 4, 69, 666, "karen"]);
firstRecurringCharacter([2, 3, 4, 5]);
firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]);
firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]);
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
