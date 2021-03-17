function inverseWhile(){
    var num = 5;
    var myString = "";
    while (num > 0) {
        myString += num;
        num--;
    }
    return myString;
}
console.log(inverseWhile());
inverseWhile();
module.exports = inverseWhile;
