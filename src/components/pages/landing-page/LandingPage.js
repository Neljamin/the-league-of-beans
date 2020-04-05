import React, { Component } from 'react';
import _ from 'lodash';
import { Container } from 'semantic-ui-react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import './LandingPage.scss';
import { HeaderImage } from '../../widgets/';
import { contentService } from '../../../services';

const BODY_CONTENT_ID = 'VRC12pE1gJZZmqYDVrE8u';

export default class LandingPage extends Component {
    state = {};

    constructor() {
        super();
        this.contentService = contentService;
    }

    componentDidMount() {
        this.contentService.getContent(BODY_CONTENT_ID)
            .then(content => {
                const body = documentToHtmlString(content.fields.body);
                const imageUrl  = _.get(content, 'fields.headerImage.fields.file.url')
                this.setState({
                    body: {
                        __html: body
                    },
                    imageUrl
                });
            });
    }

    render() {
        return (
            <div className="landing-page">
                <div className="landing-page__main-image"></div>
                <HeaderImage image={this.state.imageUrl} />
                <Container>
                    <div dangerouslySetInnerHTML={this.state.body}></div>
                </Container>
            </div>
        )
    }
}
