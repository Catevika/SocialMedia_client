import React from 'react';
// import { useSelector } from 'react-redux';
import comment from '../../img/comment.png';
import share from '../../img/share.png';
import heart from '../../img/like.png';
import notLike from '../../img/notlike.png';

import './Post.css';

const Post = ({ data }) => {
	// const { user } = useSelector((state) => state.authReducer.authData);
	return (
		<>
			{/* {user ? ( */}
			<img
				src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ''}
				alt=''
			/>
			{/* ) : null} */}
			<div className='postReactions'>
				<img src={data.liked ? heart : notLike} alt='' />
				<img src={comment} alt='' />
				<img src={share} alt='' />
			</div>
			<span className='postReactions-likes'>{data.likes} Likes</span>
			<div className='detail'>
				<span>
					<b>{data.name} </b>
				</span>
				<span>{data.desc}</span>
			</div>
		</>
	);
};

export default Post;
