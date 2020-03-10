const createObj = require('./func').createObj;

it('should return {name: "sam", age: 30} when input "sam" and 30', () => {
    let result = createObj('sam', 30);
    expect(result).toEqual({name: 'sam', age: 30}); // 使用toEqual
})