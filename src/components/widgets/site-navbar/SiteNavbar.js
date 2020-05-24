import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

export default class SiteNavbar extends Component {
    state = {
        showLinks: false
    }

    toggleShowLinks = () => {
        this.setState({ showLinks: !this.state.showLinks });
    }

    handleLinkClick = () => {
        this.toggleShowLinks();
        window.scrollTo(0, 0);
    }

    render() {
        const { links = [] } = this.props;
        const { showLinks } = this.state;

        return (
            <StyledSiteNavbar>
                <StyledSiteNavbarLogo>
                    Beans
                </StyledSiteNavbarLogo>
                <StyledSiteNavbarLinks>
                    <StyledSiteNavbarLinksButton onClick={this.toggleShowLinks}>
                        <StyledSiteNavbarLinksButtonIcon hide={showLinks}>
                            <i className='fas fa-bars'></i>
                        </StyledSiteNavbarLinksButtonIcon>
                        <StyledSiteNavbarLinksButtonIcon hide={!showLinks}>
                            <i className='fas fa-times'></i>
                        </StyledSiteNavbarLinksButtonIcon>
                    </StyledSiteNavbarLinksButton>
                    {showLinks && <StyledSiteNavbarLinksDropdown>
                        {links.map(link => (
                            <StyledSiteNavbarLinkItem key={link.route}>
                                <StyledSiteNavbarLink
                                    onClick={this.handleLinkClick}
                                    to={link.route}
                                >
                                    {link.name}
                                </StyledSiteNavbarLink>
                            </StyledSiteNavbarLinkItem>
                        ))}
                    </StyledSiteNavbarLinksDropdown>}
                </StyledSiteNavbarLinks>
            </StyledSiteNavbar>
        )
    }
}

const StyledSiteNavbar = styled.div`
    position: fixed;
    z-index: 1;
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    background-color: var(--navbar-background-color);
`;

const StyledSiteNavbarLogo = styled.div`
    padding: 0 16px;
    font-size: 24px;
    text-transform: uppercase;
    color: var(--logo-color);
    font-weight: 800;
    text-shadow:
        -1px -1px 0 var(--logo-outline-color),  
        1px -1px 0 var(--logo-outline-color),
        -1px 1px 0 var(--logo-outline-color),
        1px 1px 0 var(--logo-outline-color);
`;

const StyledSiteNavbarLinks = styled.div`
    position: relative;
`;

const StyledSiteNavbarLinksButton = styled.button`
    position: relative;
    padding: 0;
    display: flex;
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
    height: 24px;
    width: 24px;
    margin-right: 24px;
`;

const StyledSiteNavbarLinksButtonIcon = styled.div`
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    color: var(--nav-bar-links-button-color);
    width: 100%;
    backface-visibility: hidden;
    transition: transform 500ms ease;
    transform: ${props => props.hide ? 'rotateY(180deg)' : 'rotateY(deg)'};
`;

const StyledSiteNavbarLinksDropdown = styled.ul`
    position: absolute;
    padding: 0;
    left: -120px;
    width: 150px;
    border: 1px solid #ccc;
    background-color: white;
`;

const StyledSiteNavbarLinkItem = styled.li`
    width: 100%;
    list-style: none;
`;

const StyledSiteNavbarLink = styled(Link)`
    display: block;
    width: 100%;
    padding: 8px;
    color: black;

    &:hover {
        color: #ccc;
    }
`;
