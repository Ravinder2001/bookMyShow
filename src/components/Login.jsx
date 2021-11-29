/** @format */

import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
function Login() {
	const [userData, setData] = useState({
		username: "",
		email: "",
	});
	function handle(e) {
		const { name, value } = e.target;
		setData({
			...userData,
			[name]: value,
		});
	}
	function save(e) {
		e.preventDefault();
		console.log(userData);
	}
	return (
		<div style={{ clear: "both" }}>
			<form action='' onSubmit={save}>
				<div style={{ margin: "10px" }}>
					<input
						type='text'
						placeholder='Name'
						name='username'
						onChange={handle}
					/>
				</div>
				<div style={{ margin: "10px" }}>
					<input
						type='text'
						placeholder='Email'
						name='email'
						onChange={handle}
					/>
				</div>
				<div style={{ margin: "10px" }}>
					<input type='password' placeholder='Password' />
				</div>
				<Link to='/dashboard'>
					<button style={{ margin: "10px" }} type='submit'>
						Submit
					</button>
				</Link>
			</form>
		</div>
	);
}
export default Login;
