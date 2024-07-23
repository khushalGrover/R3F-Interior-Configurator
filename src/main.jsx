import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GetPlaces } from "./components/apiSynManager/GetPlaces";
import { GetObject } from "./components/apiSynManager/GetObject";
import { GetMaterial } from "./components/apiSynManager/GetMaterial";
import { CustomizationProvider } from "./constants/Customization";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CustomizationProvider>
			<App />
			{/* <GetPlaces />
			<GetMaterial /> */}
			
		</CustomizationProvider>
	</React.StrictMode>
);
