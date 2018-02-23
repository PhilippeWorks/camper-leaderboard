import React, { Component } from 'react';
import axios from 'axios';

import styles from './App.css';

import Layout from './hoc/Layout/Layout';
import Table from './components/Table/Table';
import Spinner from './components/UI/Spinner/Spinner';
import ErrorMsg from  './components/UI/ErrorMsg/ErrorMsg';

class App extends Component {
	state = {
		tableInfo: null,
		error: false
	}

	componentDidMount() {
		this.getUsers = ( value ) => {
			axios.get( 'https://fcctop100.herokuapp.com/api/fccusers/top/' + value )
	            .then( response => {
	            	let info = response.data.map( data => (
	            		<tr key={response.data.indexOf(data) + 1}>
	            			<td> {response.data.indexOf(data) + 1} </td>
	            			<td> <img src={data.img}/> {data.username} </td>
	            			<td> {data.recent} </td>
	            			<td> {data.alltime} </td>
	            		</tr>
	            		) );
	            	this.setState( { 
	            		...this.state,  
	            		tableData: { ...this.state.tableData, [value]: info },
	            		tableInfo: info
	            	} );            
	            } )
	            .catch( error => {
	                this.setState( { ...this.state, error: true } );
	            } );
		};
		this.getUsers("allTime");
		this.getUsers("recent");
	};

	clickHandler = ( receiver ) => {
		this.setState( { ...this.state, tableInfo: this.state.tableData[receiver] } );
	}

	render() {
		if (this.state.error === true) {
			return <ErrorMsg />
		}

		let tableDisplay = !this.state.tableInfo ? <Spinner /> : <Table 
				recentClick={ () => this.clickHandler("recent") }
				allTimeClick={ () => this.clickHandler("allTime") }>{this.state.tableInfo}</Table>;

		return (
			<div className={styles.App}>
				<Layout>
					{tableDisplay}
			  	</Layout>
			</div>
		) 
	};
}

export default App;
