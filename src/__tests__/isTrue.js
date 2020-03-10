const isTrueOrFasle = require('../func.js').isTrueOrFasle;

describe('true or false', () => {
    
    it('should return true when input true', () => {
        let result = isTrueOrFasle(true);
        expect(result).toBeTruthy();  // toBeTruthy 匹配器
    })

    test('should return false when input fasle', () => {
        let result = isTrueOrFasle(false);
        expect(result).toBeFalsy();  // toBeFalsy 匹配器
    })
})