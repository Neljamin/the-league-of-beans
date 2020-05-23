import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from "react-router-dom";

import './Navbar.scss';

export default class Navbar extends Component {
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
            <div className="navbar">
                <div className="navbar__logo">
                    Beans
                </div>
                <div className="navbar__links">
                    <button onClick={this.toggleShowLinks} className="navbar__toggle-links-button">
                        <span className={classNames('navbar__toggle-links-button-icon', { 'navbar__toggle-links-button-icon--hide': showLinks })}>
                            <i className='fas fa-bars'></i>
                        </span>
                        <span className={classNames('navbar__toggle-links-button-icon', { 'navbar__toggle-links-button-icon--hide': !showLinks })}>
                            <i className='fas fa-times'></i>
                        </span>
                    </button>
                    {showLinks && <ul className='navbar__link-dropdown'>
                        {links.map(link => (
                            <li key={link.route} className='navbar__link-item'>
                                <Link onClick={this.handleLinkClick} className='navbar__link' to={link.route}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>}
                </div>
            </div>
        )
    }
}
