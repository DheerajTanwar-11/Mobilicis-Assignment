import React, { useState, useEffect } from "react";
import "./task1.css";

function Task4() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/route4/users/car-brand-and-email")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setData(data);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div>
			<h2>
				Users which have a car of brand “BMW”, “Mercedes” or “Audi” and
				whose email does not include any digit.
			</h2>
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

export default Task4;
