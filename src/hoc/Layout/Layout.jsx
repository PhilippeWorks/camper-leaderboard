import React from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';

const layout = ( props ) => (
	<Auxiliary>
		<header> Freecodecamp Leaderboard </header>
		{props.children}
	</Auxiliary>
);

export default layout;