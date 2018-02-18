import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import Layout from './hoc/Layout/Layout';
import Table from './components/Table/Table';
import Spinner from './components/UI/Spinner/Spinner';

class App extends Component {
	state = {
		tableData: null,
		status: null,
		loading: true,
		error: false
	}

	getUsers = (value) => {
		axios.get( 'https://fcctop100.herokuapp.com/api/fccusers/top/' + value)
            .then( response => {
            	console.log(value);
            	let recentData = response.data.map( data => (
            		<tr key={response.data.indexOf(data) + 1}>
            			<td> {response.data.indexOf(data) + 1} </td>
            			<td> <img src={data.img}/> {data.username} </td>
            			<td> {data.recent} </td>
            			<td> {data.alltime} </td>
            		</tr>
            		) );
                this.setState( { 
                	...this.state,
                	status: value,
                	loading: false,
                	tableData: recentData
            	} );
            	console.log("finish")
            } )
            .catch( error => {
                this.setState( { ...this.state, error: true } );
            } );
	}

	componentDidMount() {
		console.log('cpd');
		this.getUsers("recent");
	}

	shouldComponentUpdate(nextState) {
		if (this.state === nextState) {
			return false
		}
		return true;
	}

	render() {
		const tableDisplay = this.state.loading? <Spinner /> : <Table 
			recentClick={() => this.getUsers("recent")}
			allTimeClick={() => this.getUsers("allTime")}> {this.state.tableData} </Table>;

	return (
		<div className="App">
			<Layout>
				{tableDisplay}
		  	</Layout>
		</div>
	)	};
}

export default App;
