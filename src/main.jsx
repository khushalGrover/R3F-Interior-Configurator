import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DynamicImport } from "./components/canvas/BuilingsJsx/DynamicImport";
import { CustomizationProvider } from "./constants/Customization";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CustomizationProvider>
			<App />
			<DynamicImport />
		</CustomizationProvider>
	</React.StrictMode>
);
