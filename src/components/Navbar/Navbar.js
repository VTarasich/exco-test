import React from 'react';
import { Link } from 'react-router-dom';

import HamburgerBtn from '../HamburgerBtn/HamburgerBtn';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg'
import avatar from '../../assets/png/avatar.png';

import './Navbar.css';

const navbar = () => (
	<header className="topbar">
		<nav className="topbar__navigation">
			<div className="topbar__logo"><Link to="/"><Logo/></Link></div>
			<div className="nav-middle-space"/>
			<div className="topbar__navigation-items">
				<ul>
					<li><a href="/">Explore</a></li>
					<li><a href="/">Subscriptions</a></li>
					<li><a href="/">Channels</a></li>
					<li><img alt="" src={avatar}/></li>
				</ul>
			</div>
			<div>
				<HamburgerBtn/>
			</div>
		</nav>
	</header>
);

export default navbar;
