import React, { useState, useEffect } from "react";
import "./task1.css";

function Task2() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(
			"http://localhost:8000/route2/users/male-phone-price-greater-than-10000"
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setData(data);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div>
			<h2>Male Users which have phone price greater than 10,000.</h2>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Gender</th>
						<th>Income</th>
						<th>City</th>
						<th>Car</th>
						<th>Quote</th>
						<th>Phone Price</th>
					</tr>
				</thead>
				<tbody>
					{data.map((users) => (
						<tr key={users.id}>
							<td>{users.id}</td>
							<td>{users.first_name}</td>
							<td>{users.last_name}</td>
							<td>{users.email}</td>
							<td>{users.gender}</td>
							<td>{users.income}</td>
							<td>{users.city}</td>
							<td>{users.car}</td>
							<td>{users.quote}</td>
							<td>{users.phone_price}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Task2;
