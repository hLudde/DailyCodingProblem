const sumMatcher = require("./index");

test('return false', ()=>{
    expect(sumMatcher(null,null)).toBe(false);
    expect(sumMatcher([1,2,3], null)).toBe(false);
    expect(sumMatcher(null, 1)).toBe(false);
    expect(sumMatcher([1,2,3], 6)).toBe(false);
    expect(sumMatcher([1,2,3], 1)).toBe(false);
    expect(sumMatcher([1,2,3], 2)).toBe(false);
})

test('return true', ()=>{
    expect(sumMatcher([1,2,3], 3)).toBe(true);
    expect(sumMatcher([1,2,3], 4)).toBe(true);
    expect(sumMatcher([1,2,3], 5)).toBe(true);
    expect(sumMatcher([2,3,4], 5)).toBe(true);
    expect(sumMatcher([2,3,4], 7)).toBe(true);
})