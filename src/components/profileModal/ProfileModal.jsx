import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Modal, useMantineTheme } from '@mantine/core';
import { uploadImage } from '../../actions/uploadAction';
import { updateUser } from '../../actions/userAction';

function ProfileModal({ modalOpened, setModalOpened, data }) {
	const theme = useMantineTheme();
	const { password, ...otherDetails } = data;
	const [formData, setFormData] = useState(otherDetails);
	const [profileImage, setProfileImage] = useState(null);
	const [coverImage, setCoverImage] = useState(null);
	const dispatch = useDispatch();
	const params = useParams();

	// Allow to get all the input field values at once
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onImageChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			let img = event.target.files[0];
			event.target.name === 'profileImage'
				? setProfileImage(img)
				: setCoverImage(img);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let userData = formData;
		if (profileImage) {
			const data = new FormData();
			const fileName = Date.now() + profileImage.name;
			data.append('name', fileName);
			data.append('file', profileImage);
			userData.profilePicture = fileName;

			try {
				dispatch(uploadImage(data));
			} catch (error) {
				console.log(error.message);
			}
		}

		if (coverImage) {
			const data = new FormData();
			const fileName = Date.now() + coverImage.name;
			data.append('name', fileName);
			data.append('file', coverImage);
			userData.coverPicture = fileName;

			try {
				dispatch(uploadImage(data));
			} catch (error) {
				console.log(error.message);
			}
		}
		dispatch(updateUser(params.id, userData));
		setModalOpened(false);
	};

	return (
		<Modal
			overlayColor={
				theme.colorScheme === 'dark'
					? theme.colors.dark[9]
					: theme.colors.gray[2]
			}
			overlayOpacity={0.55}
			overlayBlur={3}
			size='55%'
			opened={modalOpened}
			onClose={() => setModalOpened(false)}
		>
			<form className='infoForm'>
				<h3>Your Info</h3>
				<div>
					<input
						type='text'
						className='infoInput'
						name='firstName'
						placeholder='firstName'
						value={formData.firstName}
						onChange={handleChange}
					/>
					<input
						type='text'
						className='infoInput'
						name='lastName'
						placeholder='lastName'
						value={formData.lastName}
						onChange={handleChange}
					/>
				</div>
				<div>
					<input
						type='text'
						className='infoInput'
						name='worksAt'
						placeholder='Works at'
						value={formData.worksAt}
						onChange={handleChange}
					/>
				</div>
				<div>
					<input
						type='text'
						className='infoInput'
						name='livesIn'
						placeholder='Lives in'
						value={formData.livesIn}
						onChange={handleChange}
					/>
					<input
						type='text'
						className='infoInput'
						name='country'
						placeholder='Country'
						value={formData.country}
						onChange={handleChange}
					/>
				</div>
				<div>
					<input
						type='text'
						name='relationship'
						placeholder='Relashionship Status'
						className='infoInput'
						value={formData.relationship}
						onChange={handleChange}
					/>
				</div>
				<div>
					<span>Profile Image</span>
					<input
						type='file'
						name='profileImage'
						value={formData.profileImage}
						onChange={onImageChange}
					/>
					<span>Cover Image</span>
					<input
						type='file'
						name='coverImage'
						value={formData.profileImage}
						onChange={onImageChange}
					/>
				</div>
				<button className='btn' onClick={handleSubmit}>
					Update
				</button>
			</form>
		</Modal>
	);
}

export default ProfileModal;
