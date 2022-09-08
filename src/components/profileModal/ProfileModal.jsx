import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({ modalOpened, setModalOpened }) {
	const theme = useMantineTheme();
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
						name='FirstName'
						placeholder='firstName'
					/>
					<input
						type='text'
						className='infoInput'
						name='LastName'
						placeholder='lastName'
					/>
				</div>
				<div>
					<input
						type='text'
						className='infoInput'
						name='WorksAt'
						placeholder='Works at'
					/>
				</div>
				<div>
					<input
						type='text'
						className='infoInput'
						name='LivesIn'
						placeholder='Lives in'
					/>
					<input
						type='text'
						className='infoInput'
						name='country'
						placeholder='Country'
					/>
				</div>
				<div>
					<input
						type='text'
						placeholder='Relashionship Status'
						className='infoInput'
					></input>
				</div>
				<div>
					<span>Profile Image</span>
					<input type='file' name='profileImg' />
					<span>Cover Image</span>
					<input type='file' name='coverImg' />
				</div>
				<button className='btn'>Update</button>
			</form>
		</Modal>
	);
}

export default ProfileModal;
