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
		  if ((!max || newValue <= max) && (!min || newValue >= min)) {
			setValue(newValue);
		  } else if (loop) {
			setValue(min); // Reset to min value if looping is enabled and max value is reached
		  } else {
			setValue(max); // Set to max value if looping is disabled and max value is reached
		  }
		} else if (type === "text") {
		  let newIndex = choice + 1;
		  if (newIndex < items.length) {
			setValue(items[newIndex]);
			setChoice(newIndex);
		  } else if (loop) {
			setValue(items[0]); // Wrap around to the first item if looping is enabled and end of the list is reached
			setChoice(0);
		  }
		}
		handleObjectCodeUpdateAtIndex(targetIndex, choice, objectCode);
	  };
	  
	  const handleDecrement = () => {
			if (type === "number") {
				let newValue = parseInt(value) - parseInt(step);
				if ((!min || newValue >= min) && (!max || newValue <= max)) {
					setValue(newValue);
				} else if (loop) {
					setValue(max); // Reset to max value if looping is enabled and min value is reached
				} else {
					setValue(min); // Set to min value if looping is disabled and min value is reached
				}
			} else if (type === "text") {
				let newIndex = choice - 1;
				if (newIndex >= 0) {
					setValue(items[newIndex]);
					setChoice(newIndex);
				} else if (loop) {
					setValue(items[items.length - 1]); // Wrap around to the last item if looping is enabled and beginning of the list is reached
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

		// console.log("targetIndex: " + tIndex + " choice: " + choice + " objectCode: " + objectCode);
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
			case 5:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + (choice + 1) + objectCode.slice(6));
				break;
			case 6:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + (choice + 1) + objectCode.slice(7));
				break;
			case 7:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + (choice + 1) + objectCode.slice(8));
				break;
			case 8:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + (choice + 1) + objectCode.slice(9));
				break;
			case 9:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + objectCode.charAt(8) + (choice + 1) + objectCode.slice(10));
				break;
			case 10:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + objectCode.charAt(8) + objectCode.charAt(9) + (choice + 1) + objectCode.slice(11));
				break;
			case 11:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + objectCode.charAt(8) + objectCode.charAt(9) + objectCode.charAt(10) + (choice + 1) + objectCode.slice(12));
				break;
			case 12:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + objectCode.charAt(8) + objectCode.charAt(9) + objectCode.charAt(10) + objectCode.charAt(11) + (choice + 1) + objectCode.slice(13));
				break;
			case 13:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + objectCode.charAt(8) + objectCode.charAt(9) + objectCode.charAt(10) + objectCode.charAt(11) + objectCode.charAt(12) + (choice + 1) + objectCode.slice(14));
				break;
			case 14:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + objectCode.charAt(8) + objectCode.charAt(9) + objectCode.charAt(10) + objectCode.charAt(11) + objectCode.charAt(12) + objectCode.charAt(13) + (choice + 1) + objectCode.slice(15));
				break;
			case 15:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + objectCode.charAt(8) + objectCode.charAt(9) + objectCode.charAt(10) + objectCode.charAt(11) + objectCode.charAt(12) + objectCode.charAt(13) + objectCode.charAt(14) + (choice + 1) + objectCode.slice(16));
				break;
			case 16:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + objectCode.charAt(8) + objectCode.charAt(9) + objectCode.charAt(10) + objectCode.charAt(11) + objectCode.charAt(12) + objectCode.charAt(13) + objectCode.charAt(14) + objectCode.charAt(15) + (choice + 1) + objectCode.slice(17));
				break;
			case 17:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + objectCode.charAt(8) + objectCode.charAt(9) + objectCode.charAt(10) + objectCode.charAt(11) + objectCode.charAt(12) + objectCode.charAt(13) + objectCode.charAt(14) + objectCode.charAt(15) + objectCode.charAt(16) + (choice + 1) + objectCode.slice(18));
				break;
			case 18:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + objectCode.charAt(8) + objectCode.charAt(9) + objectCode.charAt(10) + objectCode.charAt(11) + objectCode.charAt(12) + objectCode.charAt(13) + objectCode.charAt(14) + objectCode.charAt(15) + objectCode.charAt(16) + objectCode.charAt(17) + (choice + 1) + objectCode.slice(19));
				break;
			case 19:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + objectCode.charAt(8) + objectCode.charAt(9) + objectCode.charAt(10) + objectCode.charAt(11) + objectCode.charAt(12) + objectCode.charAt(13) + objectCode.charAt(14) + objectCode.charAt(15) + objectCode.charAt(16) + objectCode.charAt(17) + objectCode.charAt(18) + (choice + 1) + objectCode.slice(20));
				break;
			case 20:
				setObjectCode(objectCode.charAt(0) + objectCode.charAt(1) + objectCode.charAt(2) + objectCode.charAt(3) + objectCode.charAt(4) + objectCode.charAt(5) + objectCode.charAt(6) + objectCode.charAt(7) + objectCode.charAt(8) + objectCode.charAt(9) + objectCode.charAt(10) + objectCode.charAt(11) + objectCode.charAt(12) + objectCode.charAt(13) + objectCode.charAt(14) + objectCode.charAt(15) + objectCode.charAt(16) + objectCode.charAt(17) + objectCode.charAt(18) + objectCode.charAt(19) + (choice + 1) + objectCode.slice(21));
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
