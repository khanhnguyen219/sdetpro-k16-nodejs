const readlineSync = require('readline-sync');
const API_URL = 'https://jsonplaceholder.typicode.com';

(async function main() {
    await displayMenu();
})();

async function displayMenu() {
    let userChoice;
    do {
        console.log(`\n==== MENU ====\n1. Get a specific post\n2. Get all posts by a user\n0. Exit`);
        userChoice = Number(readlineSync.question("Choose an option: "));
        
        switch (userChoice) {
            case 1:
                const selectedUserId = Number(readlineSync.question("Enter User ID: "));
                const selectedPostId = Number(readlineSync.question("Enter Post ID: "));
                await retrievePostById(selectedUserId, selectedPostId);
                break;
            case 2:
                const requestedUserId = Number(readlineSync.question("Enter User ID: "));
                await retrievePostsByUser(requestedUserId);
                break;
            case 0:
                console.log("Exiting...");
                break;
            default:
                console.log("Invalid choice, please try again.");
        }
    } while (userChoice !== 0);
}

async function retrievePostById(userId, postId) {
    try {
        const response = await fetch(`${API_URL}/posts/${postId}`);
        const post = await response.json();
        if (post.userId !== userId) {
            console.log("No matching post found.");
        } else {
            console.log(post);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function retrievePostsByUser(userId) {
    try {
        const response = await fetch(`${API_URL}/posts?userId=${userId}`);
        const posts = await response.json();
        if (posts.length === 0) {
            console.log("No posts found for this user.");
        } else {
            console.log(posts);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
