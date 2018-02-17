import React from 'react';

const Table = (props) => (
	<table>
		<thead>
			<tr>
				<th> # </th>
				<th> Camper Name </th>
				<th> Points In Last 30 Days </th>
				<th> All Time </th>
			</tr>
		</thead>
		<tbody>
			{props.children}
		</tbody>
	</table>

);

export default Table;