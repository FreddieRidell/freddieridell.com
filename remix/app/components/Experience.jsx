import Section from "./Section";
import { format } from "date-fns";

function Role({ children, who, start, end, role }) {
	return (
		<Section title={role} smol>
			<div className="text-gray-800 pb-1">
				<span>
					{format(start, "MMM yyyy")}
					{" - "}
					{end ? format(end, "MMM yyyy") : "Current"}
				</span>
				<span> | </span>
				<span>{who.join(", ")}</span>
			</div>
			{children}
		</Section>
	);
}

function SubRole({ children, who, skills }) {
	return (
		<li className="break-after-auto break-before-auto py-1">
			<span className="font-bold">{who}</span>{" "}
			<span className="italic">({skills.join(", ")})</span> {children}
		</li>
	);
}

export default function Experience() {
	return (
		<Section title="Experience">
			<Role
				role="Senior React Contractor"
				start={new Date("2018-02")}
				end={null}
				who={["Mkodo", "Sharp Gaming", "Imagine Cruising", "Workshare"]}
			>
				<div className="pb-2">
					I have worked as part of many agile teams to deliver
					high-quality web apps using modern React.js. I am
					comfortable working in teams of any size, with the full
					stack knowledge needed to deliver a production app on my
					own, and the soft-skills to contribute to and enable a 20
					person team. I work hard to ensure I deliver the greatest
					possible value to my client, and have been offered a full
					time position with every client I've worked with.
				</div>
				<div className="pb-2">
					I have also trained junior team members, onboarded incoming
					mid/senior level developers, and driven foundational
					technical changes across codebases. I was trusted to
					investigate and implement the core state-management solution
					for a large scale green-field app, and drove an initiative
					to adopt state-of-the-art unit testing of an otherwise
					untested 200k LOC codebase.
				</div>
				<ul className="list-disc pl-4 break-inside-auto">
					<SubRole
						who="Mkodo"
						skills={[
							"React",
							"Next.js",
							"Typescript",
							"Storybook",
							"TDD",
						]}
					>
						Mkodo asked me to return to help bootstrap a
						Next.js/Typescript project for their new client: The
						National Irish Lottery. Security and Scaleability were a
						primary concern, and I helped grow the team from 3 to 15
						developers, while maintaining a high standard and
						velocity throughout.
					</SubRole>
					<SubRole
						who="Imagine Cruising"
						skills={[
							"React",
							"Next.js",
							"Node.js",
							"AWS",
							"Docker",
						]}
					>
						In addition to building Imagine Cruising's greenfield
						franchised web system to deliver a consistent experience
						across their multiple brands, I also rebuilt their
						internal CMS system from the ground up. Making use of
						AWS auto-scaling docker/node instances I provided a
						highly reliable API that both the frontend and backend
						could rely apon.
					</SubRole>
					<SubRole
						who="Mkodo"
						skills={["React", "Redux", "Styled Components", "TDD"]}
					>
						I worked on several projects for Mkodo, including gaming
						webapps for 3rd party clients, and a complex browser
						geolocation SDK to facilitate gambling compliance.
					</SubRole>
					<SubRole
						who="Sharp Gaming"
						skills={[
							"React",
							"Redux",
							"Typescript",
							"Node.js",
							"TDD",
						]}
					>
						I worked as part of a very large team, to deliver Sharp
						Gaming's next generation web platform. I took the
						initiative to spearhead a complete overhaul of their
						testing practices; and was trusted to audit & unify
						their whole-site styling aproach.
					</SubRole>
					<SubRole who="Workshare" skills={["React", "Redux", "TDD"]}>
						I worked on their greenfield B2B web portal, working
						closely with designers and stakeholders. My biggest
						achievement was building a bespoke state-management
						solution over redux, to simplify the team's access and
						management of their data.
					</SubRole>
				</ul>
			</Role>
			<Role
				role="Co-founder/Lead Developer"
				who={["Codogo"]}
				start={new Date("2016-01")}
				end={new Date("2018-02")}
			>
				<div className="pb-2">
					The core focus of my work was producing "Codogo Write", a
					modern writing web app with a focus on ease-of-use and
					polished user experience. We were invited to pitch with Y
					Combinator in California on the strength of the MVP I
					developed. To support development of this product, I
					produced complex web and native apps and websites for over
					20 clients, across a breadth of fields (including chat apps,
					social networks, and data-vis) both brown-field and
					green-field in React and React Native
				</div>
				<div>
					While at Codogo, we were early adopters of <b>GraphQL</b>,
					<b>Typescript</b>, <b>Styled Components</b>,{" "}
					<b>React TDD</b>, <b>AWS Lambda Serverless</b>, and{" "}
					<b>React Native</b>; which I have continued to use in
					smaller personal projects to this day. I made sure that our
					team was always using the technology most suited to any
					given problem, and gained extensive skills in evaluating and
					implementing new programming paradigms.
				</div>
			</Role>
		</Section>
	);
}
