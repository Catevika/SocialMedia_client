import React from 'react';
import { trendData } from '../../data/trendData';
import { v4 as uuidv4 } from 'uuid';

import './TrendCard.css';

const TrendCard = () => {
	return (
		<div className='trendCard'>
			<h3>Trends for You</h3>
			{trendData.map((trend) => {
				return (
					<div key={uuidv4()} className='trend'>
						<span>#{trend.name}</span>
						<span>{trend.shares}k shares</span>
					</div>
				);
			})}
		</div>
	);
};

export default TrendCard;
