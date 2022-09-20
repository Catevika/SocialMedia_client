import React from 'react';
import { Link } from 'react-router-dom';
import { UilSetting } from '@iconscout/react-unicons';
import home from '../../img/home.png';
import notifications from '../../img/noti.png';
import comment from '../../img/comment.png';
import './NavIcons.css';

const NavIcons = () => {
	return (
		<div className='navIcons'>
			<Link to='/home'>
				<img src={home} alt='' />
			</Link>
			<UilSetting />
			<img src={notifications} alt='' />
			<Link to='../chat'>
				<img src={comment} alt='' />
			</Link>
		</div>
	);
};

export default NavIcons;
