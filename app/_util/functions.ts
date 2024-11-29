export function classNames(classes: (string | false)[]) {
	const filteredClasses = classes
		.filter((c: string | false) => c !== false)
		.join(" ");
	return filteredClasses;
}
