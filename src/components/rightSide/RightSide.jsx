import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TrendCard from '../trendCard/TrendCard';
import ShareModal from '../shareModal/ShareModal';
import { UilSetting } from '@iconscout/react-unicons';
import home from '../../img/home.png';
import notifications from '../../img/noti.png';
import comment from '../../img/comment.png';
import './RightSide.css';

const RightSide = () => {
	const [modalOpened, setModalOpened] = useState(false);

	return (
		<div className='rightSide'>
			<div className='navIcons'>
				<Link to='/home' className='navIcons__home-icon'>
					<img src={home} alt='' />
				</Link>
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
