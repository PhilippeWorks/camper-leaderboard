import React from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';

import './Layout.css';

const layout = ( props ) => (
	<Auxiliary>
		<header> <img src={require("../../assets/imgs/freeCodeCamp.png")}
		 alt="freeCodeCamp Logo" /></header>
		{props.children}
	</Auxiliary> 
);

export default layout;