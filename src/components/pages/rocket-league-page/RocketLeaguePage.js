import _ from 'lodash';
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import './RocketLeaguePage.scss';
import { HeaderImage, YouTubeVideo, MediaWithDescription } from '../../widgets';
import { contentService } from '../../../services';

const CONTENT_ID = '4VbH6oL30BM12r2RYnhQ2w';

export default class RocketLeaguePage extends Component {
    state = {
        body: []
    };

    constructor(props) {
        super(props);
        this.contentService = contentService;
    }

    componentDidMount() {
        this.contentService.getContent(CONTENT_ID)
            .then(content => {
                const imageUrl  = _.get(content, 'fields.headerImage.fields.file.url');
                const body = content.fields.body.map(item => {
                    return {
                        title: item.fields.title,
                        description: {
                            __html: documentToHtmlString(item.fields.description)
                        },
                        youtubeId: item.fields.youTubeVideoId
                    };
                });
                this.setState({
                    title: content.fields.title,
                    imageUrl,
                    description: {
                        __html: documentToHtmlString(content.fields.description)
                    },
                    body
                });
            });
    }

    render() {
        const { title, imageUrl, description, body } = this.state;
        return (
            <div className="rocket-league-page">
                <HeaderImage title={title} image={imageUrl} />
                <Container>
                    <div className="rocket-league-page__description" dangerouslySetInnerHTML={description}></div>
                    {body.map((itemProps, index) => (
                        <MediaWithDescription
                            mediaType='youtube'
                            mediaLeft={index % 2 === 0}
                            youtubeId={itemProps.youtubeId}
                        >
                            <h2>{itemProps.title}</h2>
                            <div dangerouslySetInnerHTML={itemProps.description}></div>
                        </MediaWithDescription>
                    ))}
                    
                </Container>
            </div>
        )
    }
}
