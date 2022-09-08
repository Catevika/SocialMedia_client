import React from 'react';
import LogoSearch from '../logoSearch/LogoSearch';
import ProfileCard from '../profileCard/ProfileCard';
import FollowersCard from '../followersCard/FollowersCard';
import './ProfileSide.css';

const ProfileSide = () => {
	return (
		<div className='profileSide'>
			<LogoSearch />
			<ProfileCard />
			<FollowersCard />
		</div>
	);
};

export default ProfileSide;
