import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from "react-router-dom";

import styles from './SiteNavbar.module.scss';

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
            <div className={styles['site-navbar']}>
                <div className={styles['site-navbar__logo']}>
                    Beans
                </div>
                <div className={styles['site-navbar__links']}>
                    <button
                        onClick={this.toggleShowLinks} 
                        className={styles['site-navbar__toggle-links-button']}
                    >
                        <span className={
                            classNames(
                                styles['site-navbar__toggle-links-button-icon'],
                                {
                                    [styles['site-navbar__toggle-links-button-icon--hide']]: showLinks
                                }
                            )}
                        >
                            <i className='fas fa-bars'></i>
                        </span>
                        <span className={
                            classNames(
                                styles['site-navbar__toggle-links-button-icon'],
                                {
                                    [styles['site-navbar__toggle-links-button-icon--hide']]: !showLinks
                                }
                            )
                        }>
                            <i className='fas fa-times'></i>
                        </span>
                    </button>
                    {showLinks && <ul className={styles['site-navbar__link-dropdown']}>
                        {links.map(link => (
                            <li key={link.route} className={styles['site-navbar__link-item']}>
                                <Link
                                    onClick={this.handleLinkClick}
                                    className={styles['site-navbar__link']}
                                    to={link.route}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>}
                </div>
            </div>
        )
    }
}
