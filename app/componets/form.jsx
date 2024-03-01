"use client";

import { useRef, useState } from "react";
import calculationValues from "../helpers/calculationValues";

export default function FormDownloadFile() {
	const [isDisabled, setIsDisabled] = useState(false);

	const fileInput = useRef(null);

	const handleFileChange = () => {
		const file = fileInput.current.files[0];
		const textType = /text.*/;

		if (file.type.match(textType)) {
			const reader = new FileReader();

			reader.readAsText(file);
			reader.onloadstart = () => setIsDisabled(true);

			reader.onload = () => {
				const numberArr = reader.result.split("\n").map((el) => Number(el));
				calculationValues(numberArr);
			};
			reader.onloadend = () => {
				setIsDisabled(false);
			};

			// 	const numberArr = reader.result.split("\n").map((el) => Number(el));
			// 	const sortArr = [...numberArr].sort((a, b) => a - b);
			// 	const minValue = sortArr[0];
			// 	const maxValue = sortArr[sortArr.length - 1];
			// 	const averageValue = findAverageValue(sortArr);
			// 	const medianaValue = findMediana(sortArr);

			// 	const maxIncreaseыSubsequences = findIncreaseSubsequence(numberArr, "+");
			// 	const maxDecreasesSubsequences = findIncreaseSubsequence(numberArr, "-");

			// 	console.log("minValue", minValue);
			// 	console.log("maxValue", maxValue);
			// 	console.log("medianaValue", medianaValue);
			// 	console.log("averageValue", averageValue);

			// 	console.log("maxIncreaseыSubsequences", maxIncreaseыSubsequences);
			// 	console.log("maxDecreasesSubsequences", maxDecreasesSubsequences);
			//     setIsDisabled(false)
			// };
		} else {
			fileDisplayArea.innerText = "File not supported!";
		}
	};

	return (
		<div className="flex flex-col gap-3">
			<label className=" text-center">Download File</label>
			<input
				type="file"
				onChange={handleFileChange}
				ref={fileInput}
				disabled={isDisabled}
			/>
		</div>
	);
}
