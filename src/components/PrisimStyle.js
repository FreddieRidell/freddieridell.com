import React, { Fragment } from "react";
import * as R from "ramda";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
code[class*="language-"],
pre[class*="language-"] {
	color: ${R.path(["theme", "color", "code", "text"])};
	background-color: ${R.path(["theme", "color", "code", "bg"])};
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;
	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;
	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection,
pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
	background: ${R.path(["theme", "color", "orange"])};
}

/* Code blocks */
pre[class*="language-"] {
	padding: ${R.path(["theme", "size", "space", 0])};
	margin: ${R.path(["theme", "size", "space", 0])} 0;
	overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	color: ${R.path(["theme", "color", "code", "text"])};
	background-color: ${R.path(["theme", "color", "code", "bg"])};
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	color: ${R.path(["theme", "color", "text"])};
	background: ${R.path(["theme", "color", "bg"])};
	padding: .1em;
	border-radius: .3em;
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: ${R.path(["theme", "color", "code", "gray"])};
}

.token.punctuation {
	color: ${R.path(["theme", "color", "code", "text"])};
}

.namespace {
	opacity: .7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.token.function,
.token.class-name ,
.style .token.string ,
.token.deleted {
	color: ${R.path(["theme", "color", "code", "red"])};
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: ${R.path(["theme", "color", "code", "green"])};
}

.token.atrule,
.token.attr-value,
.token.keyword {
	color: ${R.path(["theme", "color", "code", "blue"])};
}

.token.regex,
.token.important,
.token.variable {
	color: ${R.path(["theme", "color", "code", "orange"])};
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}
`;

export default GlobalStyle;
