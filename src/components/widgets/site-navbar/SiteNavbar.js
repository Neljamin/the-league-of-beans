import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from "react-router-dom";

import './SiteNavbar.scss';

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

        console.log(links);

        return (
            <div className="site-navbar">
                <div className="site-navbar__logo">
                    Beans
                </div>
                <div className="site-navbar__links">
                    <button onClick={this.toggleShowLinks} className="site-navbar__toggle-links-button">
                        <span className={classNames('site-navbar__toggle-links-button-icon', { 'site-navbar__toggle-links-button-icon--hide': showLinks })}>
                            <i className='fas fa-bars'></i>
                        </span>
                        <span className={classNames('site-navbar__toggle-links-button-icon', { 'site-navbar__toggle-links-button-icon--hide': !showLinks })}>
                            <i className='fas fa-times'></i>
                        </span>
                    </button>
                    {/* {showLinks && <ul className='site-navbar__link-dropdown'>
                        {links.map(link => (
                            <li key={link.route} className='site-navbar__link-item'>
                                <Link onClick={this.handleLinkClick} className='site-navbar__link' to={link.route}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>} */}
                </div>
            </div>
        )
    }
}
