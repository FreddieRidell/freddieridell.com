import React from "react";

import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
					<link
						rel="stylesheet"
						href="https://assets.littlebonsai.co.uk/main.css"
					/>
					<style>
						{`
	section {
		break-inside: avoid;
	}

	@media print {
		.print-hide {
			display: none;
		}
		@page {
			margin: 16px 24px;
		}

		html {
			padding: 0px;
		}

		body,
		#next {
			margin: 0;
			padding: 0;
			width: 100%;
		}
	}
	`}
					</style>
				</Head>
				<body className="plague-town">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
