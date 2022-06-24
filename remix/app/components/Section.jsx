import cn from "classnames";

export default function Section({ title, children, right, smol }) {
	return (
		<div className="py-2">
			<h2
				className={cn(
					smol ? "text-xl" : "text-2xl",
					"border-gray-700",
					{
						"border-l-8 pl-2 text-left": !right && !smol,
						"border-r-8 pr-2 text-right": right && !smol,

						"border-l-4 pl-1 text-left": !right && smol,
						"border-r-4 pr-1 text-right": right && smol,
					},
				)}
			>
				{title}
			</h2>
			<div className={cn("py-1", right ? "text-right" : "text-left")}>
				{children}
			</div>
		</div>
	);
}
