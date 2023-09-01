"use client";
export default function Input({ label, value, options, formik }) {
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
				name={label}
				className="outline-none border rounded-lg px-4 py-2 focus-within:border-blue-500
                transition"
				type="text"
				id={label}
				{...options}
				value={value}
			/>
			{formik && formik?.touched[label] && formik?.errors[label] && (
				<span className="text-[12px] font-light text-red-500">
					{formik?.errors[label]}
				</span>
			)}
		</div>
	);
}
