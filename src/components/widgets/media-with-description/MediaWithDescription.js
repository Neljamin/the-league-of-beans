import React, { Component } from 'react';
import classNames from 'classnames';

import './MediaWithDescription.scss';
import { YouTubeVideo } from '../';

export default class MediaWithDescription extends Component {
    render() {
        const {
            children,
            imageUrl,
            mediaType = 'image',
            mediaLeft,
            youtubeId
        } = this.props;
        return (
            <div className={classNames('media-with-description', {
                'media-with-description--media-left': mediaLeft
            })}>
                <div className='media-with-description__description'>
                    {children}
                </div>
                <div
                    className={classNames('media-with-description__media', {
                        'media-with-description__media--media-left': mediaLeft
                    })}
                >
                    { mediaType === 'image' && 
                        <div
                            className='media-with-description__image'
                            style={{backgroundImage: `url(${imageUrl})`}}
                        ></div>
                    }
                    { mediaType === 'youtube' &&  <YouTubeVideo youtubeId={youtubeId} />}
                </div>             
            </div>
        )
    }
}
