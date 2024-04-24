//function to calculate the greatest common divisor among two numbers
function gcd (a,b){   
    let divs = []
    let aDivs =[]
    let bDivs = []
    let commonNbrs=[]
    
    
    for (let i = 0; i<=a; i++){
      if(a%i == 0){
        aDivs.push(i)
      }
    }
    
    for (let i = 0; i<=b; i++){
      if(b%i == 0){
        bDivs.push(i)
      }
    }
    
    for (let k = 0; k<=aDivs.length-1 ; k++){
    for (let l =0; l<=bDivs.length-1; l++){
     if(aDivs[k] == bDivs[l] && !commonNbrs.includes(aDivs[k])){
         commonNbrs.push(aDivs[k])
     }
    }
    
    }
      for (let i =0; i<=commonNbrs.length-1; i++){
        Large = commonNbrs[0]
        if(commonNbrs[i] > Large){
          Large = commonNbrs[i]
        }
        // else{
          
        // }
      }
       // return {aDivs ,bDivs}
      // console.log({aDivs ,bDivs})
      return Large
    }
    
    console.log(gcd(12,8))