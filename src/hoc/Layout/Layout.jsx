import React from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';

const layout = ( props ) => (
	<Auxiliary>
		<header> <h1>FreeCodeCamp Point Leaders</h1> </header>
		{props.children}
	</Auxiliary>
);

export default layout;