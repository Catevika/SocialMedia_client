import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/authAction';
import ProfileModal from '../profileModal/ProfileModal';
import * as UserApi from '../../api/userRequest.js';
import { UilPen } from '@iconscout/react-unicons';
import './InfoCard.css';

const InfoCard = () => {
	const [modalOpened, setModalOpened] = useState(false);
	const dispatch = useDispatch();
	const params = useParams();
	const profileUserId = params.id;

	const [profileUser, setProfileUser] = useState({});

	const { user } = useSelector((state) => state.authReducer.authData);

	const handleLogout = () => {
		dispatch(logout());
	};

	useEffect(() => {
		const fetchProfileUser = () => {
			if (profileUserId === user._id.toString()) {
				setProfileUser(user);
			} else {
				const profileUSer = UserApi.getUser(profileUserId);
				setProfileUser(profileUSer);
			}
		};
		fetchProfileUser();
	}, [user, profileUserId]);

	return (
		<div className='infoCard'>
			<div className='infoHead'>
				<h4>Profile Info</h4>
				{user._id.toString() === profileUserId ? (
					<div>
						<UilPen
							className='infoHead-icon'
							onClick={() => setModalOpened(true)}
						/>
						<ProfileModal
							modalOpened={modalOpened}
							setModalOpened={setModalOpened}
							data={user}
						/>
					</div>
				) : (
					''
				)}
			</div>
			<div className='info'>
				<span>
					<b>Status </b>
				</span>
				<span>{profileUser.relationship}</span>
			</div>
			<div className='info'>
				<span>
					<b>Lives in </b>
				</span>
				<span>{profileUser.livesIn}</span>
			</div>
			<div className='info'>
				<span>
					<b>Works at </b>
				</span>
				<span>{profileUser.worksAt}</span>
			</div>
			<button className='btn logout-btn' onClick={handleLogout}>
				Log Out
			</button>
		</div>
	);
};

export default InfoCard;
