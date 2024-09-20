
const annotations = [
	{
		position: [16.483, 2.5, -15.337],
		focusLocation: "Drawing Room",
		tIndex: 2,
	},
	{ position: [17, 2.5, -21], focusLocation: "Dinning Table", tIndex: 4 },
	{ position: [19, 3, -20], focusLocation: "Kitchen", tIndex: 6 },
	{ position: [29, 3.5, -15], focusLocation: "Guest Room", tIndex: 7 },
	{ position: [27, 3.5, -7], focusLocation: "Swimming Pool", tIndex: 1 },
	{ position: [24, 5, -15], focusLocation: "Study Room", tIndex: 8 },
	{ position: [16, 7, -11], focusLocation: "Master Bed Room", tIndex: 9 },
];

const interactionBtns = [
	{ target: "dSofa", offset: [16.9, 2, -16.7], name: "Sofa", objectId: "66eda54d86e886d461b050f0" },
	{ target: "dSelf", offset: [15.2, 2.301, -17.85], name: "Cabinet" , objectId: "66eda57086e886d461b0511b" },
	{ target: "dTable", offset: [16.873, 1.7, -15.301], name: "Table", objectId: "66eda53986e886d461b050d0"  },
	{ target: "dRug", offset: [17.5, 1.472, -16], name: "Rug", objectId: "66eda55a86e886d461b05104"  },
	{ target: "dnClock", offset: [15.9, 3.295, -21.151], name: "Clock", objectId: "66eda88586e886d461b05313"  },
	{ target: "dnLamp", offset: [16.928, 3.619, -21.346], name: "Lamp", objectId: "66edb0fb86e886d461b05a01"  },
	{ target: "dnTable", offset: [16.928, 2.5, -20.8], name: "Table", objectId: "66eda8ba86e886d461b05364"  },
	{ target: "ktTap", offset: [20, 2.672, -19.84], name: "Tap", objectId: "66edaa7c86e886d461b0537c"  },
	{ target: "ktLamp", offset: [20.111, 3.556, -19.587], name: "Lamp", objectId: "66edaa9786e886d461b05393"  },
	// { target: "ktTable", offset: [19.5, 2.672, -19.84], name: "Table", objectId: "66a1303166f6f9795fba887c"  },
	{ target: "ktChair", offset: [20.138, 2.5, -18.28], name: "Chair", objectId: "66edaac186e886d461b053bd"  },
	// { target: "hwTable", offset: [30, 2, -16], name: "Table", objectId: "66a145a60315ecf0580e6e3e"  },
];

const subMenuItems = [
	{
		target: "dSofa",
		tIndex: 0,
		// todo: here replace the procduct id, name
		updateObjectCodeValues: [
			{ value: "Classic", targetValue: 0 },
			{ value: "Modern", targetValue: 1 },
		],
	},
	{
		target: "dTable",
		tIndex: 1,
		updateObjectCodeValues: [
			{ value: "Round", targetValue: 0 },
			{ value: "Metal", targetValue: 1 },
		],
	},
	{
		target: "dSelf",
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
		target: "dRug",
		tIndex: 27,
		updateObjectCodeValues: [
			{ value: "light", targetValue: 0 },
			{ value: "dark", targetValue: 1 },
		],
	},
	{
		target: "hwTable",
		tIndex: 12,
		updateObjectCodeValues: [
			{ value: "light", targetValue: 0 },
			{ value: "dark", targetValue: 1 },
		],
	},
];

export { annotations, interactionBtns, subMenuItems };