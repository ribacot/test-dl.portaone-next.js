import { findAverageValue } from "./findAverageValue";
import { findSubsequence } from "./findSubsequence";
import { findMediana } from "./findMediana";

export default function calculationValues(numberArr) {
	const sortArr = [...numberArr].sort((a, b) => a - b);
	const minValue = sortArr[0];
	const maxValue = sortArr[sortArr.length - 1];
	const averageValue = findAverageValue(sortArr);
	const medianaValue = findMediana(sortArr);

	const maxIncreaseыSubsequences = findSubsequence(numberArr, "+");
	const maxDecreasesSubsequences = findSubsequence(numberArr, "-");

	return [
		{ title: "minValue", value: minValue },
		{ title: "maxValue", value: maxValue },
		{ title: "averageValue", value: averageValue },
		{ title: "medianaValue", value: medianaValue },
		{ title: "maxIncreaseыSubsequences", value: maxIncreaseыSubsequences },
		{ title: "maxDecreasesSubsequences", value: maxDecreasesSubsequences },
	];
}
