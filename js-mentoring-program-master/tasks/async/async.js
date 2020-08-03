const {
    callbackFunction,
    promiseFunction,
    callbackFunctionError,
    promiseFunctionError
} = require("./async_api");

/**
 * console.log data got from callbackFunction
 */
function printDataCallback(err,data) {
    console.log(data);
}

callbackFunction(printDataCallback);

/**
 * console.log data got from promiseFunction
 */
function printDataPromise() {
    return promiseFunction().then(result => {console.log(result)});
}

printDataPromise();


/**
 * console.log data got from promiseFunction using async/await
 */
async function printDataAsyncAwait() {
    const a = await promiseFunction();
    console.log(a);
}

printDataAsyncAwait();

/**
 * throw error data from callbackFunctionError
 */
function handleErrorCallback(err) {
    if (err) {
        throw err;    
    }
}

callbackFunctionError(handleErrorCallback);

/**
 * throw error come from promiseFunctionError
 */
function handlePromiseError() {
    return promiseFunctionError().catch(err => {throw err});
}

handlePromiseError();

/**
 * throw error come from promiseFunctionError using async/await
 */
async function handleAsyncAwaitError() {
    try {
    const a = await promiseFunctionError();
    console.log(a);
    } 
    catch (err) {
        console.log(err);
    }
}

handleAsyncAwaitError();

module.exports = {
    printDataCallback,
    printDataPromise,
    handleErrorCallback,
    handlePromiseError,
    printDataAsyncAwait,
    handleAsyncAwaitError
};
