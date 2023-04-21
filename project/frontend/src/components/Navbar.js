import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	return (
		<nav>
			<ul>
				<li>
					<NavLink exact to="/" activeClassName="active">
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/task1" activeClassName="active">
						Task1
					</NavLink>
				</li>
				<li>
					<NavLink to="/task2" activeClassName="active">
						Task2
					</NavLink>
				</li>
				<li>
					<NavLink to="/task3" activeClassName="active">
						Task3
					</NavLink>
				</li>
				<li>
					<NavLink to="/task4" activeClassName="active">
						Task4
					</NavLink>
				</li>
				<li>
					<NavLink to="/task5" activeClassName="active">
						Task5
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
