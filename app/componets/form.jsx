"use client";

import { useRef } from "react";

export default function FormDownloadFile({ setFile, isDisabled }) {
	const fileInput = useRef(null);

	const handleFileChange = () => {
		setFile(fileInput.current.files[0]);
	};

	return (
		<div className="flex flex-col gap-3">
			<label className="text-center uppercase text">Download File</label>
			<input
				type="file"
				onChange={handleFileChange}
				ref={fileInput}
				disabled={isDisabled}
			/>
		</div>
	);
}
