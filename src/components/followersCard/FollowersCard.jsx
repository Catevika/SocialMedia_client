import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllUsers } from '../../api/userRequest';
// import { followers } from '../../data - Dev/followersData';
import User from '../user/User';
import { v4 as uuidv4 } from 'uuid';

import './FollowersCard.css';

const FollowersCard = () => {
	const [persons, setPersons] = useState([]);
	const { user } = useSelector((state) => state.authReducer.authData);

	useEffect(() => {
		const fetchPersons = async () => {
			const { data } = await getAllUsers();
			setPersons(data);
		};

		fetchPersons();
	}, []);

	return (
		<div className='followersCard'>
			<h3>People you may know</h3>
			{persons.map((person) => {
				if (person._id !== user._id.toString()) {
					return <User person={person} key={uuidv4()} />;
				} else {
					return [];
				}
			})}
		</div>
	);
};

export default FollowersCard;
