function myDoWhile(){
    var myString = "";
    var i = 0;
    do {
        if (i >= 9){
            myString += i;
        } else {
            myString += i + ", ";
        }
        i++;
    } while (i < 10);
    return myString;
}
console.log(myDoWhile());

