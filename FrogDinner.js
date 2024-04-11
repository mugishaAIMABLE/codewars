function frogContest(n) {
  
    let sum = 0;
    let tomAte = 0;
    let catAte = 0;
  
    for (let i = 1; i<=n; i++){
     sum +=i;
    }
  
    let chrisAte = sum;
  
    let halfAte = Math.floor(chrisAte/2);
  
    for (let j = 1; j<=halfAte; j++){
      tomAte +=j;
    }
  
    let catAte1 = chrisAte + tomAte;
    for (let k =1 ; k<=catAte1 ; k++){
      catAte +=k;
    }
    return "Chris ate "+ chrisAte+ " flies, Tom ate "+ tomAte +" flies and Cat ate "+ catAte +" flies";
  }

  console.log(frogContest(5))