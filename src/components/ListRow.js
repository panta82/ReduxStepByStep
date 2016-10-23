import React, { PropTypes } from 'react';

import './ListRow.css';

const ListRow = ({selected, onClick, onClickArg = null, children}) => {
	let rowClass = 'list-row';
	if (selected) {
		rowClass += ' list-row-selected';
	}
	
	return (
		<div className={rowClass}
			onClick={(e) => onClick && onClick(onClickArg, e)}>
			{children}
		</div>
	);
};

ListRow.propTypes = {
	selected: PropTypes.bool.isRequired,
	onClick: PropTypes.func,
	onClickArg: PropTypes.any,
	children: PropTypes.any
};

export default ListRow;