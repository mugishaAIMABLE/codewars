function generateHashtag (str) {
    if (str.length == 0){return false}
    let firstLetter = str[0].toUpperCase();
    let hashtag = "";
    
    
   for (let i = 0; i<str.length ; i++){
      if (str[i] != " "){
          hashtag +=str[i]; 
      }
  
   }
  hashtag = "#" +hashtag;
    
    if(hashtag.length > 140 || hashtag == ""){
      return false;
    }
  return hashtag;
  
  }

console.log(generateHashtag("jytr vree"))