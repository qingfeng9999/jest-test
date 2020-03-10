const fetchData = require('./func.js').fetchData2;

test('should return data when fetchData request success', () => {
    return fetchData().then(data => {
        console.log('promise------success');
        expect(JSON.parse(data)).toEqual({
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        })
    })

    // test('should return err when fetchData request error', () => {
    //     expect.assertions(1); // 测试代码之前添加
    //     console.log('promise------error');

    //     return fetchData()
    //         .catch(e => {
    //             expect(e).toBe('error')
    //         })
    // });

});