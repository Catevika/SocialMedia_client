import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Cover from '../../img/cover.jpg';
// import Profile from '../../img/profileImg.jpg';
import './ProfileCard.css';

const ProfileCard = ({ location }) => {
	// const profilePage = false;
	const { user } = useSelector((state) => state.authReducer.authData);
	const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
	const { posts } = useSelector((state) => state.postReducer);

	return (
		<div className='profileCard'>
			<div className='profileImages'>
				<img
					src={
						user.coverPicture
							? serverPublic + user.coverPicture
							: serverPublic + 'defaultCover.jpg'
					}
					alt='profile-cover'
				/>
				<img
					src={
						user.profilePicture
							? serverPublic + user.profilePicture
							: serverPublic + 'defaultProfile.png'
					}
					alt='profile-avatar'
				/>
			</div>
			<div className='profileName'>
				<span>
					{user.firstName} {user.lastName}
				</span>
				<span>
					{user.worksAt ? user.worksAt : <em>Write about yourself</em>}
				</span>
			</div>
			<div className='followStatus'>
				<hr />
				<div>
					<div className='follow'>
						<span>{user.following.length}</span>
						<span>
							{user.following.length <= 1 ? 'Following' : 'Followings'}
						</span>
					</div>
					<div className='vl'></div>
					<div className='follow'>
						<span>{user.followers.length}</span>
						<span>{user.followers.length <= 1 ? 'Follower' : 'Followers'}</span>
					</div>
					{location === 'profilePage' ? (
						<>
							<div className='vl'></div>
							<div className='follow'>
								<span>
									{
										posts.filter((post) => post.userId === user._id.toString())
											.length
									}
								</span>
								<span>Posts</span>
							</div>
						</>
					) : null}
				</div>
				<hr />
			</div>
			{location === 'profilePage' ? (
				''
			) : (
				<span>
					<Link to={`/profile/${user._id}`}>My Profile</Link>
				</span>
			)}
		</div>
	);
};

export default ProfileCard;
