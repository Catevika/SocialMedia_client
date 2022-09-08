import React from 'react';
import Logo from '../../img/logo.png';
import './Auth.css';

const Auth = () => {
	return (
		<div className='auth'>
			<div className='authentication-left'>
				<img src={Logo} alt='' />
				<div className='webName'>
					<h1>ZKC Media</h1>
					<h6>Explore the ideas throughout the world</h6>
				</div>
			</div>
			<Login />
		</div>
	);
};

function Login() {
	return (
		<div className='authentication-right'>
			<form className='infoForm authForm'>
				<h3>Log in</h3>
				<div>
					<input
						type='text'
						placeholder='Username'
						className='infoInput'
						name='Username'
					/>
				</div>
				<div>
					<input
						type='password'
						placeholder='Password'
						className='infoInput'
						name='password'
					/>
				</div>
				<div>
					<span className='infoLogin'>Do not have an account? Sign up!</span>
					<button type='submit' className='btn info-btn'>
						Log in
					</button>
				</div>
			</form>
		</div>
	);
}

// function Signup() {
// 	return (
// 		<div className='authentication-right'>
// 			<form className='infoForm authForm'>
// 				<h3>Sign up</h3>
// 				<div>
// 					<input
// 						type='text'
// 						placeholder='First Name'
// 						className='infoInput'
// 						name='firstName'
// 					/>
// 					<input
// 						type='text'
// 						placeholder='Last Name'
// 						className='infoInput'
// 						name='lastName'
// 					/>
// 				</div>
// 				<div>
// 					<input
// 						type='text'
// 						placeholder='Username'
// 						className='infoInput'
// 						name='Username'
// 					/>
// 				</div>
// 				<div>
// 					<input
// 						type='password'
// 						placeholder='Password'
// 						className='infoInput'
// 						name='password'
// 					/>
// 					<input
// 						type='password'
// 						placeholder='Confirm Password'
// 						className='infoInput'
// 						name='confirmpassword'
// 					/>
// 				</div>
// 				<div>
// 					<span className='infoLogin'>Already have an account? Login!</span>
// 				</div>
// 				<button type='submit' className='btn info-btn'>
// 					Sign up
// 				</button>
// 			</form>
// 		</div>
// 	);
// }

export default Auth;
