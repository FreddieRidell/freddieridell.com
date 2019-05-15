import React, { Fragment } from "react";
import * as R from "ramda";
import { Link } from "@reach/router";
import styled, { withTheme, ThemeProvider } from "styled-components";

const WebRingStyled = styled.nav`
	display: inline;
`;

const WebRingLinkStyled = styled.a`
	margin: 0 ${R.path(["theme", "size", "space", 0])};
`;

const WebRing = () => (
	<WebRingStyled>
		Web Ring:
		<span>
			{[["prev", "⬅️"], ["", "🏠"], ["rand", "🔀"], ["next", "➡️"]].map(
				([path, label]) => (
					<WebRingLinkStyled
						key={path}
						href={`https://personal-sites-web-ring.freddieridell.now.sh/${path}`}
					>
						{label}
					</WebRingLinkStyled>
				),
			)}
		</span>
	</WebRingStyled>
);

export default WebRing;
