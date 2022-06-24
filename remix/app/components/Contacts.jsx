import Section from "./Section";

function Detail({ label, children }) {
	return (
		<div>
			{label}: <span className="font-bold">{children}</span>
		</div>
	);
}

export default function Contacts() {
	return (
		<Section title="Contact Details" right>
			<Detail label="Email">contact@freddieridell.com</Detail>
			<Detail label="Phone">+44 (0) 7720 510 951</Detail>
			<Detail label="Github">FreddieRidell</Detail>
		</Section>
	);
}
