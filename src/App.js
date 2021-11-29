/** @format */

import Login from "./components/Login";
import Navbar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Details from "./components/Details";
import List from "./components/List";
import Qr from "./components/qr";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Login />}></Route>
				<Route path='/dashboard' element={<Dashboard />}></Route>
				<Route path='/details' element={<Details />}></Route>
				<Route path='/list' element={<List />}></Route>
				<Route path='/qr' element={<Qr />}></Route>
			</Routes>
		</div>
	);
}

export default App;
