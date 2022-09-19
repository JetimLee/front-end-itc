// const { faker } = require("@faker-js/faker");
// var mysql = require("mysql2");

// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "jetimlee69!",
//   database: "join_us",
// });

// let q = "SELECT * FROM USERS";
//SELECTING DATA
// connection.query(q, (error, results, fields) => {
//     if (error) throw error;
//     console.log(results);
//   });
//INSERTING ONE PERSON
// let person = { email: faker.internet.email(), created_at: faker.date.past() };
// let insertionPhrase = "INSERT INTO USERS SET ?";

// const end_result = connection.query(
//   insertionPhrase,
//   person,
//   (error, results, fields) => {
//     if (error) throw error;
//     console.log(results);
//   }
// );

//BULK INSERT
// let data = [];
// for (let i = 0; i < 500; i++) {
//   data.push([faker.internet.email(), faker.date.past()]);
// }

// const end_result = connection.query(q, [data], function (err, result) {
//     console.log(err);
//     console.log(result);
//   });

// let q = "INSERT INTO users (email, created_at) VALUES ?";

// const end_result = connection.query(q, function (err, result) {
//   console.log(err);
//   console.log(result);
// });
// console.log(end_result.sql);
// connection.end();
/*
select
	case
		when email like "%@yahoo.com" then "yahoo"
        when email like "%@gmail.com" then "gmail"
        when email like "%@hotmail.com" then "hotmail"
        else "other"
    end as provider,
    count(*)
from users
group by provider;
*/

const promiseStuff = (time) => {
  const data = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
  return data;
};

const awaitPromise = async () => {
  const something = await promiseStuff(1000);
  console.log(something);
};

awaitPromise();
