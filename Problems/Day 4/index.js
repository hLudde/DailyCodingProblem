function lowestPositiveInt(numberArray){
    var min = 1;
    numberArray.sort();
    for(var i = 0; i<numberArray.length; i++){
        var value = numberArray[i];
        if(value <= 0){
            continue;
        }
        if(value > min){
            break;
        }
        min = value+1;
    }
    return min;
}

module.exports = lowestPositiveInt;
