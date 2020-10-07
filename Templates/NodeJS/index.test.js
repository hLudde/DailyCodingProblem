const { TestScheduler } = require("jest");
const helloWorld = require("./index").default;

test('return Hello World!', ()=>{
    expect(helloWorld()).toBe("Hello World!");
})