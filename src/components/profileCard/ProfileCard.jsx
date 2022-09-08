import React from 'react';
import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.jpg';
import './ProfileCard.css';

const ProfileCard = () => {
	const profilePage = true;

	return (
		<div className='profileCard'>
			<div className='profileImages'>
				<img src={Cover} alt='' />
				<img src={Profile} alt='' />
			</div>
			<div className='profileName'>
				<span>Zendaya MJ</span>
				<span>Senior UI/UX Designer</span>
			</div>
			<div className='followStatus'>
				<hr />
				<div>
					<div className='follow'>
						<span>6,890</span>
						<span>Followings</span>
					</div>
					<div className='vl'></div>
					<div className='follow'>
						<span>2</span>
						<span>Followers</span>
					</div>
					{profilePage && (
						<>
							<div className='vl'></div>
							<div className='follow'>
								<span>3</span>
								<span>Posts</span>
							</div>
						</>
					)}
				</div>
				<hr />
			</div>
			{profilePage ? '' : <span>My Profile</span>}
		</div>
	);
};

export default ProfileCard;
