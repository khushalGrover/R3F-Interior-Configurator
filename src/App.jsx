import Button from "./components/Button";
import { EnviroCanvas } from "./components/canvas/EnviroCanvas";
import { useCustomization } from "./constants/Customization";
import "../src/App.css";
import React, { useState } from "react";
function App() {
	const { loc, setLoc, objectProduct, activeItem } = useCustomization();
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
							: "w-full h-1/2 flex-none md:w-1/2 md:h-full"
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
					<section className="text-gray-100 grow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6">
						{objectProduct.docs.map((item, index) => (
							<div className="bg-background rounded-lg shadow-lg overflow-hidden group outline p-3">
								<a className="block relative" href="#">
									<img
										src={objectProduct.docs[0].product_id.url}
										alt="Product Image"
										width="100"
										height="100"
										className="w-full h-60 object-cover group-hover:opacity-80 transition-opacity"
										style={{
											aspectRatio: "100 / 100",
											objectFit: "content",
										}} // Corrected this line
									/>
								</a>
								<div className="p-4">
									<h3 className="text-lg font-semibold text-primary-foreground group-hover:text-primary transition-colors">
										{console.log(
											"Object Product",
											objectProduct.docs[0].product_id.url
										)}
										{activeItem.name +
											" - " +
											objectProduct.docs[
												index
											].type.slice(2, 10)}
									</h3>
									{/* <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
									{objectProduct.docs[0].product_id.description}
								</p> */}
									<div className="flex items-center justify-between">
										<span className="text-lg font-semibold text-primary-foreground">
											{
												objectProduct.docs[index]
													.product_id.price
											}
										</span>
										<span className="text-sm text-muted-foreground">
											{"By " +
												objectProduct.docs[index]
													.product_id.name}
										</span>
									</div>
									<button className="outline inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 w-full mt-4">
										Buy Now
									</button>
								</div>
							</div>
						))}
					</section>
				)}
			</div>
		</>
	);
}

export default App;
