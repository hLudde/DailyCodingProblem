class pair {
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
}
function cons(a, b){
    var newPair = new pair(a, b)
    return newPair    
}

function car(inputPair){
    return inputPair.a
}

function cdr(inputPair){
    return inputPair.b
}

exports.cons = cons
exports.car = car
exports.cdr = cdr