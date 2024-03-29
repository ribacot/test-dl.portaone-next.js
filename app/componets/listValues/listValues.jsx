export default function ListValues({ valuesArr }) {
	return (
		<ul className="flex flex-col gap-4">
			{valuesArr?.map(({ value, title }, idx) => (
				<li key={idx}>
					{Array.isArray(value) ? (
						<div>
							<b>{title}</b>
							<ul>
								{value.map((el, idx) => (
									<li key={idx}>
										{el.join(" / ")} <br />
										<span className=" font-semibold">Length :{el.length}</span>
									</li>
								))}
							</ul>
						</div>
					) : (
						<p>
							<b>{title} :</b>
							{value}
						</p>
					)}
				</li>
			))}
		</ul>
	);
}
