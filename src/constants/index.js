const annotations = [
	{ position: [16, 2.5, -15], focusLocation: "Drawing Room", tIndex: 2, },
	{ position: [17, 2, -21], focusLocation: "Dinning Table", tIndex: 4 },
	{ position: [19, 3, -20], focusLocation: "Kitchen", tIndex: 6 },
	{ position: [29, 3.5, -15], focusLocation: "Guest Room", tIndex: 7 },
	{ position: [27, 3.5, -7], focusLocation: "Swimming Pool", tIndex: 1 },
	{ position: [24, 5, -15], focusLocation: "Study Room", tIndex: 8 },
	{ position: [16, 7, -11], focusLocation: "Master Bed Room", tIndex: 9 },
];

const interactionBtns = [
	{ target: "drSofa", offset: [16.9, 2, -16.7], name: "Sofa" },
	{ target: "drSelf", offset: [15.2, 2.301, -17.85], name: "Cabinet" },
	{ target: "drTable", offset: [16.873, 1.7, -15.301], name: "Table" },
	{ target: "drRug", offset: [17.5, 1.472, -16], name: "Rug" },
	{ target: "dnClock", offset: [15.9, 3.295, -21.151], name: "Clock" },
	{ target: "dnLamp", offset: [16.928, 3.619, -21.346], name: "Lamp" },
	// { target: "dnTable", offset: [16.928, 2.5, -20.8], name: "Table" },
	{ target: "ktTap", offset: [20, 2.672, -19.84], name: "Tap" },
	{ target: "ktLamp", offset: [20.111, 3.556, -19.587], name: "Lamp" },
	// { target: "ktTable", offset: [19.5, 2.672, -19.84], name: "Table" },
	{ target: "ktChair", offset: [20.138, 2.5, -18.28], name: "" },
];

const subMenuItems = [
	{
		target: "drSofa",
		tIndex: 0,
		updateObjectCodeValues: [
			{ value: "Classic", targetValue: 0 },
			{ value: "Modern", targetValue: 1 },
		],
	},
	{
		target: "drTable",
		tIndex: 1,
		updateObjectCodeValues: [
			{ value: "Round", targetValue: 0 },
			{ value: "Classic", targetValue: 1 },
		],
	},
	{
		target: "drSelf",
		tIndex: 2,
		updateObjectCodeValues: [
			{ value: "dark", targetValue: 0 },
			{ value: "light", targetValue: 1 },
		],
	},
	{
		target: "ktTap",
		tIndex: 3,
		updateObjectCodeValues: [
			{ value: "1", targetValue: 0 },
			{ value: "2", targetValue: 1 },
			{ value: "3", targetValue: 2 },
			{ value: "4", targetValue: 3 },
			{ value: "5", targetValue: 4 },
			{ value: "6", targetValue: 5 },
			{ value: "7", targetValue: 6 },
		],
	},
	{
		target: "ktTable",
		tIndex: 4,
		updateObjectCodeValues: [
			{ value: "dark", targetValue: 0 },
			{ value: "Light", targetValue: 1 },
		],
	},
	{
		target: "ktLamp",
		tIndex: 5,
		updateObjectCodeValues: [
			{ value: "Classic", targetValue: 0 },
			{ value: "Modern", targetValue: 1 },
			{ value: "minimalist", targetValue: 2 },
		],
	},
	{
		target: "ktChair",
		tIndex: 6,
		updateObjectCodeValues: [
			{ value: "Classic", targetValue: 0 },
			{ value: "Modern", targetValue: 1 },
		],
	},
	{
		target: "dnTableTexture",
		tIndex: 7,
		updateObjectCodeValues: [
			{ value: "Classic", targetValue: 0 },
			{ value: "Modern", targetValue: 1 },
		],
	},
	{
		target: "dnTable",
		tIndex: 7,
		updateObjectCodeValues: [
			{ value: "dark", targetValue: 0 },
			{ value: "light", targetValue: 1 },
		],
	},
	{
		target: "dnLamp",
		tIndex: 9,
		updateObjectCodeValues: [
			{ value: "Classic", targetValue: 0 },
			{ value: "Modern", targetValue: 1 },
			{ value: "minimalist", targetValue: 4 },
			{ value: "Desgin", targetValue: 2 },
			{ value: "simple", targetValue: 3 },
		],
	},
	{
		target: "dnChair",
		tIndex: 10,
		updateObjectCodeValues: [
			{ value: "Classic", targetValue: 0 },
			{ value: "Modern", targetValue: 1 },
		],
	},
	{
		target: "dnClock",
		tIndex: 11,
		updateObjectCodeValues: [
			{ value: "enable", targetValue: 0 },
			{ value: "disable", targetValue: 1 },
		],
	},
	{
		target: "drRug",
		tIndex: 27,
		updateObjectCodeValues: [
			{ value: "light", targetValue: 0 },
			{ value: "dark", targetValue: 1 },
		],
	},
];

export { annotations, interactionBtns, subMenuItems };
