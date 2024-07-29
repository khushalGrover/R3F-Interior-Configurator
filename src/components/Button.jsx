// Button.jsx
import React from "react";

const Button = ({ type, children, size, variant, onClick }) => {
	// Determine the Tailwind CSS classes based on size and variant props
	let classes = "py-2 px-4 rounded";
	if (size === "lg") {
		classes += " text-lg";
	}
	if (variant === "outline") {
		classes += " border border-gray-400 text-gray-700";
	}
	if (variant === "other") {
		classes += " bg-[#191920] text-white";
	}
	if (variant === "dropdown") {
		classes = "px-3 py-2 text-white no-underline block";
	}
	if (variant === "arrow") {
		classes = "border border-gray-600 text-white px-1 rounded-md";
	}

	return (
		<>
			<button className={classes} onClick={onClick}>
				{children}
			</button>
		</>
	);
};

export default Button;
