import React, { Component } from 'react';

import './MinecraftCoordinate.scss';
import { MediaWithDescription } from '../';

export default class MinecraftCoordinate extends Component {
    render() {
        const {
            title,
            x,
            y,
            z,
            description,
            imageUrl,
            imageLeft
        } = this.props;
        return (
            <MediaWithDescription
                mediaType="image"
                imageUrl={imageUrl}
                mediaLeft={imageLeft}
            >
                <h2>{title}</h2>
                <h3>{x}, {y}, {z}</h3>
                <div dangerouslySetInnerHTML={description}></div>
            </MediaWithDescription>
        )
    }
}
