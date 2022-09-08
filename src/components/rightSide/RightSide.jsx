import React, { useState } from 'react';
import home from '../../img/home.png';
import notifications from '../../img/noti.png';
import comment from '../../img/comment.png';
import TrendCard from '../trendCard/TrendCard';
import ShareModal from '../shareModal/ShareModal';
import { UilSetting } from '@iconscout/react-unicons';
import './RightSide.css';

const RightSide = () => {
	const [modalOpened, setModalOpened] = useState(false);

	return (
		<div className='rightSide'>
			<div className='navIcons'>
				<img src={home} alt='' />
				<UilSetting />
				<img src={notifications} alt='' />
				<img src={comment} alt='' />
			</div>
			<TrendCard />
			<button className='btn right-btn' onClick={() => setModalOpened(true)}>
				Share
			</button>
			<ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
		</div>
	);
};

export default RightSide;
