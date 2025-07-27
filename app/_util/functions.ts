type ClassArg = string | false | undefined;

export function classNames(classes: ClassArg[]) {
	const filteredClasses = classes
		.filter((c: ClassArg) => typeof c === "string")
		.join(" ");
	return filteredClasses;
}
