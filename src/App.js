import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import "./App.scss";
import { Navbar, Footer, Loader } from "./components/widgets";
import Page from './components/page';
import { contentService } from "./services";

export default class App extends Component {
  state = {
    loading: true
  }

	constructor(props) {
    super(props);
    this.contentService = contentService;
  }

	componentDidMount() {
    this.contentService.getAllPagesContent()
      .then(pages => {
        const links = pages.reduce((acc, page) => {
            const { title, route } = page.fields;
            if (route === '/') {
              return [{ name: 'Home', route }, ...acc];
            }
            return [...acc, { name: title, route }];
        }, []);

        this.setState({
          loading: false,
          links,
          pages
        });
      });
  }

	render() {
    const { loading, links, pages } = this.state;
    if (loading) {
      return <Loader />;
    }

		return (
			<Router>
				<Navbar links={links} />
        {pages.map((page, index) => (
          <Route key={index} path={page.fields.route} exact={page.fields.route === '/'}>
            <Page content={page} />
          </Route>
        ))}
				<Footer />
			</Router>
		);
	}
}
