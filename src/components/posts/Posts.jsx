import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTimelinePosts } from '../../actions/postAction';
// import { postsData } from '../../data/postsData';
import Post from '../post/Post';
import './Posts.css';

const Posts = () => {
	const dispatch = useDispatch();
	const user = useSelector(
		(state) =>
			state.authReducer.authData.newUser || state.authReducer.authData.user
	);
	let { posts, loading } = useSelector((state) => state.postReducer);

	useEffect(() => {
		dispatch(getTimelinePosts(user._id));
	}, [dispatch, user._id]);

	return (
		<div className='posts'>
			{!posts
				? 'No post available yet'
				: loading
				? 'Fetching posts...'
				: posts.map((post, id) => {
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
