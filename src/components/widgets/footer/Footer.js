import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import './Footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Container textAlign='right'>
                    <div className="footer__licence">
                        Beans &copy; 2020 
                    </div>
                </Container>
            </div>
        )
    }
}