import React from "react";

import styled from "styled-components";
import system from "system-components";

import { H2, } from "./headings";
import { SilentLink, } from "./link";
import Hr from "./horizontalRule";

const SectionContainer = system({
	is: "section",
	my: 4,
});

const HeadingContainer = styled(H2)`
	display: flex;
	align-items: center;
	${({ toggleable, }) => (toggleable ? "cursor: pointer;" : "")};
`;

const Triangle = system({
	ml: 1,
	fontSize: 2,
}).extend`
	transform: rotate(${({ open, }) => (open ? 0 : -90)}deg);
	transition: transform ${({ theme: { transition, }, }) => transition};
	user-select: none;
`;

export default class Section extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: true,
		};
	}

	toggleOpen = () => {
		this.props.toggleable &&
			this.setState(({ open, ...rest }) => ({
				open: !open,
				...rest,
			}));
	};

	render() {
		const inner = (
			<SectionContainer>
				{this.props.title && (
					<heading>
						<HeadingContainer
							toggleable = { this.props.toggleable }
							onClick = { this.toggleOpen }
						>
							{this.props.title}
							{this.props.toggleable && (
								<Triangle open = { this.state.open }>▼</Triangle>
							)}
						</HeadingContainer>
					</heading>
				)}

				{this.state.open && this.props.children}

				<Hr />
			</SectionContainer>
		);

		return (
			this.props.to
			? <SilentLink to = { this.props.to } > { inner } </SilentLink>
					: inner
			);
	}
}
