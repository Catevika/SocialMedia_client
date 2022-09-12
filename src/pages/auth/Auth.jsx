import React, { useState } from 'react';
import Logo from '../../img/logo.png';
import './Auth.css';

const Auth = () => {
	const [isSignedUp, setIsSignedUp] = useState(true);

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
				<form className='infoForm authForm'>
					<h3>{isSignedUp ? 'Sign Up' : 'Log in'}</h3>

					{isSignedUp ? (
						<div>
							<div className='infoGroup'>
								<label htmlFor='firstName'>First Name</label>
								<input
									type='text'
									placeholder='First Name'
									className='infoInput'
									name='firstName'
								/>
							</div>
							<div className='infoGroup'>
								<label htmlFor='lastName'>Last Name</label>
								<input
									type='text'
									placeholder='Last Name'
									className='infoInput'
									name='lastName'
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
								name='Username'
								autoComplete='username'
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
								autoComplete='password'
							/>
						</div>
						{isSignedUp ? (
							<div className='infoGroup'>
								<label htmlFor='confirmpassword'>Confirm Password</label>
								<input
									type='password'
									placeholder='Confirm Password'
									className='infoInput'
									name='confirmpassword'
									autoComplete='confirm-password'
								/>
							</div>
						) : null}
					</div>
					<div>
						<span
							className='infoLogin'
							onClick={() => setIsSignedUp((prev) => !prev)}
						>
							{isSignedUp
								? 'Already have an account? Login!'
								: 'Do not have an account? Sign up!'}
						</span>
						<button type='submit' className='btn info-btn'>
							{isSignedUp ? 'Sign up' : 'Log in'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Auth;
