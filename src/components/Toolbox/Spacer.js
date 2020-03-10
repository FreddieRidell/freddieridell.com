import * as R from "ramda";
import styled from "@emotion/styled";

export default styled.div(
	R.applySpec({
		"@media screen": {
			height: ({ theme, height }) =>
				R.path(["size", "space", height], theme),
			maxHeight: ({ theme, height }) =>
				R.path(["size", "space", height], theme),
			minHeight: ({ theme, height }) =>
				R.path(["size", "space", height], theme),
		},

		"@media print": {
			height: ({ theme, height }) =>
				R.path(["size", "space", height - 2], theme),
			maxHeight: ({ theme, height }) =>
				R.path(["size", "space", height - 2], theme),
			minHeight: ({ theme, height }) =>
				R.path(["size", "space", height - 2], theme),
		},

		maxWidth: ({ theme, width }) => R.path(["size", "space", width], theme),
		minWidth: ({ theme, width }) => R.path(["size", "space", width], theme),
		width: ({ theme, width }) => R.path(["size", "space", width], theme),
	}),
);
