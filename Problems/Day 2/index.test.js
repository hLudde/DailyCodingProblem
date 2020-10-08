const productsOfArray = require("./index");

test('return false', ()=>{
    expect(productsOfArray(123)).toBe(null);
})

test('return true', ()=>{
    expect(productsOfArray([1, 2, 3, 4, 5])).toMatchObject([120, 60, 40, 30, 24]);
    expect(productsOfArray([3, 2, 1])).toMatchObject([2, 3, 6]);
    expect(productsOfArray([34, 251, 132, 0])).toMatchObject([0, 0, 0, 1126488]);
})