import React from 'react';
import LogoSearch from '../logoSearch/LogoSearch';
import InfoCard from '../infoCard/InfoCard';
import FollowersCard from '../followersCard/FollowersCard';

const ProfileLeft = () => {
	return (
		<div className='profileSide'>
			<LogoSearch />
			<InfoCard />
			<FollowersCard />
		</div>
	);
};

export default ProfileLeft;
