import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import Layout from './hoc/Layout/Layout';
import Table from './components/Table/Table';
import Spinner from './components/UI/Spinner/Spinner';

class App extends Component {
	state = {
		tableData: null,
		loading: true,
		error: false
	}

	componentDidMount() {
		axios.get( 'https://fcctop100.herokuapp.com/api/fccusers/top/recent' )
            .then( response => {
            	let recentData = response.data.map( data => (
            		<tr key={response.data.indexOf(data) + 1}>
            			<td> {response.data.indexOf(data) + 1} </td>
            			<td> <img src={data.img}/> {data.username} </td>
            			<td> {data.recent} </td>
            			<td> {data.alltime} </td>
            		</tr>
            		) 
            	);
                this.setState( { ...this.state, loading: false, tableData: recentData } );
            } )
            .catch( error => {
                this.setState( { ...this.state, error: true } );
            } );

        // axios.get( 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime' )
        //     .then( response => {
        //     	let allTimeData = response.data.map( data => (
        //     		<tr key={response.data.indexOf(data) + 1}>
        //     			<td> {response.data.indexOf(data) + 1} </td>
        //     			<td> <img src={data.img}/> {data.username} </td>
        //     			<td> {data.recent} </td>
        //     			<td> {data.alltime} </td>
        //     		</tr>
        //     		) 
        //     	);
        //         //this.setState( { ...this.state, tableData: allTimeData } );
        //     } )
        //     .catch( error => {
        //         this.setState( { ...this.state, error: true } );
        //     } );
            
	}

	render() {
		const tableDisplay = this.state.loading ? <Spinner /> : <Table>{this.state.tableData}</Table>;

	return (
		<div className="App">
			<Layout>
				{tableDisplay}
		  	</Layout>
		</div>
	)};
}

export default App;
