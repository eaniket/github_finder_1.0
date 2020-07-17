import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
	<Fragment>
		<img
			src={spinner}
			alt='Loading...'
			style={{ width: '200px', margin: 'auto', display: 'bock' }}
		/>
	</Fragment>
);

export default Spinner;
