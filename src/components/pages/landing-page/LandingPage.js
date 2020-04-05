import React, { Component } from 'react';
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
                this.setState({
                    body: {
                        __html: body
                    }
                });
            });
    }

    render() {
        return (
            <div className="landing-page">
                <div className="landing-page__main-image"></div>
                <HeaderImage image={process.env.PUBLIC_URL +'/assets/images/landing-main.jpg'} />
                <Container>
                    <div dangerouslySetInnerHTML={this.state.body}></div>
                </Container>
            </div>
        )
    }
}
