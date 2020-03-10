function greeting(guest) {
    return `Hello ${guest}`;
}

function createObj(name, age) {
    return {
        name,
        age
    }
}

function isTrueOrFasle(bool) {
    return bool
}

const request = require('request');

function fetchData(callback) {
  request('https://jsonplaceholder.typicode.com/todos/1', function (error, response, body) {
    callback(body);
  });
}

function fetchData2() {
  return new Promise((resolve, reject) => {
    request('https://jsonplaceholder.typicode.com/todos/1', function (error, response, body) {
      if (error) {
        reject(error);
      }
      resolve(body);
    });
  })
}

module.exports = {
    greeting,
    createObj,
    isTrueOrFasle,
    fetchData,
    fetchData2
}