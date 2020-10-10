const lowestPositiveInt = require("./index");

test('return true', ()=>{
    expect(lowestPositiveInt([3, 4, -1, 1])).toBe(2);
    expect(lowestPositiveInt([1, 2, 0])).toBe(3);
    expect(lowestPositiveInt([1, 3, 0])).toBe(2);
    expect(lowestPositiveInt([5, -12, 2])).toBe(1);
    expect(lowestPositiveInt([5, 5, 5, 5, 5, 5, 5, -12, 2])).toBe(1);
    expect(lowestPositiveInt([-1, -2, -3, 0, 1, 2, 3, 4, 5])).toBe(6);
    expect(lowestPositiveInt([0, 1, 2, 2, 2, 3, 3, 4, 5])).toBe(6);
})