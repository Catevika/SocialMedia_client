import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { likePost } from '../../api/postRequest';
import comment from '../../img/comment.png';
import share from '../../img/share.png';
import heart from '../../img/like.png';
import notLike from '../../img/notlike.png';

import './Post.css';

const Post = ({ data }) => {
	const { user } = useSelector((state) => state.authReducer.authData);
	const [liked, setLiked] = useState(data.likes.includes(user._id));
	const [likes, setLikes] = useState(data.likes.length);

	const handleLike = () => {
		setLiked((prev) => !prev);
		likePost(data._id, user._id);
		liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
	};

	return (
		<>
			<img
				src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ''}
				alt=''
			/>
			<div className='postReactions'>
				<img
					src={liked ? heart : notLike}
					alt=''
					className='liked'
					onClick={handleLike}
				/>
				<img src={comment} alt='' />
				<img src={share} alt='' />
			</div>
			<span className='postReactions-likes'>{likes} Likes</span>
			<div className='detail'>
				<span>
					{/* // TODO // */}
					<b>{data.name}</b>
					{/* // TODO // */}
				</span>
				<span>{data.desc}</span>
			</div>
		</>
	);
};

export default Post;
