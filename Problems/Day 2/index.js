/**
 * @function sumMatcher takes a list with numbers and a number "k" and returns true if two numbers in the list added together is k 
 * @param {Array<number>} numberArray
 */
function productsOfArray(numberArray){
    if(!Array.isArray(numberArray)){
        return null;
    }
    const productArray = [];
    numberArray.forEach((value, index)=>{
        var product = 1;
        for(var i = 0; i < numberArray.length; i++){
            if(i === index){
                continue;
            }
            product*=numberArray[i];
        }
        productArray.push(product);
    })
    return productArray;
}

module.exports=productsOfArray;