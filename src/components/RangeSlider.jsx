import React, { useState } from "react";
import { useCustomization } from "../constants/Customization";

const RangeSlider = ({ min, max, step, defaultValue }) => {
	const [value, setValue] = useState(defaultValue);
	const { object, setObject } = useCustomization();
	// set value to ObjectCode

	return (
		<div className="col-md-3 w-auto ">
			<div className="form-group form-spinner ">
				{/* <label htmlFor={`spinner-${ty</div>pe}`}>Spinner {type}</label> */}
				<div className="spinner-control flex ">
					<input
						type="range"
						className="spinner w-full"
						value={value}
						min={min}
						max={max}
						step={step}
						onChange={(e) =>
							setValue(e.target.value) && "" + e.target.value
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default RangeSlider;
