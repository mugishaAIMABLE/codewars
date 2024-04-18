function calculateHypotenuse(a,b){
    if ((typeof a !== 'number' || isNaN(a)) || (typeof b !== 'number' || isNaN(b)) || a < 0 || b < 0){
     let err =  new Error('ArgumentException: inputs should both be numbers that are above zero');
      err.code = 'ArgumentException'
      throw err
    }
    else {
      let hypo = (a*a) + (b*b);
      let hypotenuse = Math.sqrt(hypo).toFixed(3);
      return hypotenuse;
    }
  }