import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import { Provider } from 'react-redux'
import {store} from './store/store.js';
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './components/home/home.js';
import Search from './components/search/search.js';
import Review from './components/review/review.js';
import Profile from './components/profile/profile.js';
import NavBar from './components/navbars/navbar.js';
import Footer from './components/navbars/footer.js';


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<NavBar />
				<Route exact path="/" component={Home} />
				<Route path="/search" component={Search} />
				<Route path="/review" component={Review} />
				<Route path="/profile" component={Profile} />
				<Footer />
			</div>
		</Router>
	</Provider>
	,document.getElementById('root')
	);



