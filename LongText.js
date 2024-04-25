function reverseLongestWord  (str){
    let arr = str.split(' ');
    let largestEl = arr[0]
    let size = largestEl.length
    for (let i = 0; i<=arr.length-1; i++){
      if (arr[i].length>size){
        largestEl = arr[i]
      }
    }
    let reversed = largestEl.split('')
    let revStr = ''
    for(let i = largestEl.length-1 ; i>=0 ; i--){
      revStr+=largestEl[i]
    }
    revStr = revStr[0].toUpperCase() + revStr.slice(1)
    return revStr
  }
  
  console.log(reverseLongestWord("The question he had was meaningless"))