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

	console.log("minValue", minValue);
	console.log("maxValue", maxValue);
	console.log("medianaValue", medianaValue);
	console.log("averageValue", averageValue);

	console.log("maxIncreaseыSubsequences", maxIncreaseыSubsequences);
	console.log("maxDecreasesSubsequences", maxDecreasesSubsequences);
}
