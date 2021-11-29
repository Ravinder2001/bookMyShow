/** @format */
import "./navBar.css";
import { Routes, Route, Link } from "react-router-dom";
function Navbar() {
	return (
		<div>
			<div id='nav'>
				<div>
					<img
						src='https://logodix.com/logo/2010904.jpg'
						alt=''
						width='175px'
						style={{ float: "left" }}
					/>
					<div style={{ float: "left", marginTop: "40px", marginLeft: "20px" }}>
						<input type='text' placeholder='Search Movie' id='input' />
					</div>
					<Link to='list'>
						<div id='boo'>Booked Movies</div>
					</Link>

					<div id='city'>City</div>
					<button id='login'>Login</button>
				</div>
			</div>
		</div>
	);
}
export default Navbar;
