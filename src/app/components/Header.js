import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export const Header = (props) => {
	return (
		<nav className="navbar navbar-default">
			<div className="container">
				<div className="navbar-header">
					<ul className="nav navbar-nav">
						<li><NavLink to={"/home"}>Home</NavLink></li>
						<li><NavLink to={"/contact"}>Contact</NavLink></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}