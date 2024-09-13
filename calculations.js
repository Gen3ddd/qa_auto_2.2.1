function increaseBalance(balance, delta) {
  balance = balance + delta;
  return balance;
}

function decreaseBalance(balance, delta) {
  balance = balance - delta;
  return balance;
}

function divideBalanceByAccounts(balance, numberOfAccounts) {
  balance = balance / numberOfAccounts;
  if (numberOfAccounts === 0) {
    return "На ноль делить нельзя";
  } else {
    return balance;
  }
}

function getRestAfterDivision(dividend, divisor) {
  dividend = dividend % divisor;

  if (divisor === 0) {
    return "На ноль делить нельзя";
  } else {
    return dividend;
  }
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2));
console.log(getRestAfterDivision(7000, 3));
