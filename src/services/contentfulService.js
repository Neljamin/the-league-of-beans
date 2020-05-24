import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import _ from 'lodash';

class ContentfulService {
    isContentMediaType(content) {
        const contentType = content.sys.contentType.sys.id;
        return ['minecraftCoordinate', 'youTubeVideo'].includes(contentType);
    }

    getMinecraftCoordinateProps(content) {
        return {
            title: content.fields.title,
            x: content.fields.x,
            y: content.fields.y,
            z: content.fields.z,
            description: {
                __html: documentToHtmlString(content.fields.description)
            },
            imageUrl: _.get(content, 'fields.image.fields.file.url')
        };
    }

    getYouTubeVideoProps(content) {
        return {
            title: content.fields.title,
            description: {
                __html: documentToHtmlString(content.fields.description)
            },
            mediaType: 'youtube',
            youtubeId: content.fields.youTubeVideoId
        };
    }
}

export default new ContentfulService();
