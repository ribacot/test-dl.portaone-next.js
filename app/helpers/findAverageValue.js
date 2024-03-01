export function findAverageValue(arr) {
	return (
		arr.reduce((acc, el) => {
			return acc + el;
		}) / arr.length
	);
}
