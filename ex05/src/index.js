
function compareStrictValues(m){
    if (m != 55) {
        return "Not equal";
    }
    return "Equal";
}
console.log(compareStrictValues(55));
console.log(compareStrictValues("21"));
compareStrictValues(55);
module.exports = compareStrictValues;