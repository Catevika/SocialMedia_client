import React, { useEffect, useState } from 'react';
import { getUser } from '../../api/userRequest';
import '../followersCard/FollowersCard.css';

const Conversation = ({ chat, currentUserId, online }) => {
	const [userData, setUserData] = useState(null);
	const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

	useEffect(() => {
		const userId = chat.members.find((id) => id !== currentUserId);
		const getReceiverUserData = async () => {
			try {
				const { data } = await getUser(userId);
				setUserData(data);
			} catch (error) {
				console.log(error.message);
			}
		};
		getReceiverUserData();
	}, [chat.members, currentUserId]);

	return (
		<>
			<div className='follower conversation'>
				<div>
					{online ? <div className='online-dot'></div> : null}
					<img
						src={
							userData?.profilePicture
								? serverPublic + userData.profilePicture
								: serverPublic + 'defaultProfile.png'
						}
						alt=''
						className='followerImage-chat'
					/>
					<div className='name name-chat'>
						<span>
							{userData?.firstName} {userData?.lastName}
						</span>
						<span>{online ? 'Online' : 'Offline'}</span>
					</div>
				</div>
			</div>
			<hr />
		</>
	);
};

export default Conversation;
