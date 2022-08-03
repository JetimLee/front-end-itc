//to_query_string({ "bar": [ 2, 3 ], "foo": 1 }) # => "bar=2&bar=3&foo=1"

export const toQueryString = (obj: object): string => {
  const objToArray = Object.entries(obj);
  console.log(objToArray);
  let queryString = "";
  for (let i = 0; i < objToArray.length; i++) {
    console.log(objToArray[i][0]);
    let property = "";
    if (obj.hasOwnProperty(objToArray[i][0] as unknown as PropertyKey)) {
      queryString.includes(objToArray[i][0]) === false && queryString !== ""
        ? (queryString += `&${objToArray[i][0]}=`)
        : (queryString += `${objToArray[i][0]}=`);
      property = objToArray[i][0];
    }
    if (objToArray[i][1].length > 1) {
      for (let j = 0; j < objToArray[i][1].length; j++) {
        typeof objToArray[i][1][j + 1] === "undefined"
          ? (queryString += `${objToArray[i][1][j]}`)
          : (queryString += `${objToArray[i][1][j]}&${property}=`);
      }
    } else {
      queryString += `${objToArray[i][1]}`;
    }
  }
  console.log(queryString);
  return queryString;
};

const testObj = { bar: [2, 3], foo: 1 };

toQueryString(testObj);
