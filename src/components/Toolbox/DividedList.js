import React from "react";

const DividedList = ({ data, getKey, renderItem, renderDivider }) =>
	data.map((item, i) => {
		return (
			<React.Fragment key={getKey(item)}>
				{i !== 0 && renderDivider(item)}
				{renderItem(item)}
			</React.Fragment>
		);
	});

export default DividedList;
