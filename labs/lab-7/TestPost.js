const RequestHandler = require('./RequestHandler');
const readline = require('readline-sync');

const API_URL = 'http://jsonplaceholder.typicode.com/posts';

async function startApplication() {
    const requestHandler = new RequestHandler();
    let option;

    while (true) {
        console.log('\n========================');
        console.log('       MAIN MENU        ');
        console.log('========================');
        console.log('1. View an article');
        console.log('2. View all articles by author');
        console.log('0. Exit');
        console.log('========================');

        option = parseInt(readline.question(" Select an option: "), 10);

        switch (option) {
            case 1:
                const authorId = parseInt(readline.question(" Enter Author ID: "), 10);
                const articleId = parseInt(readline.question(" Enter Article ID: "), 10);
                console.log(`\nFetching details for Author ID: ${authorId}, Article ID: ${articleId}...\n`);
                await requestHandler.displaySinglePost(API_URL, authorId, articleId);
                break;
            case 2:
                const authorIdAll = parseInt(readline.question(" Enter Author ID: "), 10);
                console.log(`\nFetching all articles for Author ID: ${authorIdAll}...\n`);
                await requestHandler.displayAllPosts(API_URL, authorIdAll);
                break;
            case 0:
                console.log("Exiting application...");
                return;
            default:
                console.log("Invalid selection. Please try again.");
        }
    }
}

startApplication();
