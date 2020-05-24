import React, { Component } from 'react';

import { MinecraftCoordinate, MediaWithDescription } from '..';
import { contentfulService } from '../../../services';

export default class ContentfulTypeRenderer extends Component {
    constructor(props) {
        super(props);
        this.contentfulService = contentfulService;
    }

    render() {
        const { content, mediaLeft } = this.props;
        const contentType = content.sys.contentType.sys.id;

        if (contentType === 'minecraftCoordinate') {
            return <MinecraftCoordinate imageLeft={mediaLeft} {...this.contentfulService.getMinecraftCoordinateProps(content)}/>;
        }

        if (contentType === 'youTubeVideo') {
            const { youtubeId, title, description } = this.contentfulService.getYouTubeVideoProps(content);
            return (
                <MediaWithDescription mediaLeft={mediaLeft} mediaType='youtube' youtubeId={youtubeId}>
                    <h2>{title}</h2>
                    <div dangerouslySetInnerHTML={description}></div>
                </MediaWithDescription>
            );
        }

        return null;
    }
}
