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
	// {
	// 	color: "#683434",
	// 	name: "brown",
	// },
	// {
	// 	color: "#1a5e1a",
	// 	name: "green",
	// },
	// {
	// 	color: "#659994",
	// 	name: "blue",
	// },
	// {
	// 	color: "#896599",
	// 	name: "mauve",
	// },
	// {
	// 	color: "#ffa500",
	// 	name: "orange",
	// },
	// {
	// 	color: "#59555b",
	// 	name: "grey",
	// },
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
	const [targetPos, setTargetPos] = useState([20,5,-15])
	const [rawValue, setRawValue] = useState("");
	const [rawValueTap, setRawValueTap] = useState("");
	const [objectCode, setObjectCode] = useState("1111111111111111111111111");
	const [loc, setLoc] = useState(1);
	const [tappp, setTap] = useState('1');
	const [sofaColor, setSofaColor] = useState(sofaColors[0]);
	const [centerTable, setCenterTable] = useState("1");
	const [rug, setRug] = useState("black");
	const [rugColor, setRugColor] = useState(rugColors[0]);
	const [sofa, setSofa] = useState("1");
	const [cushionColor, setCushionColor] = useState(cushionColors[0]);
	const [lamp, setLamp] = useState("1");
	const [lampColor, setLampColor] = useState("#ffffff");
	const [painting, setPainting] = useState("1");
	const [foucsObj, serFocusObj] = useState("dTable");
	


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
		dSofa: parseInt(objectCode.charAt(0)), // Dnsofa
		dTable: parseInt(objectCode.charAt(1)), // Dntable
		dSelf: parseInt(objectCode.charAt(2)), // DnSelf
		ktTaps: parseInt(objectCode.charAt(3)), // Kttaps
		ktTable: parseInt(objectCode.charAt(4)), // KtTable
		ktLamp: parseInt(objectCode.charAt(5)), // KtLamp
		ktChair: parseInt(objectCode.charAt(6)), // KtChairs
		dnTableTexture: parseInt(objectCode.charAt(7)), // pattern
		dnTable: parseInt(objectCode.charAt(8)),
		dnLamp: parseInt(objectCode.charAt(9)), // lamp
		dnChair: parseInt(objectCode.charAt(10)),
		dnClock: parseInt(objectCode.charAt(11)), //clock 
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
		dRug: parseInt(objectCode.charAt(27)),
		// ktTap: parseInt(objectCode.charAt(27)),	

	};

	// console.log(codeOBJ, "!!! codeOBJ");
	return (
		<CustomizationContext.Provider
			value={{
				rawValue,
				setRawValue,
				rawValueTap,
				setRawValueTap,
				objectCode,
				setObjectCode,
				loc,
				setLoc,
				foucsObj,
				serFocusObj,
				tappp,
				setTap,
				sofaColor,
				setSofaColor,
				centerTable,
				setCenterTable,
				rug,
				setRug,
				rugColor,
				setRugColor,
				sofa,
				setSofa,
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
				targetPos,
				setTargetPos,
				
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
