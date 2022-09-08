import React from 'react';
import './FollowersCard.css';
import { followers } from '../../data/followersData';

const FollowersCard = () => {
	return (
		<div className='followersCard'>
			<h3>Who is following you</h3>
			{followers.map((follower, id) => {
				return (
					<div key={id} className='follower'>
						<div>
							<img src={follower.img} alt='' className='followerImage' />
							<div className='name'>
								<span>{follower.name}</span>
								<span>@{follower.username}</span>
							</div>
						</div>
						<button className='btn'>Follow</button>
					</div>
				);
			})}
		</div>
	);
};

export default FollowersCard;
