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
					<div style={{ float: "left", marginTop: "50px" }}>
						<input type='text' placeholder='search Movie' />
					</div>
				</div>
			</div>
		</div>
	);
}
export default Navbar;
