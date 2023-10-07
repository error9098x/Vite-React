import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import './App.css';
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
			</Route>
		</Routes>
	);
}

export default App;
