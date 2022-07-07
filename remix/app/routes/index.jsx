import Skills from "../components/Skills";
import Quals from "../components/Quals";
import Experience from "../components/Experience";
import Contacts from "../components/Contacts";

export default function Index() {
	return (
		<div>
			<h1 className="text-3xl">Freddie Ridell</h1>
			<div className="flex justify-between items-stretch">
				<Skills />
				<div>
					<Contacts />

					<Quals />
				</div>
			</div>
			<Experience />
		</div>
	);
}
