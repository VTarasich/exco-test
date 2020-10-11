import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import ExcoPage from './Pages/ExcoPage/ExcoPage';
import Feed from './Pages/Feed/Feed';

import './App.css';

const App = () => {
	return (
		<div className="app">
			<Router>
				<Navbar/>
				<main>
					<Switch>
						<Route exact path="/" component={Feed}/>
						<Route path="/exco/:id" component={ExcoPage}/>
					</Switch>
				</main>
			</Router>
		</div>
	);
}

export default App;
