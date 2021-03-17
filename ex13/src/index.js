function inverseWhile(){
    var num = 5;
    var fiveNumbers = "";
    while (num > 0) {
        fiveNumbers += num + ",";
        num--;
    }
    fiveNumbers += num;
    return fiveNumbers;
}
console.log(inverseWhile());
inverseWhile();
module.exports = inverseWhile;
