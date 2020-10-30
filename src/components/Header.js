import React from "react";
import { Link } from "react-router-dom";
import logo from "../fox-vector.svg";

import "./styling/Header.css";

const Header = () => {
	return (
		<header className="header">
			<Link to="/search">
				<button className="button-alexHouse">Search</button>
			</Link>
			<Link to="/">
			<img src={logo} className="header-logo" alt="logo" />
			</Link>
			<Link to="/about">
				<button className="button-alexHouse">About</button>
			</Link>
		</header>
	);
};

export default Header;
