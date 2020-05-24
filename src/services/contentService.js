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

    getAllPagesContent() {
        return this.client.getEntries()
            .then(entries => {
                return entries.items.reduce((acc, item) => {
                    if (item.sys.contentType.sys.id === 'page') {
                        return [...acc, item];
                    }
                    return [...acc];
                }, []);
            });
    }
}

export default new ContentService();
