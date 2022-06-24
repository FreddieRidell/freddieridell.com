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
					high-quality web apps using modern react. I am comfortable
					working in teams of any size, with the full stack knowledge
					needed to deliver a production app on my own, and the
					soft-skills to contribute to and enable a 20 person team. I
					work hard to ensure I deliver the greatest possible value to
					my client, and have been offered a full time position with
					every client I've worked with.
				</div>
				<div>
					I have also trained junior team members, onboarded incoming
					mid/senior level developers, and driven foundational
					technical changes across codebases. I was trusted to
					investigate and implement the core state-management solution
					for a large scale green-field app, and drove an initiative
					to adopt state-of-the-art unit testing of an otherwise
					untested 200k LOC codebase.
				</div>
			</Role>
			<Role
				role="Co-founder/Lead Developer"
				who={["Codogo"]}
				start={new Date("2016-01")}
				end={new Date("2018-02")}
			>
				The core focus of my work was producing "Codogo Write", a modern
				writing web app with a focus on ease-of-use and polished user
				experience. We were invited to pitch with Y Combinator in
				California on the strength of the MVP I developed. To support
				development of this product, I produced complex web and native
				apps and websites for over 20 clients, across a breadth of
				fields (including chat apps, social networks, and data-vis) both
				brown-field and green-field in React and React Native
			</Role>
		</Section>
	);
}
