import _ from 'lodash';
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import './MinecraftPage.scss';
import { HeaderImage, MinecraftCoordinate } from '../../widgets';
import { contentService } from '../../../services';

const CONTENT_ID = '2engluBafuOhCCaxCbFC6D';

export default class MinecraftPage extends Component {
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
                const description = documentToHtmlString(content.fields.description);
                const imageUrl  = _.get(content, 'fields.headerImage.fields.file.url');
                const body = content.fields.body.map(item => {
                    return {
                        title: item.fields.title,
                        x: item.fields.x,
                        y: item.fields.y,
                        z: item.fields.z,
                        description: {
                            __html: documentToHtmlString(item.fields.description)
                        },
                        imageUrl: _.get(item, 'fields.image.fields.file.url')
                    };
                });
                this.setState({
                    title: content.fields.title,
                    description: {
                        __html: description
                    },
                    imageUrl,
                    body
                });
            });
    }

    render() {
        const { title, imageUrl, description, body } = this.state;
        return (
            <div className="minecraft-page">
                <HeaderImage title={title} image={imageUrl} />
                <Container>
                    <div className="minecraft-page__description" dangerouslySetInnerHTML={description}></div>
                    {body.map((itemProps, index) => (
                        <MinecraftCoordinate
                            key={itemProps.title}
                            imageLeft={index % 2 === 0}
                            {...itemProps}
                        />
                    ))}
                </Container>
            </div>
        )
    }
}
