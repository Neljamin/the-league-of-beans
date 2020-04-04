import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import './LandingPage.scss';
import { HeaderImage } from '../../widgets/';

export default class LandingPage extends Component {
    render() {
        return (
            <div className="landing-page">
                <div className="landing-page__main-image"></div>
                <HeaderImage image={process.env.PUBLIC_URL +'/assets/images/landing-main.jpg'} />
                <Container>
                    <h1>
                        We are Beans.<br />
                        Nothing more.<br />
                        Nothing less.<br />
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus enim dolor, vestibulum eget urna sit amet, tempor viverra mauris. In sit amet lacus ultrices, vehicula mi et, convallis elit. Curabitur hendrerit quis libero non venenatis. Donec feugiat leo urna, et blandit nibh tempus vitae. In hac habitasse platea dictumst. Cras auctor urna eu massa imperdiet, non congue erat malesuada. Maecenas in ornare diam. In dui leo, rutrum ac tortor a, eleifend elementum lacus.</p>
                    <p>Etiam turpis nisi, laoreet quis augue non, consectetur accumsan nisl. Pellentesque egestas dui euismod risus scelerisque posuere. Donec sed semper justo, auctor lobortis eros. Sed quis volutpat odio. Nam suscipit diam nec tincidunt pharetra. Nunc dignissim feugiat velit eget efficitur. Aliquam at dui libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <p>Nulla semper tincidunt imperdiet. Vivamus viverra dapibus ornare. Maecenas et urna tortor. Sed tristique lorem varius libero luctus pharetra. Suspendisse potenti. Quisque fermentum convallis libero vitae finibus. Donec pulvinar non dolor nec rhoncus. Vivamus ut scelerisque enim, ut rutrum turpis. Phasellus sollicitudin mollis sem. Maecenas aliquam facilisis tellus a euismod.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus enim dolor, vestibulum eget urna sit amet, tempor viverra mauris. In sit amet lacus ultrices, vehicula mi et, convallis elit. Curabitur hendrerit quis libero non venenatis. Donec feugiat leo urna, et blandit nibh tempus vitae. In hac habitasse platea dictumst. Cras auctor urna eu massa imperdiet, non congue erat malesuada. Maecenas in ornare diam. In dui leo, rutrum ac tortor a, eleifend elementum lacus.</p>
                    <p>Etiam turpis nisi, laoreet quis augue non, consectetur accumsan nisl. Pellentesque egestas dui euismod risus scelerisque posuere. Donec sed semper justo, auctor lobortis eros. Sed quis volutpat odio. Nam suscipit diam nec tincidunt pharetra. Nunc dignissim feugiat velit eget efficitur. Aliquam at dui libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <p>Nulla semper tincidunt imperdiet. Vivamus viverra dapibus ornare. Maecenas et urna tortor. Sed tristique lorem varius libero luctus pharetra. Suspendisse potenti. Quisque fermentum convallis libero vitae finibus. Donec pulvinar non dolor nec rhoncus. Vivamus ut scelerisque enim, ut rutrum turpis. Phasellus sollicitudin mollis sem. Maecenas aliquam facilisis tellus a euismod.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus enim dolor, vestibulum eget urna sit amet, tempor viverra mauris. In sit amet lacus ultrices, vehicula mi et, convallis elit. Curabitur hendrerit quis libero non venenatis. Donec feugiat leo urna, et blandit nibh tempus vitae. In hac habitasse platea dictumst. Cras auctor urna eu massa imperdiet, non congue erat malesuada. Maecenas in ornare diam. In dui leo, rutrum ac tortor a, eleifend elementum lacus.</p>
                    <p>Etiam turpis nisi, laoreet quis augue non, consectetur accumsan nisl. Pellentesque egestas dui euismod risus scelerisque posuere. Donec sed semper justo, auctor lobortis eros. Sed quis volutpat odio. Nam suscipit diam nec tincidunt pharetra. Nunc dignissim feugiat velit eget efficitur. Aliquam at dui libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <p>Nulla semper tincidunt imperdiet. Vivamus viverra dapibus ornare. Maecenas et urna tortor. Sed tristique lorem varius libero luctus pharetra. Suspendisse potenti. Quisque fermentum convallis libero vitae finibus. Donec pulvinar non dolor nec rhoncus. Vivamus ut scelerisque enim, ut rutrum turpis. Phasellus sollicitudin mollis sem. Maecenas aliquam facilisis tellus a euismod.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus enim dolor, vestibulum eget urna sit amet, tempor viverra mauris. In sit amet lacus ultrices, vehicula mi et, convallis elit. Curabitur hendrerit quis libero non venenatis. Donec feugiat leo urna, et blandit nibh tempus vitae. In hac habitasse platea dictumst. Cras auctor urna eu massa imperdiet, non congue erat malesuada. Maecenas in ornare diam. In dui leo, rutrum ac tortor a, eleifend elementum lacus.</p>
                    <p>Etiam turpis nisi, laoreet quis augue non, consectetur accumsan nisl. Pellentesque egestas dui euismod risus scelerisque posuere. Donec sed semper justo, auctor lobortis eros. Sed quis volutpat odio. Nam suscipit diam nec tincidunt pharetra. Nunc dignissim feugiat velit eget efficitur. Aliquam at dui libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <p>Nulla semper tincidunt imperdiet. Vivamus viverra dapibus ornare. Maecenas et urna tortor. Sed tristique lorem varius libero luctus pharetra. Suspendisse potenti. Quisque fermentum convallis libero vitae finibus. Donec pulvinar non dolor nec rhoncus. Vivamus ut scelerisque enim, ut rutrum turpis. Phasellus sollicitudin mollis sem. Maecenas aliquam facilisis tellus a euismod.</p>
                </Container>

            </div>
        )
    }
}
