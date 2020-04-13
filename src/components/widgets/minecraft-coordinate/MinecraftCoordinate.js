import React, { Component } from 'react';

import './MinecraftCoordinate.scss';

export default class MinecraftCoordinate extends Component {
    render() {
        const {
            title,
            x,
            y,
            z,
            description,
            imageUrl
        } = this.props;
        return (
            <div className="minecraft-coordinate">
                <div>
                    <h2>{title}</h2>
                    <h3>{x}, {y}, {z}</h3>
                    <div dangerouslySetInnerHTML={description}></div>
                </div>   
                <div className="minecraft-coordinate__image" style={{backgroundImage: `url(${imageUrl})`}}></div>             
            </div>
        )
    }
}
