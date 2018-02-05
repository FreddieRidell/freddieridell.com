import React from "react";

import styled from "styled-components";
import system from "system-components";

import { H2, } from "./headings";
import Hr from "./horizontalRule";

const SectionContainer = system({
	is: "section",
	my: 4,
});

const HeadingContainer = styled(H2)`
	display: flex;
	${ ({ toggleable, }) => toggleable ? "cursor: pointer;" : "" }
`;

const Triangle = system({
	mr: 1,
}).extend`
	transform: rotate(${ ({ open, }) => open ? 0 : -90 }deg);
	transition: transform ${ ({ theme: { transition, }, }) => transition };
	user-select: none;
`;

export default class Section extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			open: true,
		};
	}

	toggleOpen = () => {
		this.props.toggleable && this.setState( ({ open, ...rest}) =>({
			open: !open,
			...rest,
		}));
	}

	render(){
		console.log(this.state);

		return (
			<SectionContainer>
				{this.props.title && (
					<heading >
						<HeadingContainer
							toggleable = { this.props.toggleable }
							onClick = { this.toggleOpen }
						>
							{
								this.props.toggleable &&
									<Triangle open = { this.state.open } >
										▼
									</Triangle>
							}
							{this.props.title}
						</HeadingContainer>
					</heading>
				)}

				{ this.state.open && this.props.children}

				<Hr />
			</SectionContainer>
		);

	}
}
