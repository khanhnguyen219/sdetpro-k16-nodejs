const todoEndpoint = 'https://jsonplaceholder.typicode.com'

fetch(todoEndpoint).then(getResponse).then(validateResponse);

function getResponse(rawResponse) {
    return rawResponse.json();
}

function validateResponse(todo){
    if (todo.completed) {
        console.log(git);
        
    } else {
        
    }
}