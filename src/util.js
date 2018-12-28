import * as R from "ramda";
import { css } from "styled-components";
import format from "date-fns/fp/format";

export const getNavLinks = R.pipe(
	R.path(["data", "allSitePage", "edges"]),
	R.map(R.path(["node", "path"])),
	R.filter(slug => (slug.match(/\//g) || []).length === 2),
	R.sortBy(R.identity),
	R.map(slug => ({
		slug,
		label: slug.replace(/\//g, "").replace("-", " "),
	})),
);

export const formatDate = format("y-MM-dd");

export const smol = x =>
	css`
		@media (max-width: 65rem) {
			${x}
		}
	`;
