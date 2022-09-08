import React, { useState } from 'react';
import ProfileModal from '../profileModal/ProfileModal';
import { UilPen } from '@iconscout/react-unicons';
import './InfoCard.css';

const InfoCard = () => {
	const [modalOpened, setModalOpened] = useState(false);
	return (
		<div className='infoCard'>
			<div className='infoHead'>
				<h4>Your Info</h4>
				<div>
					<UilPen
						className='infoHead-icon'
						onClick={() => setModalOpened(true)}
					/>
					<ProfileModal
						modalOpened={modalOpened}
						setModalOpened={setModalOpened}
					/>
				</div>
			</div>
			<div className='info'>
				<span>
					<b>Status </b>
				</span>
				<span>Married</span>
			</div>
			<div className='info'>
				<span>
					<b>Lives in </b>
				</span>
				<span>Paris, France</span>
			</div>
			<div className='info'>
				<span>
					<b>Works at </b>
				</span>
				<span>Web Dev Cie</span>
			</div>
			<button className='btn logout-btn'>Logout</button>
		</div>
	);
};

export default InfoCard;
