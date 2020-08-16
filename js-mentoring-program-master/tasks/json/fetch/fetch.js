/**
 * 1. You need to make a GET request for the resource: https://jsonplaceholder.typicode.com/posts using fetch method
 * 2. Save the response to response.json file
 * 3. Save only those items, where id < 20
 * DOCS: https://www.npmjs.com/package/node-fetch
 */
const fetch = require('node-fetch');
const fs = require('fs');

async function ProcessingRequestAsyncAwait() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const arrResponse = await response.json();
        const arrSorted = await sort(arrResponse);

        fs.writeFileSync('response.json',JSON.stringify(arrSorted));

        function sort(arr) {
            return arr.filter(element => element.id<20);
        }
    }
    catch (err) {
        throw `UserException: ${err}`;
    }
}

ProcessingRequestAsyncAwait();

