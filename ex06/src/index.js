function comparisonToEqual(a){
    if (a < 5)  {
        return "Less than 5";
    }
    if (a < 10) {
        return "Less than 10";
    }
    if (a >= 10) {
        return "10 or over";
    }
    if (a > 20) {
        return "More than 20";
    }
}
comparisonToEqual(1);
module.exports = comparisonToEqual;