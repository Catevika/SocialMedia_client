import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/userAction';

const User = ({ person }) => {
	const dispatch = useDispatch();
	const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
	const { user } = useSelector((state) => state.authReducer.authData);

	const [following, setFollowing] = useState(
		person.followers.includes(user._id)
	);

	const handleFollow = () => {
		following
			? dispatch(unfollowUser(person._id, user))
			: dispatch(followUser(person._id, user));
		setFollowing((prev) => !prev);
	};

	return (
		<div className='follower'>
			<div>
				<img
					src={
						person.profilePicture
							? serverPublic + person.profilePicture
							: serverPublic + 'defaultProfile.png'
					}
					alt=''
					className='followerImage'
				/>
				<div className='name'>
					<span>
						{person.firstName}
						{person.lastName}
					</span>
					<span>{person.username}</span>
				</div>
			</div>
			<button
				className={following ? 'btn-reverse' : 'btn'}
				onClick={handleFollow}
			>
				{following ? 'Unfollow' : 'Follow'}
			</button>
		</div>
	);
};

export default User;
