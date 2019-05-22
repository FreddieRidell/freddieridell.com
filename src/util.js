import * as R from "ramda";
import format from "date-fns/fp/format";

export const smallerThan = breakPoint => `@media (max-width: ${breakPoint})`;

export const formatDate = R.pipe(
	x => new Date(x),
	format("y-MM-dd"),
);
