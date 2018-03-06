import React from 'react';

import styles from './Table.css';

const table = (props) => (
	<table className={styles.Table}>
		<caption> Point Leaders </caption>
		<thead>
			<tr>
				<th> # </th>
				<th> Camper Name </th>
				<th onClick={props.recentClick}> Last 30 Days </th>
				<th onClick={props.allTimeClick}> All Time </th>
			</tr>
		</thead>
		<tbody>
			{props.children}
		</tbody>
	</table>

);

export default table;