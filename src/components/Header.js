import React from "react";
import logo from "../fox-vector.svg";

import "./styling/Header.css";

const Header = () => {
	return (
		<header className="header">
			<img src={logo} className="header-logo" alt="logo" />
		</header>
	);
};

export default Header;
