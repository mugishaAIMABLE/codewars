function add(n){
    return function attachNumber(num){
        return n+num;
    }
}

var addOne = add(1);
console.log(addOne(3));
