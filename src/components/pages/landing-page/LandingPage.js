import React, { Component } from 'react';
import _ from 'lodash';
import { Container } from 'semantic-ui-react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import './LandingPage.scss';
import { HeaderImage } from '../../widgets/';
import { contentService } from '../../../services';

const CONTENT_ID = 'VRC12pE1gJZZmqYDVrE8u';

export default class LandingPage extends Component {
    state = {};

    constructor(props) {
        super(props);
        this.contentService = contentService;
    }

    componentDidMount() {
        this.contentService.getContent(CONTENT_ID)
            .then(content => {
                const description = documentToHtmlString(content.fields.description);
                const imageUrl  = _.get(content, 'fields.headerImage.fields.file.url')
                this.setState({
                    description: {
                        __html: description
                    },
                    imageUrl
                });
            });
    }

    render() {
        return (
            <div className="landing-page">
                <HeaderImage image={this.state.imageUrl} />
                <Container>
                    <div dangerouslySetInnerHTML={this.state.description}></div>
                </Container>
            </div>
        )
    }
}
