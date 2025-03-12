const readlineSync = require('readline-sync');
const API_URL = 'https://jsonplaceholder.typicode.com';

function startMenu() {
    console.log(`\n==== MENU ====`);
    console.log(`1. Retrieve and display a specific post`);
    console.log(`2. Fetch and display all posts by a user`);
    console.log(`0. Exit`);
    handleUserChoice();
}

function handleUserChoice() {
    let userChoice;
    do {
        userChoice = Number(readlineSync.question("Choose an option: "));
        switch (userChoice) {
            case 1:
                const selectedUserId = Number(readlineSync.question("Enter User ID: "));
                const selectedPostId = Number(readlineSync.question("Enter Post ID: "));
                fetchPostById(selectedUserId, selectedPostId);
                return;
            case 2:
                const requestedUserId = Number(readlineSync.question("Enter User ID: "));
                fetchPostsByUser(requestedUserId);
                return;
            case 0:
                console.log("Exiting...");
                return;
            default:
                console.log("Invalid choice, please try again.");
        }
    } while (userChoice !== 0);
}

function fetchPostById(userId, postId) {
    fetch(`${API_URL}/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            if (post.userId !== userId) {
                console.log("No matching post found.");
            } else {
                console.log(post);
            }
        })
        .catch(error => console.error("Error fetching data:", error));
}

function fetchPostsByUser(userId) {
    fetch(`${API_URL}/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
            if (posts.length === 0) {
                console.log("No posts found for this user.");
            } else {
                console.log(posts);
            }
        })
        .catch(error => console.error("Error fetching data:", error));
}

startMenu();
