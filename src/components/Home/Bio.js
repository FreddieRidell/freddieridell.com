import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";
import { calm } from "@freddieridell/little-bonsai-styles";
import { Link } from "gatsby";

const BioStyled = styled.section(
	calm({
		alignSelf: "flex-start",
		fontSize: R.path(["theme", "size", "font", 3]),
	}),
);

const Bio = () => (
	<BioStyled>
		Hi, I'm Freddie Ridell. I'm a Frontend JavaScript Contractor working
		mainly with React. On this site you can find my{" "}
		<Link to="/blog">Blog Posts</Link>, details of my{" "}
		<Link to="/open-source">Open Source Work</Link>, and{" "}
		<Link to="/crafts">Knitting & Crochet Projects</Link>.
	</BioStyled>
);

export default Bio;
