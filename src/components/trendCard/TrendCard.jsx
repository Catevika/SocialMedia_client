import React from 'react';
import { trendData } from '../../data/trendData';
import './TrendCard.css';

const TrendCard = () => {
	return (
		<div className='trendCard'>
			<h3>Trends for You</h3>
			{trendData.map((trend, id) => {
				return (
					<div key={id} className='trend'>
						<span>#{trend.name}</span>
						<span>{trend.shares}k shares</span>
					</div>
				);
			})}
		</div>
	);
};

export default TrendCard;
