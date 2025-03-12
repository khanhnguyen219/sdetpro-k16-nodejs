/**
 * 1. Send request -> get response | Asynchronous
 * 2. Process the response | Asynchronous
 * 3. Validate the response | Asynchronous
 */

// Callback hell
const url = 'https://jsonplaceholder.typicode.com/posts/1';

// sendRequest(url, function (response) {
//     // {status: 200}
//     processResponse(response, function (statusCode) {
//         // {200}
//         validateResponse(statusCode);
//         console.log('Done');
//     });
// });

sendRequest(url)
.then(response => processResponse(response))
.then(statusCode => validateResponse(statusCode))
.then(() => console.log('Done'))
.catch(error => console.error('Error:', error));


// // Mimic Asynchronous
// function sendRequest(url, callbackFn) {
//     console.log(`1. Sending request to the endpoint ${url}...`);
//     setTimeout(function () {
//         callbackFn({ status: 200 });
//     }, 2 * 1000);
// }

// // Mimic Asynchronous
// function processResponse(response, callbackFn) {
//     console.log(`2. Processing response....`);
//     setTimeout(function () {
//         callbackFn(response.status);
//     }, 3 * 1000);
// }

// // Mimic Asynchronous
// function validateResponse(responseStatus) {
//     console.log(`3. Validating response....`);
//     if (responseStatus === 200) {
//         console.log('Response is valid');
//     } else {
//         console.error('Response is invalid');
//     }
// }

function sendRequest(url) {
    return new Promise((resolve, reject) => {
        console.log(`1. Sending request to the endpoint ${url}...`);
        setTimeout(() => {
            resolve({ status: 200 });
        }, 2 * 1000);

    });
}

function processResponse(response) {
    return new Promise((resolve, reject) => {
        console.log(`2. Processing response....`);
        setTimeout(() => {
            resolve(response.status);
        }, 2 * 1000);

    });
}

function validateResponse(statusCode) {
    return new Promise((resolve, reject) => {
        console.log(`3. Validating response....`);
        if (statusCode === 200) {
            console.log('Response is valid');
            resolve();
        } else {
            console.error('Response is invalid');
        }
    });
}