const API_URL = 'https://jsonplaceholder.typicode.com';
const readlineSync = require('readline-sync');

function handleUserChoise(){

}

function getPostByID(){
fetch(`${API_URL}/post/${postID}`)
    if (postID.userID != inputUserID) {
        console.log('lỗi');
        
    } else {
        return postID;
    }

}

function getPostByUserID(){
    fetch()
}