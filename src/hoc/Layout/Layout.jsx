import React from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';

const layout = ( props ) => (
	<Auxiliary>
		<header> <h1>Freecodecamp Leaderboard</h1> </header>
		{props.children}
	</Auxiliary>
);

export default layout;