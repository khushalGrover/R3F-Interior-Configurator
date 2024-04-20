import React, { useState, use } from "react";
import Button from "./Button";

const Spinner = ({
	targetIndex,
	type,
	items,
	loop,
	step = 1,
	max,
	min,
	objectCode,
	setObjectCode,
	sofa,
	setSofa,
}) => {
	const [value, setValue] = useState(items[0]);
	const [choice, setChoice] = useState(0);

	const handleIncrement = () => {
		if (type === "number") {
			let newValue = parseInt(value) + parseInt(step);
			if (!max || newValue <= max) {
				setValue(newValue);
			} else if (loop) {
				setValue(min);
			} else {
				setValue(max);
			}
		} else if (type === "text") {
			let newIndex = choice + 1;
			if (newIndex < items.length) {
				setValue(items[newIndex]);
				setChoice(newIndex);
			} else if (loop) {
				setValue(items[0]);
				setChoice(0);
			}
		}
		handleObjectCodeUpdateAtIndex(targetIndex, choice, objectCode);
	};

	const handleDecrement = () => {
		if (type === "number") {
			let newValue = parseInt(value) - parseInt(step);
			if (!min || newValue >= min) {
				setValue(newValue);
			} else if (loop) {
				setValue(max);
			} else {
				setValue(min);
			}
		} else if (type === "text") {
			let newIndex = choice - 1;
			if (newIndex >= 0) {
				setValue(items[newIndex]);
				setChoice(newIndex);
			} else if (loop) {
				setValue(items[items.length - 1]);
				setChoice(items.length - 1);
			}
		}
		handleObjectCodeUpdateAtIndex(targetIndex, choice, objectCode);
	};

	// function handleObjectCodeUpdateAtIndex(tIndex, choice, objectCode) {
	// 	const newObjectCode = objectCode.substring(0, tIndex) + (choice + 1) + objectCode.substring(tIndex + 1);
	// 	setObjectCode(newObjectCode);

	// 	setSofa(choice );
	// 	console.log(choice+ " :targetIndex: " + targetIndex);
	// 	console.log("Object Code: " + newObjectCode);
	// }

	function handleObjectCodeUpdateAtIndex(tIndex) {

		console.log("targetIndex: " + tIndex + " choice: " + choice + " objectCode: " + objectCode);
		// in case 3 and case4, choice is incremented by 1 bcz the choice starts from 1 not 0 , bcz none option is not included for legs and seat
        switch (tIndex) {
            case 0: 
                setObjectCode(choice + objectCode.charAt(1) + objectCode.slice(2));
                break;
            case 1:
                setObjectCode(objectCode.charAt(0) + choice + objectCode.slice(2));
                break;
            case 2:
                setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + choice + objectCode.slice(3));
                break;
            case 3:
                setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + (choice + 1) + objectCode.slice(4));
                break;
            case 4:
                setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + (choice + 1));
                break;
            default:
                break;
        
        }
        
	}
	

	return (
		<div className="col-md-3 w-auto ">
			<div className="form-group form-spinner ">
				{/* <label htmlFor={`spinner-${ty</div>pe}`}>Spinner {type}</label> */}
				<div className="spinner-control">
					<Button size="lg" variant="arrow" onClick={handleDecrement}>
						&lt;
					</Button>
					<input
						type={type}
						step={step}
						max={max}
						min={min}
						value={value}
						readOnly
						id={`spinner-${type}`}
						className="spinner"
					/>
					<Button size="lg" variant="arrow" onClick={handleIncrement}>
						&gt;
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Spinner;
