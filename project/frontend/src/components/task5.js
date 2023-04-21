import React, { useState, useEffect } from "react";
import "./task1.css";

function Task5() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/route5/users/top-10-cities")
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
				Show the data of top 10 cities which have the highest number of
				users and their average income.
			</h2>
			<table>
				<thead>
					<tr>
						<th>City Name</th>
						<th>Total Users</th>
					</tr>
				</thead>
				<tbody>
					{data.map((users) => (
						<tr key={users._id}>
							<td>{users._id}</td>
							<td>{users.userCount}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Task5;
