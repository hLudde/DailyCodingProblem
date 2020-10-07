/**
 * @function sumMatcher takes a list with numbers and a number "k" and returns true if two numbers in the list added together is k 
 * @param {Array<number>} list
 * @param {number} k
 */
function sumMatcher(list, k){
    if(!Array.isArray(list)||!typeof(k)==Number){
        return false;
    }
    didSumMatch = false;
    list.forEach((value, index)=>{
        for(var i = index+1; i < list.length; i++){
            if(value+list[i]===k){
                didSumMatch = true;
                break;
            }
        }
    })    
    return didSumMatch;
}

module.exports=sumMatcher;