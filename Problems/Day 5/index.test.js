const pairer = require("./index");

test('return true', ()=>{
    expect(pairer.car(pairer.cons(1,2))).toBe(1);
    expect(pairer.cdr(pairer.cons(1,2))).toBe(2);
    expect(pairer.car(pairer.cons(15,22))).toBe(15);
    expect(pairer.cdr(pairer.cons(4321,213213))).toBe(213213);
})