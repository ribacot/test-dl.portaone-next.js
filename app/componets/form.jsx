"use client";

import { useRef } from "react";

export default function FormDownloadFile({ setFile, isDisabled }) {
	const fileInput = useRef(null);

	const handleFileChange = (e) => {
		e.preventDefault();
		setFile(fileInput.current.files[0]);
	};

	return (
		<form className="flex flex-col gap-3">
			<label className="text-center uppercase text-lg font-black">Download File</label>
			<input type="file" ref={fileInput} disabled={isDisabled} />
			<button
				type="submit"
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline "
				onClick={handleFileChange}
			>
				Сalculation
			</button>
		</form>
	);
}
