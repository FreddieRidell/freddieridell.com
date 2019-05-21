import * as R from "ramda";
import styled from "@emotion/styled";

export default styled.div(
	R.applySpec({
		height: ({ theme, height }) => R.path(["size", "space", height], theme),
		maxHeight: ({ theme, height }) =>
			R.path(["size", "space", height], theme),
		maxWidth: ({ theme, width }) => R.path(["size", "space", width], theme),
		minHeight: ({ theme, height }) =>
			R.path(["size", "space", height], theme),
		minWidth: ({ theme, width }) => R.path(["size", "space", width], theme),
		width: ({ theme, width }) => R.path(["size", "space", width], theme),
	}),
);
