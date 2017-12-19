import React from 'react'
import styled from "styled-components";
import Link from 'gatsby-link'

export default ({ data, }) => (
	<div>
		<h1>Hi, I'm Freddie Ridell</h1>
		<ul>
			<li>
				I'm the CTO of <a href = "https://codogo.io">codogo.io</a>
			</li>
			<li>
				I write about my open source work <Link to = "/open-source">here</Link>
			</li>
			<li>
				I've started bloging <Link to = "/blog/" >here</Link>
			</li>
			<li>
				I sometimes do arts-and-crafts <Link to = "/crafty/">here</Link>
			</li>
		</ul>

		<h2>Social Media:</h2>

		<ul>
			<li>
				<a href = "https://twitter.com/FreddieRidell">twitter</a>
			</li>
			<li>
				<a href = "https://github.com/CodogoFreddie" >github</a>
			</li>
			<li>
				<a href = "https://refind.com/FreddieRidell?invite=6ea3358605">refind</a>
			</li>
			<li>
				<a href = "https://toot.cafe/@freddieRidell" >mastodon</a>
			</li>
			<li>
				<a href = "mailto:freddie@codogo.io">freddie@codogo.io</a>
			</li>
		</ul>

		<hr />

		<p>
			This page is still very much a work in progress, but I'm adding new content to it every day.
			Please do check back in regularly
		</p>

		<h2>Addresses</h2>
		<div id="addresses">
			pgp:    6BE0AF404BB9D844281F3DA5ACD8B92700BF93A0
			{ "\n" }
			eth:    0x330E067E74FB15d4A71e58afFf459Db92eA85a78
			{ "\n" }
			monero: 46CFjzzLYuWJtT1tuFaRSTRp3XnqH8rUB6j8CpHgXC9EG3WBbdzfQKXZxcKNSoz28AS4hPRus7acaG5XEiEAvkkX3izgNkg
			{ "\n" }
			btc:    159CcWg7MvmKePfUoKxXYRf2TPEorGzqGD
			{ "\n" }
			ltc:    LfZdJDtwNpsKrsJYEgqAuJnCBoyiMPYs1Y
			{ "\n" }
			doge:   DEVPfEpNTeTzUMzttfdxZ9ULTUAqzY2vPw
			{ "\n" }
			Yu Gi Oh Duel Links: 549-882-525
		</div>
	</div>
)
