export function findMediana(arr) {
	const mid = Math.floor(arr.length / 2);
	if (arr.length % 2) {
		return arr[mid];
	} else {
		return (arr[mid - 1] + arr[mid]) / 2;
	}
}
