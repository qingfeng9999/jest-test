const fetchData = require('./func.js').fetchData;

test('should return data when fetchData request success', (done) => {
    function callback(data) {
        console.log(data);
        expect(JSON.parse(data)).toEqual({
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        })
        done();
    }

    fetchData(callback);
});
