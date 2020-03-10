const greeting = require('./func.js').greeting;

test('should return Hello sam when input sam', () => {
    let result = greeting('sam');
    expect(result).toBe('Hello sam');
})