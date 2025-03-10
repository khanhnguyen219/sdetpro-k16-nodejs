const Post = require('./Post');

class RequestHandler {
    async _fetchPosts(API_URL) {
        try {
            const response = await fetch(API_URL);
            const fetchedPosts = await response.json();

            return fetchedPosts.map(data => new Post(data.userId, data.id, data.title, data.body));
        } catch (error) {
            console.error('Error retrieving posts:', error);
            return [];
        }
    }

    async displaySinglePost(API_URL, authorId, articleId) {
        const allPosts = await this._fetchPosts(API_URL);
        const filteredPosts = allPosts.filter(post => post.authorId === authorId);
        const targetArticle = filteredPosts.find(post => post.articleId === articleId);

        if (targetArticle) {
            console.log(targetArticle);
        } else {
            console.log(`Article with ID ${articleId} not found!`);
        }
    }

    async displayAllPosts(API_URL, authorId) {
        const allPosts = await this._fetchPosts(API_URL);
        const filteredPosts = allPosts.filter(post => post.authorId === authorId);

        if (filteredPosts.length > 0) {
            console.log(`\nAll Articles for Author ID: ${authorId}\n`);
            filteredPosts.forEach(post => {
                console.log(post);
            });
        } else {
            console.log(`No articles found for Author ID ${authorId}`);
        }
    }
}

module.exports = RequestHandler;
