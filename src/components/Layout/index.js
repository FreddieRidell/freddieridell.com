import React from "react";

import Head from "./Head";

const Layout = ({ title, navLinks, description, children }) => (
	<React.Fragment>
		<Head />
		<header>{title}</header>
		<main>{children}</main>
		<footer>footer</footer>
	</React.Fragment>
);

export default Layout;
