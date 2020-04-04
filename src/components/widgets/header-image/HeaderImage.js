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

const HeaderImage = styled.div`
    height: 90vh;
    margin-bottom: 24px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 0px;

    ${props => props.image && css`
        background-image: url(${props.image});
    `}
`;

export default HeaderImage;