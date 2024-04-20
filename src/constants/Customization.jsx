import { createContext, useContext, useState } from "react";

const sofaColors = [
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

const rugColors = [
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
	const [objectCode, setObjectCode] = useState("1111111111111111111111111");
	const [loc, setLoc] = useState("1");
	const [sofa, setSofa] = useState("1");
	const [sofaColor, setSofaColor] = useState(sofaColors[0]);
	const [centerTable, setCenterTable] = useState("1");
	const [rug, setRug] = useState("1");
	const [rugColor, setRugColor] = useState(rugColors[0]);
	const [chair, setChair] = useState("1");
	const [cushionColor, setCushionColor] = useState(cushionColors[0]);
	const [lamp, setLamp] = useState("1");
	const [lampColor, setLampColor] = useState("#ffffff");
	const [painting, setPainting] = useState("1");
	
	// loc list
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

	
	

	const codeOBJ = {
		drSofa: parseInt(objectCode.charAt(0)), // loc
		drRug: parseInt(objectCode.charAt(1)), // table
		drTable: parseInt(objectCode.charAt(2)), // rug
		ktTab: parseInt(objectCode.charAt(3)), 
		ktTableTexture: parseInt(objectCode.charAt(4)),
		ktLamp: parseInt(objectCode.charAt(5)),
		ktChair: parseInt(objectCode.charAt(6)),
		dnTableTexture: parseInt(objectCode.charAt(7)),
		dnTable: parseInt(objectCode.charAt(8)),
		dnLamp: parseInt(objectCode.charAt(9)),
		dnChair: parseInt(objectCode.charAt(10)),
		dnClock: parseInt(objectCode.charAt(11)),
		hwTable: parseInt(objectCode.charAt(12)),
		hwTableTexture: parseInt(objectCode.charAt(13)),
		hwLamp: parseInt(objectCode.charAt(14)),
		hwChair: parseInt(objectCode.charAt(15)),
		hwPainting: parseInt(objectCode.charAt(16)),
		srTable: parseInt(objectCode.charAt(17)),
		srTableTexture: parseInt(objectCode.charAt(18)),
		srLamp: parseInt(objectCode.charAt(19)),
		srChair: parseInt(objectCode.charAt(20)),
		srPainting: parseInt(objectCode.charAt(21)),
		srPainting2: parseInt(objectCode.charAt(22)),
		mbTable: parseInt(objectCode.charAt(23)),
		mbTableTexture: parseInt(objectCode.charAt(24)),
		mbLamp: parseInt(objectCode.charAt(25)),
		mbChair: parseInt(objectCode.charAt(26)),

	};

	console.log(codeOBJ, "!!! codeOBJ");
	return (
		<CustomizationContext.Provider
			value={{
				rawValue,
				setRawValue,
				objectCode,
				setObjectCode,
				loc,
				setLoc,

				sofa,
				setSofa,
				sofaColor,
				setSofaColor,
				centerTable,
				setCenterTable,
				rug,
				setRug,
				rugColor,
				setRugColor,
				chair,
				setChair,
				cushionColor,
				setCushionColor,
				lamp,
				setLamp,
				lampColor,
				setLampColor,
				painting,
				setPainting,

				sofaColors,
				cushionColors,
				rugColors,

				codeOBJ,
				
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
