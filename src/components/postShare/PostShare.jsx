import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import ProfileImage from '../../img/profileImg.jpg';
import { UilScenery } from '@iconscout/react-unicons';
import { UilPlayCircle } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilSchedule } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';
import './PostShare.css';
import { uploadImage, uploadPost } from '../../actions/uploadAction';

const PostShare = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.authReducer.authData);
	const loading = useSelector((state) => state.postReducer.uploading);

	const [image, setImage] = useState(null);
	const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
	const imageRef = useRef();

	const desc = useRef();

	const onImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			let img = event.target.files[0];
			setImage(img);
		}
	};

	const handleUpload = async (e) => {
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
			try {
				dispatch(uploadImage(data));
			} catch (error) {
				console.log(error.message);
			}
		}
		dispatch(uploadPost(newPost));
		resetShare();
	};

	// Reset Post Share
	const resetShare = () => {
		setImage(null);
		desc.current.value = '';
	};

	return (
		<div className='postShare'>
			<img
				src={
					user.profilePicture
						? serverPublic + user.profilePicture
						: serverPublic + 'defaultProfile.png'
				}
				alt=''
			/>
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
					<button className='btn' onClick={handleUpload} disabled={loading}>
						{loading ? 'Uploading...' : 'Share'}
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
