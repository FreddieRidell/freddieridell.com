const zIndecies = ["header"].reduce(
	(acc, val, i) => ({
		...acc,
		[val]: (i + 1) * 10,
	}),
	{},
);

export default zIndecies;
