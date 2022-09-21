import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTimelinePosts } from '../../actions/postAction';
// import { postsData } from '../../data/postsData';
import Post from '../post/Post';
import { v4 as uuidv4 } from 'uuid';

import './Posts.css';

const Posts = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.authReducer.authData);
	let { posts, loading } = useSelector((state) => state.postReducer);

	useEffect(() => {
		dispatch(getTimelinePosts(user._id));
	}, [dispatch, user._id]);

	if (!posts) return <div className='post'>'No posts found'</div>;

	if (params.id) {
		posts = posts.filter((post) => post.userId === user._id.toString());
	}

	return (
		<div className='posts'>
			{loading
				? 'Fetching posts....'
				: posts.map((post) => {
						return (
							<div key={uuidv4()} className='post'>
								<Post data={post} />
							</div>
						);
				  })}
		</div>
	);
};

export default Posts;
