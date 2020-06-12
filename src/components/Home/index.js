import React from "react";
import Link from "next/link";

import Experience from "./Experiences";

function PrintHide({ children }) {
	return <span className="print-hide">{children}</span>;
}

function Bio() {
	return (
		<section className="p-2">
			Hi, I'm Freddie Ridell. I'm a Frontend JavaScript Contractor working
			mainly with React.{" "}
			<PrintHide>
				On this site you can find my{" "}
				<Link href="/blog">Blog Posts</Link>, details of my{" "}
				<Link href="/open-source">Open Source Work</Link>, and{" "}
				<Link href="/crafts">Knitting & Crochet Projects</Link>.
			</PrintHide>
		</section>
	);
}

function Skills() {
	return (
		<section className="p-2">
			<h2 className="text-2xl">Skills</h2>
			<ul className="list-disc pl-4">
				<li>Javascript/Typescript/Flow, ES6+</li>
				<li>React, React Native, Redux</li>
				<li>Express, REST, GraphQL</li>
				<li>Babel, Webpack, Parcel, Next.js</li>
				<li>Linux, Shell, Git</li>
				<li>Rust, C, C++</li>
				<li>
					Test Driven Development, Continuous Integration/Deployment
				</li>
				<li>Podcasting, Voice Acting</li>
				<li>Juggling, Knitting, Crochet</li>
				<li>Standup & Sketch Comedy</li>
			</ul>
		</section>
	);
}

function Experiences({ children }) {
	return (
		<div className="p-2">
			<h2 className="text-2xl">Experience</h2>
			{children}
		</div>
	);
}

function getYearsAsAContractor() {
	return Math.round(
		(new Date() - new Date("2018-02-18")) / (60 * 60 * 24 * 265 * 1000),
	);
}

export default function Home() {
	return (
		<React.Fragment>
			<h1 className="p-2 text-4xl">Freddie Ridell</h1>
			<Bio />
			<Skills />
			<Experiences>
				<Experience
					position="Senior React Contractor"
					biz="Workshare, Sharp Gaming"
					start={new Date("2018-02-18")}
				>
					<p>
						I have provided my development services for several
						clients, working as part of agile teams to deliver high
						quality web apps using modern react.
					</p>
					<p>
						In addition to development I have also trained junior
						team members, onboarded incoming mid/senior level
						developers, and driven foundational technical changes
						across codebases. I was trusted to investigate and
						implement the core state-management solution for a large
						scale green-field app, and drove an initiative to adopt
						state-of-the-art unit testing of an otherwise untested
						200k LOC codebase.
					</p>
				</Experience>

				<Experience
					position="Co-founder/Lead Developer"
					biz="Codogo"
					end={new Date("2018-02-18")}
					start={new Date(1451606400000)}
				>
					<p>
						The core focus of my work has been producing Codogo
						Write, a modern writing web app with a focus on
						ease-of-use and polished user experience. We were
						invited to pitch with Y Combinator in California on the
						strength of the MVP I developed
					</p>
					<p>
						To support development of this product, I produced
						complex web and native apps and websites for over 20
						clients, across a breadth of fields (including chat
						apps, social networks, and data-vis) both from scratch
						and on legacy systems in React and React Native
					</p>
				</Experience>

				<Experience
					position="Development Intern"
					biz="Amazon Instant Video"
					start={new Date(1433116800000)}
					end={new Date(1441065600000)}
				>
					<p>
						I worked on Amazon’s native instant video player: a
						large scale real-time c++ codebase. I was responsible
						for porting it to OS X and fixing performance-critical
						memory bugs. Taking responsibility for mission-critical
						software and working to provide tooling for other
						developers allowed me to gain valuable experience in
						communicating with other developers across many other
						teams across Amazon
					</p>
				</Experience>

				<Experience
					position="Computer Science Degree (2:1)"
					biz="Durham University"
					start={new Date("2013-09-01")}
					end={new Date(1451606400000)}
				>
					<p>
						Dissertation: Designing, evaluating, and optimizing a
						system for population simulation
					</p>
					<p>
						During my degree I studied a wide range of subjects:
						from runtime/space analysis and higher order logic to
						database systems and software development best
						practices. My exposure to the full range of modern
						software at a world renowned university provided me with
						the rock solid foundation I needed to hit the ground
						running providing elegant and powerful solutions to
						every problem I've encountered since
					</p>
				</Experience>
			</Experiences>
		</React.Fragment>
	);
}
