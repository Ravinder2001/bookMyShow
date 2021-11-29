/** @format */
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
function Details() {
	var datas = JSON.parse(localStorage.getItem("data"));
	console.log(datas);
	function save() {
		var data = [
			{
				image:
					"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODQlICAyN2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00303116-cfgddhrhsg-portrait.jpg",
				name: "Antim",
			},
		];

		// alert("Your Movie is succesfully Booked");
		localStorage.setItem("data", JSON.stringify(data));
	}
	return (
		<div style={{ textAlign: "center", marginTop: "10px" }}>
			<img
				src='https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODQlICAyN2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00303116-cfgddhrhsg-portrait.jpg'
				alt=''
				width='170px'
			/>
			<h1>Antim</h1>
			<div>
				Rajveer Singh is all set to take on Rahuliya in a fight between right
				and wrong! Who will win this `Antim` fight?
			</div>
			{datas ? (
				<button>Download Ticket</button>
			) : (
				<div>
					<button
						onClick={() => {
							alert("Please Select Time");
							document.getElementById("here").style.display = "none";
							document.getElementById("time").style.display = "block";
						}}
						id='here'>
						Book
					</button>
					<div id='time' style={{ display: "none" }}>
						<select name='' id=''>
							<option value=''>9 AM to 12 PM</option>
							<option value=''>12 PM to 3 PM</option>
							<option value=''>4 PM to 10 PM</option>
						</select>
						<Link to='/dashboard'>
							<button
								onClick={() => {
									save();
								}}>
								Book
							</button>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}
export default Details;
