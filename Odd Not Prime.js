function Prime(n){
  for (let i =2 ; i< (n/2) ;i++){
      if (n%i == 0){
          return false;
      }
  }
  return true;
}

function oddNotPrime(n){
  let counter = 1;
  for (let i = 1; i<=n ; i++){
      if (i%2 != 0 && !Prime(i)){
          counter = counter + 1;
      }
  }
  return counter;
}

console.log(oddNotPrime(5));
