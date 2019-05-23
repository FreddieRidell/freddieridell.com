import React from "react";

export default () => {
	const [hidden, setHidden] = React.useState(false);
	const lastCheckedTime = React.useRef(0);
	const previousPageY = React.useRef(0);

	React.useEffect(() => {
		document.body.onscroll = () => {
			const checkTime = new Date().getTime();
			if (lastCheckedTime.current + 100 > checkTime) {
				return;
			}

			lastCheckedTime.current = checkTime;

			const pageY = window.scrollY;
			if (pageY === previousPageY.current) {
				return;
			}

			const shouldBeHidden = pageY > previousPageY.current;
			previousPageY.current = pageY;

			if (shouldBeHidden === hidden) {
				return;
			}

			setHidden(shouldBeHidden);
		};

		return () => {
			document.body.onscroll = null;
		};
	}, [hidden, setHidden, previousPageY, lastCheckedTime]);

	return hidden;
};
