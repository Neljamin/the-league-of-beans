import React from 'react';

import './MainBody.scss';

export default ({
    children
}) => {
    return (
        <div className='main-body'>
            <div className="main-body__content">
                {children}
            </div>
        </div>
    )
}
