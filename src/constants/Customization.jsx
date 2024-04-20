import { createContext, useContext, useState } from "react";

const chairColors = [
	{
		color: "#683434",
		name: "brown",
	},
	{
		color: "#1a5e1a",
		name: "green",
	},
	{
		color: "#659994",
		name: "blue",
	},
	{
		color: "#896599",
		name: "mauve",
	},
	{
		color: "#ffa500",
		name: "orange",
	},
	{
		color: "#59555b",
		name: "grey",
	},
	{
		color: "#222222",
		name: "black",
	},
	{
		color: "#ececec",
		name: "white",
	},
];

const cushionColors = [
	{
		color: "#683434",
		name: "brown",
	},
	{
		color: "#1a5e1a",
		name: "green",
	},
	{
		color: "#659994",
		name: "blue",
	},
	{
		color: "#896599",
		name: "mauve",
	},
	{
		color: "#ffa500",
		name: "orange",
	},
	{
		color: "#59555b",
		name: "grey",
	},
	{
		color: "#222222",
		name: "black",
	},
	{
		color: "#ececec",
		name: "white",
	},
];

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
	const [rawValue, setRawValue] = useState("");
	const [objectCode, setObjectCode] = useState("11111");

	// location list
	// DR - Dorwaing room
	// KT - Kitchen
	// MB - Master Bedroom
	// LR - Living room
	// SR- Study room
	// HW - Hallway
	// OD - Outdoors
	// WM - Washroom
	// BR - Bathroom
	// SP - Swimming pool
	// GR - Garden

	const partToMeshMapping = {
		L: parseInt(objectCode.charAt(0)), // location
		1: parseInt(objectCode.charAt(1)), // table
		2: parseInt(objectCode.charAt(2)), // rug
		3: parseInt(objectCode.charAt(3)), 
		4: parseInt(objectCode.charAt(4)),
		5: parseInt(objectCode.charAt(5)),
		6: parseInt(objectCode.charAt(6)),
	};

	// console.log(partToMeshMapping, "!!! partToMeshMapping");
	return (
		<CustomizationContext.Provider
			value={{
				rawValue,
				setRawValue,
				objectCode,
				setObjectCode,
				partToMeshMapping,
			}}
		>
			{props.children}
		</CustomizationContext.Provider>
	);
};

export const useCustomization = () => {
	const context = useContext(CustomizationContext);
	return context;
};
