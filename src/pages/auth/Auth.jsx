import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, signUp } from '../../actions/authAction';
import Logo from '../../img/logo.png';
import './Auth.css';

const Auth = () => {
	const initialState = {
		firstName: '',
		lastName: '',
		username: '',
		password: '',
		confirmPassword: ''
	};
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.authReducer.loading);

	const [isSignedUp, setIsSignedUp] = useState(true);
	const [data, setData] = useState(initialState);
	const [confirmPassword, setConfirmPassword] = useState(true);

	// Allow to get all the input field values at once
	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		setConfirmPassword(true);
		e.preventDefault();
		if (isSignedUp) {
			data.password === data.confirmPassword
				? dispatch(signUp(data))
				: setConfirmPassword(false);
		} else {
			dispatch(logIn(data));
		}
	};

	const resetForm = () => {
		setData(initialState);
		setConfirmPassword(confirmPassword);
	};

	return (
		<div className='auth'>
			{/* Left Side */}
			<div className='authentication-left'>
				<img src={Logo} alt='' />
				<div className='webName'>
					<h1>ZKC Media</h1>
					<h6>Explore the ideas throughout the world</h6>
				</div>
			</div>
			{/* Right Side */}
			<div className='authentication-right'>
				<form className='infoForm authForm' onSubmit={handleSubmit}>
					<h3>{isSignedUp ? 'Register' : 'Log in'}</h3>

					{isSignedUp ? (
						<div>
							<div className='infoGroup'>
								<label htmlFor='firstName'>First Name</label>
								<input
									type='text'
									placeholder='First Name'
									className='infoInput'
									name='firstName'
									value={data.firstName}
									onChange={handleChange}
									required
								/>
							</div>
							<div className='infoGroup'>
								<label htmlFor='lastName'>Last Name</label>
								<input
									type='text'
									placeholder='Last Name'
									className='infoInput'
									name='lastName'
									value={data.lastName}
									onChange={handleChange}
									required
								/>
							</div>
						</div>
					) : null}
					<div>
						<div className='infoGroup'>
							<label className='infoLabel' htmlFor='username'>
								Username
							</label>
							<input
								type='text'
								placeholder='Username'
								className='infoInput'
								name='username'
								autoComplete='username'
								value={data.username}
								onChange={handleChange}
								required
							/>
						</div>
					</div>
					<div>
						<div className='infoGroup'>
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								placeholder='Password'
								className='infoInput'
								name='password'
								autoComplete='current-password'
								value={data.password}
								onChange={handleChange}
								required
							/>
						</div>
						{isSignedUp ? (
							<div className='infoGroup'>
								<label htmlFor='confirmpassword'>Confirm Password</label>
								<input
									type='password'
									placeholder='Confirm Password'
									className='infoInput'
									name='confirmPassword'
									autoComplete='new-password'
									value={data.confirmPassword}
									onChange={handleChange}
									required
								/>
							</div>
						) : null}
					</div>
					<span
						style={{ display: confirmPassword ? 'none' : 'block' }}
						className={confirmPassword ? null : 'error-message'}
					>
						* Passwords should be the same. Please check
					</span>
					<div>
						<span
							className='infoLogin'
							onClick={() => {
								resetForm();
								setIsSignedUp((prev) => !prev);
							}}
						>
							{isSignedUp
								? 'Already have an account? Log in!'
								: 'Do not have an account? Register!'}
						</span>
						<button type='submit' className='btn info-btn' disabled={loading}>
							{loading ? 'Loading...' : isSignedUp ? 'Register' : 'Log in'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Auth;
