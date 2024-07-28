import Button from "./components/Button";
import { EnviroCanvas } from "./components/canvas/EnviroCanvas";
import { useCustomization } from "./constants/Customization";
import "../src/App.css";
import React, { useState } from "react";
function App() {
	const { loc, setLoc } = useCustomization();
	const [ data, setData] = useState([]);
	const [isClosed, setIsClosed] = useState(true);

	const handlePrevBtn = () => {
		if (loc === 1) {
			return;
		}
		setLoc((prevLoc) => prevLoc - 1);
	};
	const handleNextBtn = () => {
		if (loc === 9) {
			return;
		}
		setLoc((prevLoc) => prevLoc + 1);
	};

	const handleToggleClick = () => {
		setIsClosed(!isClosed);
	};

	function StarIcon(props) {
		return (
			<svg
				{...props}
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
			</svg>
		);
	}

	const Overlay = () => {
		if (loc === 1) {
			return (
				<div className="configurator">
					<div className="configurator__section">
						<div className="configurator__section__title">
							<h1>{loc}. Welcome</h1>
						</div>
						<div className="configurator__section__values">
							<div className="item__label item--intro">
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Tempora rerum natus facilis
								necessitatibus? Sed, earum.
							</div>
						</div>
						<div
							className={"item item--active"}
							onClick={() => setLoc(2)}
						>
							<div className="item__label outline px-2">
								Lets Start
							</div>
						</div>
					</div>
				</div>
			);
		}
	};

	return (
		<>
			<div className="flex flex-col md:flex-row h-dvh w-full items-center justify-center relative bg-[#191920]">
				<div
					className={`${
						isClosed
							? "w-full h-full"
							: "w-full h-1/2 md:w-1/2 md:h-full"
					} relative`}
				>
					<EnviroCanvas />
					<Overlay className="configurator" />
					<div className="absolute md:right-0 md:bottom-9 right-9 bottom-0 z-50">
						<Button
							size="lg"
							variant="other"
							onClick={handleToggleClick}
						>
							{isClosed ? "Show Details" : "Hide Details"}
						</Button>
					</div>
				</div>
				
				{isClosed ? null : (
					<div className="grid gap-4 px-6 text-slate-400">

						<h1 className="font-bold text-2xl sm:text-3xl">
							Lorem, ipsum.
						</h1>
						<div className="text-1xl sm:text-2">
							Price $44.99 | In Stock
						</div>
						
						
						<div className="flex items-center gap-4">
							<div className="flex items-center gap-0.5">
								<StarIcon className="w-5 h-5 fill-white" />
								<StarIcon className="w-5 h-5 fill-white" />
								<StarIcon className="w-5 h-5 fill-white" />
								<StarIcon className="w-5 h-5 stroke-muted-foreground" />
								<StarIcon className="w-5 h-5 stroke-muted-foreground" />
								(143 reviews)
							</div>
						</div>

						<div className="text-1xl sm:text-2">
							by Nishant
						</div>

						<div className="grid gap-4 text-sm leading-loose">
							
							<p>this is a desciption of object. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ratione enim distinctio exercitationem facilis iure quibusdam nam! Ipsum perferendis necessitatibus amet vero eaque? Quaerat asperiores atque fugiat illo nam corporis qu </p>
						</div>

					</div>
				)}



			</div>
		</>
	);
}

export default App;
