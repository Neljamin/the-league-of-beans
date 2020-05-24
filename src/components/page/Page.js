import React, { Component } from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import _ from 'lodash';

import { HeaderImage, MainBody, ContentfulTypeRenderer } from '../widgets';
import { contentfulService } from '../../services';
import './Page.scss';

export default class Page extends Component {
    state = {
        body: []
    };

    constructor(props) {
        super(props);
        this.contentfulService = contentfulService;
    }

    componentDidMount() {
        const { content } = this.props;
        const body = content.fields.body || [];
        let mediaIndex = 0;
        const formattedBody = body.map(item => {
            let mediaLeft;
            if (this.contentfulService.isContentMediaType(item)) {
                mediaLeft = mediaIndex % 2 === 0;
                mediaIndex++;
            }
            return {
                content: item,
                mediaLeft
            }
        });
        this.setState({
            body: formattedBody
        });
    }

    render() {
        const { content } = this.props;
        const { body } = this.state;
        const title = content.fields.route !== '/' ? content.fields.title: '';
        const imageUrl  = _.get(content, 'fields.headerImage.fields.file.url');
        const description = {
            __html: documentToHtmlString(content.fields.description)
        };

        return (
            <div className="page">
                <HeaderImage title={title} image={imageUrl} />
                <MainBody>
                    <div className="page__description" dangerouslySetInnerHTML={description}></div>
                    {
                        body.map((item, index) => {
                            return <ContentfulTypeRenderer key={index} content={item.content} mediaLeft={item.mediaLeft} />;
                        })
                    }
                </MainBody>
            </div>
        )
    }
}
