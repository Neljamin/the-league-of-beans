import React, { Component } from 'react';
import classNames from 'classnames';

import './MinecraftCoordinate.scss';

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
            <div className={classNames('minecraft-coordinate', {
                'minecraft-coordinate--image-left': imageLeft
            })}>
                <div className='minecraft-coordinate__text'>
                    <h2>{title}</h2>
                    <h3>{x}, {y}, {z}</h3>
                    <div dangerouslySetInnerHTML={description}></div>
                </div>   
                <div
                    className={classNames('minecraft-coordinate__image', {
                        'minecraft-coordinate__image--image-left': imageLeft
                    })}
                    style={{backgroundImage: `url(${imageUrl})`}
                }></div>             
            </div>
        )
    }
}
