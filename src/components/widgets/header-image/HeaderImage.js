import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import _ from 'lodash';

window.addEventListener('scroll', _.debounce(() => {
    const imageHeight = window.innerHeight * .9;
    const root = document.documentElement;
    if (window.scrollY > imageHeight) {
        const scrollBackgroundColor = getComputedStyle(root).getPropertyValue('--navbar-scroll-background-color');
        root.style.setProperty( '--navbar-background-color', scrollBackgroundColor);
    } else {
        root.style.setProperty('--navbar-background-color', 'transparent');       
    }
}, 100));

export default class HeaderImage extends Component {
    render() {
        const { image, title } = this.props;
        return (
            <StyledHeaderImage image={image}>
                <StyledTitle>
                    {title}
                </StyledTitle>
            </StyledHeaderImage>
        )
    }
}

const StyledHeaderImage = styled.div`
    display: flex;
    position: relative;
    height: 90vh;
    margin-bottom: 24px;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 0px;

    &:after {
        content: '';
        position: absolute;
        top: 0; left: 0; bottom: 0; right: 0;
        background: radial-gradient(transparent 50%, black), transparent;
        height: 100%;
    }

    ${props => props.image && css`
        background-image: url(${props.image});
    `}
`;

const StyledTitle = styled.span`
    color: var(--white);
    font-size: 64px;
    line-height: 64px;

    @media (max-width: 500px) {
        font-size: 32px;
        line-height: 32px;
    }

    text-shadow:
        -1px -1px 0 var(--black),  
        1px -1px 0 var(--black),
        -1px 1px 0 var(--black),
        1px 1px 0 var(--black);
`;

