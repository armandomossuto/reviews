import React from 'react';
import Find from './find.js';
import Create from './create.js';
import List from './list.js'

const Home = () =>
	<div className="home-page"> 
		<Find />
		<Create />
		<List />
	</div>

export default Home;