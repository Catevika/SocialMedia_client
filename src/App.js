import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Auth from './pages/auth/Auth';
import './App.css';
import Chat from './pages/chat/Chat';

function App() {
	const user = useSelector((state) => state.authReducer.authData);
	return (
		<div className='App'>
			<div className='blur blur__1'></div>
			<div className='blur blur__2'></div>
			<Routes>
				<Route
					path='/'
					element={user ? <Navigate to='home' /> : <Navigate to='auth' />}
				/>
				<Route
					path='/home'
					element={user ? <Home /> : <Navigate to='../auth' />}
				/>
				<Route
					path='/auth'
					element={user ? <Navigate to='../home' /> : <Auth />}
				/>
				<Route
					path='/profile/:id'
					element={user ? <Profile /> : <Navigate to='../auth' />}
				/>
				<Route
					path='/chat'
					element={user ? <Chat /> : <Navigate to='../auth' />}
				/>
			</Routes>
		</div>
	);
}

export default App;
