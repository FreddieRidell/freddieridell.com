import Section from "./Section";

function Skill({ children }) {
	return <li>{children}</li>;
}

export default function Skills() {
	return (
		<Section title="Skills">
			<ul className="list-disc ml-4">
				<Skill>Javascript (ES6+), Typescript </Skill>
				<Skill>React (Hooks & Suspense), React Native, D3.js</Skill>
				<Skill>Next.js, Gatsby, Expo.io</Skill>
				<Skill>Node, Express, REST, GraphQL, AWS</Skill>
				<Skill>React Testing Library, Jest, TDD, CI/CD</Skill>
				<Skill>Juggling, Knitting, Crochet</Skill>
				<Skill>Standup & Sketch Comedy</Skill>
			</ul>
		</Section>
	);
}
