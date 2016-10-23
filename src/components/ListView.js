import React, { PropTypes } from 'react';
import lodash from 'lodash';

const ListView = ({rowsIdArray, rowsById, renderRow}) => {
	const rows = lodash.map(rowsIdArray, rowId => {
		return (
			<li key={rowId}>
				{ renderRow(lodash.get(rowsById, rowId), rowId) }
			</li>
		);
	});
	
	return (
		<ul>
			{rows}
		</ul>
	);
};

ListView.propTypes = {
	rowsIdArray: PropTypes.array.isRequired,
	rowsById: PropTypes.object.isRequired,
	renderRow: PropTypes.func.isRequired,
};

export default ListView;