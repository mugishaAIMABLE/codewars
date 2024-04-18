function repetitions(str){
    let storedChar = str[0];
    let newStr="";
    let counter = 1;

    for (let i =1; i<str.length ; i++){
        if(str[i] == storedChar ){
            counter++
        }
    else{
        newStr= newStr + storedChar + counter;
        storedChar = str[i];
        counter = 1;
    }
    }

    return newStr;
}

console.log(repetitions("AAAABBBCCDAA"));