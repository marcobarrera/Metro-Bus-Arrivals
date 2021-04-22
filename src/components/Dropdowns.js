import React from 'react';

export const Dropdowns = ({subHeader}) => {
	return (
		<div className="item">
			<h2 className="ui header">
				<div className="sub header">{subHeader}</div>
			</h2>
		</div>
	);
};

export const ArrivalTime = ({subHeader, description, minutes}) => {
	return (
		<div className="item">
			<div className="ui label large">
				<h2 className="ui header">
					<div className="sub header">{subHeader}</div>
				</h2>
				<i className="clock icon large" />
				{description} {minutes}
			</div>
		</div>
	);
};
