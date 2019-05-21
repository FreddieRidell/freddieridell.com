import * as R from "ramda";
import { css } from "styled-components";
import format from "date-fns/fp/format";

export const formatDate = R.pipe(
	x => new Date(x),
	format("y-MM-dd"),
);

export const smol = x =>
	css`
		@media (max-width: 65rem) {
			${x}
		}
	`;
