import React, { Component } from 'react';

import './Loader.scss';

export default class Loader extends Component {
    render() {
        return (
            <div className='loader'>                                                         
                <div className="loader__icon">
                    <i className="fas fa-spinner"></i>
                </div>
            </div>
        )
    }
}
