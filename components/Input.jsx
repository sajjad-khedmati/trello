"use client";
export default function Input({ label, value, setter }) {
	return (
		<div className="flex flex-col gap-1 group">
			<label
				className="text-slate-700 group-focus-within:text-blue-500 text-sm
                transtion"
				htmlFor={label}
			>
				{label}
			</label>
			<input
				className="outline-none border rounded-lg px-4 py-2 focus-within:border-blue-500
                transition"
				type="text"
				id={label}
				value={value}
				onChange={(e) => setter(e.target.value)}
			/>
		</div>
	);
}
