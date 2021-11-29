/** @format */
import "./navBar.css";
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
					<div id='city'>City</div>
					<button id='login'>Login</button>
				</div>
			</div>
		</div>
	);
}
export default Navbar;
