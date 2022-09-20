import React, { useState } from 'react';
import NavIcons from '../navIcons/NavIcons';
import TrendCard from '../trendCard/TrendCard';
import ShareModal from '../shareModal/ShareModal';
import './RightSide.css';

const RightSide = () => {
	const [modalOpened, setModalOpened] = useState(false);

	return (
		<div className='rightSide'>
			<NavIcons />
			<TrendCard />
			<button className='btn right-btn' onClick={() => setModalOpened(true)}>
				Share
			</button>
			<ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
		</div>
	);
};

export default RightSide;
