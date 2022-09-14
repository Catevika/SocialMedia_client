import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileImage from '../../img/profileImg.jpg';
import { UilScenery } from '@iconscout/react-unicons';
import { UilPlayCircle } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilSchedule } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';
import './PostShare.css';
import { uploadImage, uploadPost } from '../../actions/uploadAction';

const PostShare = () => {
	const loading = useSelector((state) => state.postReducer.uploading);
	const dispatch = useDispatch();

	const [image, setImage] = useState(null);
	const imageRef = useRef(null);
	const user = useSelector(
		(state) =>
			state.authReducer.authData.newUser || state.authReducer.authData.user
	);
	const desc = useRef();

	const onImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			let img = event.target.files[0];
			setImage(img);
		}
	};

	const reset = () => {
		setImage(null);
		desc.current.value = '';
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newPost = {
			userId: user._id,
			desc: desc.current.value
		};
		if (image) {
			const data = new FormData();
			const fileName = Date.now() + image.name;
			data.append('name', fileName);
			data.append('file', image);
			newPost.image = fileName;
			console.log(newPost);
			try {
				dispatch(uploadImage(data));
			} catch (error) {
				console.log(error);
			}
		}
		dispatch(uploadPost(newPost));
		reset();
	};

	return (
		<div className='postShare'>
			<img src={ProfileImage} alt='' />
			<div>
				<input
					ref={desc}
					type='text'
					placeholder="What's happening?"
					required
				/>
				<div className='postOptions'>
					<div className='option' onClick={() => imageRef.current.click()}>
						<UilScenery />
						Photo
					</div>
					<div className='option'>
						<UilPlayCircle />
						Video
					</div>
					<div className='option'>
						<UilLocationPoint />
						Location
					</div>
					<div className='option'>
						<UilSchedule />
						Schedule
					</div>
					<button className='btn' onClick={handleSubmit} disabled={loading}>
						{loading ? 'Loading...' : 'Share'}
					</button>
					<div className='imageLoader'>
						<input
							type='file'
							name='myImage'
							ref={imageRef}
							onChange={onImageChange}
						/>
					</div>
				</div>
				{image && (
					<div className='previewImage'>
						<UilTimes onClick={() => setImage(null)} />
						<img src={URL.createObjectURL(image)} alt='' />
					</div>
				)}
			</div>
		</div>
	);
};

export default PostShare;
