import React from "react";

import { formatDate } from "../../util";

export default function Experience({ biz, children, end, position, start }) {
	return (
		<section className="p-2">
			<div className="flex items-center">
				<h3 className="text-xl font-bold">{position}</h3>
				<span className="text-lg block px-2 font-bold">-</span>
				<h4 className="text-lg font-semibold">{biz}</h4>
			</div>
			<div className="text-gray-800">
				{formatDate(start)} - {end ? formatDate(end) : "Current"}
			</div>
			<div>{children}</div>
		</section>
	);
}
