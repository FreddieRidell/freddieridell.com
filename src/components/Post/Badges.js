import React from "react";
import * as R from "ramda";
import styled from "@emotion/styled";
import { readableColor, calm } from "@freddieridell/little-bonsai-styles";
import { mix } from "polished";

const BadgeStyled = styled.a(
	calm({
		margin: R.path(["theme", "size", "space", 2]),
		display: "inline-flex",
		borderRadius: R.path(["theme", "size", "space", 1]),
		fontSize: R.path(["theme", "size", "font", 2]),
		lineHeight: R.path(["theme", "size", "space", 4]),
		overflow: "hidden",
	}),
);

const BadgeKey = styled.div(
	calm({
		padding: ({
			theme: {
				size: { space },
			},
		}) => [space[1], space[2]].join(" "),
		backgroundImage: x =>
			`linear-gradient(${mix(
				3 / 4,
				R.path(
					["theme", "color", "symantic", "inverted", "background"],
					x,
				),
				R.path(["theme", "color", "chromatic", "white"], x),
			)}, ${R.path(
				["theme", "color", "symantic", "inverted", "background"],
				x,
			)})`,
		color: R.path(["theme", "color", "symantic", "inverted", "text"]),
	}),
);

const BadgeValue = styled.div(
	calm({
		padding: ({
			theme: {
				size: { space },
			},
		}) => [space[1], space[2]].join(" "),
		backgroundImage: ({ color, theme }) =>
			`linear-gradient(${mix(
				3 / 4,
				theme.color.chromatic[color],
				theme.color.chromatic.white,
			)}, ${theme.color.chromatic[color]})`,
		color: readableColor(
			({ color, theme }) => theme.color.chromatic[color],
			R.path(["theme", "color", "symantic", "inverted", "background"]),
			R.path(["theme", "color", "symantic", "background"]),
		),
	}),
);

const Badge = ({ href, quay, value, color }) => (
	<BadgeStyled href={href}>
		<BadgeKey color={color}>{quay}</BadgeKey>
		<BadgeValue color={color}>{value}</BadgeValue>
	</BadgeStyled>
);

const BadgesContainer = styled.section(
	calm({
		display: "flex",
		paddingLeft: R.path(["theme", "size", "space", 1]),
		flexFlow: "row wrap",
	}),
);

const Badges = ({ npm, repo, crates }) => (
	<BadgesContainer>
		{repo && (
			<Badge
				href={`https://github.com/${repo}`}
				color="blue"
				quay="repo"
				value={repo}
			/>
		)}

		{npm && (
			<Badge
				href={`https://www.npmjs.com/package/${npm}`}
				color="red"
				quay="npm"
				value={npm}
			/>
		)}

		{crates && (
			<Badge
				href={`https://crates.io/crates/${crates}`}
				color="orange"
				quay="crate"
				value={crates}
			/>
		)}
	</BadgesContainer>
);

export default Badges;
