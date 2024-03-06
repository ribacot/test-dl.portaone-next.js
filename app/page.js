"use client";
import { useEffect, useState } from "react";
import FormDownloadFile from "./componets/form";
import calculationValues from "./helpers/calculationValues";
import ListValues from "./componets/listValues/listValues";

export default function Home() {
	const [isDisabled, setIsDisabled] = useState(false);
	const [isFileTypeText, setIsFileTypeText] = useState(false);
	const [file, setFile] = useState(null);
	const [values, setValues] = useState(null);
	const textType = /text.*/;

	useEffect(() => {
		if (file) {
			if (file.type.match(textType)) {
				const reader = new FileReader();

				reader.readAsText(file);
				reader.onloadstart = () => setIsDisabled(true);

				reader.onload = () => {
					const numberArr = reader.result.split("\n").map((el) => Number(el));
					setValues(calculationValues(numberArr));
				};
				reader.onloadend = () => {
					setIsDisabled(false);
				};
			} else {
				setIsFileTypeText(true);
			}
		}
	}, [file]);
	console.log("values", values);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<FormDownloadFile setFile={setFile} isDisabled={isDisabled} />
			<ListValues valuesArr={values} />
		</main>
	);
}
