import Button from "./components/Button"; // Import your custom Button component
import { EnviroCanvas } from "./components/canvas/EnviroCanvas";
import React, { useState } from "react";

function App() {
	const [arg, setArg] = useState(1); // State to store the argument

	const handlePrevBtn = () => {
		/* If the value of arg is 0, then return */
		if (arg === 1) {
			return;
		}
		setArg(arg - 1); // Decrease the value of arg by 1
	};
	const handleNextBtn = () => {
		/* If the value of arg is 5, then return */
		if (arg === 3) {
			return;
		}
		setArg(arg + 1); // Increase the value of arg by 1
	};

	return (
		<div className="relative">
			<div className=" fixed flex flex-col h-full w-full outline">
				<EnviroCanvas arg={arg} />

				<div className="absolute bottom-0">
					<div className="flex items-center justify-center w-screen">
						<Button
							onClick={handlePrevBtn}
							size="lg"
							variant="primary"
						>
							Prev.
						</Button>
						<Button size="ls" variant="primary">
							{arg}
						</Button>
						<Button
							onClick={handleNextBtn}
							size="lg"
							variant="primary"
						>
							Next
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
