import React from 'react';
import { postsData } from '../../data/postsData';
import Post from '../post/Post';
import './Posts.css';

const Posts = () => {
	return (
		<div className='posts'>
			{postsData.map((post, id) => {
				return (
					<div key={id} className='post'>
						<Post data={post} />
					</div>
				);
			})}
		</div>
	);
};

export default Posts;
