import React from 'react';
import { Audio } from 'react-loader-spinner';

const Loader = () => {
	return (
		<div>
			<Audio
				height='280'
				width='280'
				radius='9'
				color='green'
				ariaLabel='loading'
			/>
		</div>
	);
};

export default Loader;
