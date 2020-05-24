import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';

export default class Footer extends Component {
    render() {
        return (
            <StyledFooter>
                <Container textAlign='right'>
                    <div>
                        Beans &copy; 2020 
                    </div>
                </Container>
            </StyledFooter>
        )
    }
}

const StyledFooter = styled.div`
    margin-top: 48px;
    padding: 24px 0;
    background-color: var(--footer-background);
    color: var(--footer-text);
`;
