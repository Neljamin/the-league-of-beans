import * as contentful from 'contentful';

class ContentService {
    constructor() {
        this.client = contentful.createClient({
            space: "mpx8c6msjcdu",
            accessToken: "yX49obCAWPagE4kF5DBdKJNU6lbQwgCz2nDmykXnHM8"
        });
    }

    getContent(contentId) {
        return this.client.getEntry(contentId);
    }
}

export default new ContentService();
