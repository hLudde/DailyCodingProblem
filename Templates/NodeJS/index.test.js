const helloWorld = require("./index");

test('return Hello World!', ()=>{
    expect(helloWorld()).toBe("Hello World!");
})