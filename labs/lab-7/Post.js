class Post {
    constructor(authorId, articleId, heading, content) {
        this._authorId = authorId;
        this._articleId = articleId;
        this._heading = heading;
        this._content = content;
    }

    get authorId() {
        return this._authorId;
    }

    set authorId(authorId) {
        this._authorId = authorId;
    }

    get articleId() {
        return this._articleId;
    }

    set articleId(articleId) {
        this._articleId = articleId;
    }

    get heading() {
        return this._heading;
    }

    set heading(heading) {
        this._heading = heading;
    }

    get content() {
        return this._content;
    }

    set content(content) {
        this._content = content;
    }
}

module.exports = Post;
