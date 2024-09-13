function increaseBalance(balance, delta) {
  balance += delta;
  return balance;
}

function decreaseBalance(balance, delta) {
  balance -= delta;
  return balance;
}

function divideBalanceByAccounts(balance, numberOfAccounts) {
  balance /= numberOfAccounts;
  if (numberOfAccounts === 0) {
    return "На ноль делить нельзя";
  } else {
    return balance;
  }
}

function getRestAfterDivision(dividend, divisor) {
  dividend %= divisor;

  if (divisor === 0) {
    return "На ноль делить нельзя";
  } else {
    return dividend;
  }
}

function increment(number) {
  number++;
  return number;
}

function decrement(number) {
  number--;
  return number;
}

console.log(decrement(2));

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2));
console.log(getRestAfterDivision(7000, 3));
onsole.log(increment(2));
onsole.log(decrement(2));
