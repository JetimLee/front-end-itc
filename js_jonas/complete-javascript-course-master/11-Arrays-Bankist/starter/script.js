'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = movements => {
  //eliminates the old html that existed
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const depositOrWithdrawal = mov >= 0 ? `deposit` : `withdrawal`;
    const html = ` 
  <div class="movements__row">
   <div class="movements__type movements__type--${depositOrWithdrawal}">${
      i + 1
    } ${depositOrWithdrawal}</div>
   <div class="movements__value">${mov}$</div>
 </div>`;

    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
};
displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

for (const [i, value] of movements.entries()) {
  console.log(
    value >= 0
      ? `Movement ${i + 1}: You deposited ${Math.abs(value)}`
      : `Movement ${i + 1} You withdrew ${Math.abs(value)}`
  );
}

currencies.forEach((value, key, map) => {
  console.log(key);
  console.log(value);
  console.log(map);
});

const calcBalance = movements => {
  return movements.reduce((acc, cur) => acc + cur, 0);
};
const calcDisplaySummary = movements => {
  const totalIncome = movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${totalIncome}$`;

  const totalOuts = movements
    .filter(mov => mov <= 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(totalOuts)}$`;

  const interestPayments = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr, 'arr inside of interest payments');
      return int >= 1;
    })
    .reduce((acc, cur) => acc + cur, 0);

  labelSumInterest.textContent = `${interestPayments}$`;
};
calcDisplaySummary(account1.movements);
const maxNumber = movements.reduce((acc, cur) => {
  return acc > cur ? acc : cur;
}, movements[0]);
console.log(maxNumber, 'max number');
labelBalance.textContent = `$${calcBalance(account1.movements)}`;
const eurToUsd = 1.1;
const eurToUsdArray = movements.map(mov => mov * eurToUsd);
console.log(eurToUsdArray, 'after conversion');

const createUsernames = accs => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
console.log(accounts);
const deposits = movements.filter(mov => {
  return mov > 0;
});
const withdrawals = movements.filter(mov => mov < 0);
console.log(deposits);
console.log(withdrawals);

const summaryOfDeposits = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, cur) => acc + cur, 0);
console.log(summaryOfDeposits, 'summary of deposits');

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal, 'first withdrawal');
const account = accounts.find(acc => acc.owner.includes('Jonas'));

let foundAccount;
for (const accountz of accounts) {
  if (accountz.owner.includes('Jonas')) {
    foundAccount = accountz;
  }
}
console.log(foundAccount, 'found account with for of');
console.log(account);

//My event handlers
btnLogin.addEventListener('click', () => {});
//LECTURE APP STUFF ^^^

/*
<--------- Coding Challenges start here ---------->
*/

//FIRST CODING CHALLENGE
// const checkDogs = (dogsJulia, dogsKate) => {
//   const correctedData = dogsJulia.slice(1, dogsJulia.length - 2);
//concat here with two arrays is more optimal than using spread operator
//   const combinedData = correctedData.concat(dogsKate);
//   combinedData.forEach((dogAge, i) => {
//     console.log(
//       dogAge >= 3
//         ? `Dog number ${i + 1} is an adult and is ${dogAge} years old`
//         : `Dog number ${i + 1} is still a puppy`
//     );
//   });
// };
// const testJuliaData1 = [3, 5, 2, 12, 7];
// const testKatesData1 = [4, 1, 15, 8, 3];

// const testJuliaData2 = [9, 16, 6, 8, 3];
// const testKatesData2 = [10, 5, 6, 1, 4];
// checkDogs(testJuliaData1, testKatesData1);
// console.log('second call');
// checkDogs(testJuliaData2, testKatesData2);
