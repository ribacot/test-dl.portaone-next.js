export function findSubsequence(arr, value) {
	let resultArr = [];
	let cacheArr = [];
	let condition = null;

	for (let i = 1; i < arr.length; i += 1) {
		switch (value) {
			case "+":
				condition = arr[i] - arr[i - 1] <= 0;
				break;
			case "-":
				condition = arr[i] - arr[i - 1] >= 0;
				break;
			default:
				console.log("no value");
				return;
		}

		if (condition) {
			if (cacheArr.length) {
				resultArr.push(cacheArr);
			}
			cacheArr = [];
			continue;
		}

		if (!cacheArr.length) {
			cacheArr.push(arr[i - 1]);
		}
		cacheArr.push(arr[i]);
	}
	resultArr.push(cacheArr);

	const reasultArrSort = resultArr.sort((a, b) => a.length - b.length);
	return reasultArrSort.filter(
		(el) => el.length === reasultArrSort[reasultArrSort.length - 1].length
	);
}
