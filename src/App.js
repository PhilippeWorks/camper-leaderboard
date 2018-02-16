import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import Layout from './hoc/Layout/Layout';
import Table from './components/Table/Table';

class App extends Component {
	state = {
		tableData: null,
		error: false
	}

	componentDidMount() {
		axios.get( 'https://fcctop100.herokuapp.com/api/fccusers/top/recent' )
            .then( response => {
            	let recentData = response.data.map( data => (
            		<tr>
            			<td> {response.data.indexOf(data) + 1} </td>
            			<td> <img src={data.img}/> {data.username} </td>
            			<td> {data.recent} </td>
            			<td> {data.alltime} </td>
            		</tr>
            		) 
            	);
                this.setState( { ...this.state, tableData: recentData } );
            } )
            .catch( error => {
                this.setState( { ...this.state, error: true } );
            } );

        axios.get( 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime' )
            .then( response => {
            	console.log(response.data);
                this.setState( { ingredients: response.data } );
            } )
            .catch( error => {
                this.setState( { error: true } );
            } );
	}

	render() {
		// const tableDisplay = this.state.loading ? <Spinner /> : tableData;

	return (
		<div className="App">
			<Layout>
				<Table>
					{this.state.tableData}
			  	</ Table>
		  	</Layout>
		</div>
	)};
}

export default App;
