function bestFriend(txt, a, b) {
  let count = 0;
  let firstLetter = 0;
  //iterating through the whole first string
  for (let i = 0; i < txt.length; i++) {
    //checking the number of the first characters that are there in the string
    if (txt[i] == a) {
      firstLetter += 1;
    }
    //checkinng the number of those characters that are followed by the the third argument
    if (txt[i] == a && txt[i + 1] == b) {
      count += 1;
    }
  }
  
  //if the numbers match return true otherwise return false
  if (firstLetter == count) {
    return true;
  }
  return false;
}
console.log(bestFriend("we found your dynamite", "d", "y"));