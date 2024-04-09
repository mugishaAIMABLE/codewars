// let arr = [];
// for (let i = 0; i<=4 ; i++){
//     arr[i] = []
//  for (let j= 0; j<=2; j++){
//      arr[i][j] =j
//  }
// }
// console.log(arr[2][1])
function matrix(array) {
  
    for (let i = 0; i<array.length ; i++){
        if (array[i][i] <0){
          array[i][i] = 0;
         }
        else{
          array[i][i] = 1;
          }
      }
  return array;
  }