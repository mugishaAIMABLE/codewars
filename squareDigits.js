function squareDigits(num) {
  let numString = num.toString();
  let newArr = numString.split("");
  let newNumber = parseInt(newArr.map((a) => a * a).join(""));
  return newNumber;
}

squareDigits(9191);
