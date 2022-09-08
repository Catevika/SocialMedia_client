import React from 'react';
import ProfileSide from '../../components/profileSide/ProfileSide';
import PostSide from '../../components/postSide/PostSide';
import RightSide from '../../components/rightSide/RightSide';
import './Home.css';

const Home = () => {
	return (
		<div className='Home'>
			<ProfileSide />
			<PostSide />
			<RightSide />
		</div>
	);
};

export default Home;
