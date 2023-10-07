import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DestinationPage from "./DestinationPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Layout />}
			>
				<Route
					index
					element={<HomePage />}
				/>
				<Route
					path="/destination"
					element={<DestinationPage />}
				/>
			</Route>
		</Routes>
	);
}

export default App;
