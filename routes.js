import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './containers/App';
import About from './containers/About';
import Home from './containers/Home/Home';

export default () => {
	return (
		<BrowserRouter>
			<Switch>
			  <Route path='/' component={Home}/>
			</Switch>
		</BrowserRouter>
	)
}
