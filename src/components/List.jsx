/** @format */

function List() {
	var data = JSON.parse(localStorage.getItem("data"));

	return (
		<div>
			{data ? (
				<div style={{ marginLeft: "10px" }}>
					<h1>Booked Movie List</h1>
					<img src={data[0].image} alt='' width='150px' />
					<h1>{data[0].name}</h1>
				</div>
			) : (
				<h1>You haven't Booked any movie yet...kindly book movie first</h1>
			)}
		</div>
	);
}
export default List;
