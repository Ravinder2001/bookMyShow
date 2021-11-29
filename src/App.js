/** @format */

import Login from "./components/Login";
import Navbar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Login />}></Route>
				<Route path='/dash' element={<Dashboard />}></Route>
			</Routes>
		</div>
	);
}

export default App;
