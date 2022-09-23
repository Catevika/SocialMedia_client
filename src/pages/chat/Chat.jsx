import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { userChats } from '../../api/chatRequest';
import LogoSearch from '../../components/logoSearch/LogoSearch';
import NavIcons from '../../components/navIcons/NavIcons';
import Conversation from '../../components/conversation/Conversation';
import ChatBox from '../../components/chatBox/ChatBox';
import './Chat.css';

import { io } from 'socket.io-client';

const Chat = () => {
	const socket = useRef();
	const { user } = useSelector((state) => state.authReducer.authData);

	const [chats, setChats] = useState([]);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const [currentChat, setCurrentChat] = useState(null);
	const [sendMessage, setSendMessage] = useState(null);
	const [receivedMessage, setReceivedMessage] = useState(null);

	// Get Chats from the Socket Server
	useEffect(() => {
		const getChats = async () => {
			try {
				const { data } = await userChats(user._id);
				setChats(data);
			} catch (error) {
				console.log(error.message);
			}
		};
		if (user._id) getChats();
	}, [user._id]);

	// Connect to Socket.io
	useEffect(() => {
		socket.current = io('ws://localhost:8800');
		socket.current.emit('new-user-add', user._id);
		socket.current.on('get-users', (users) => {
			setOnlineUsers(users);
		});
	}, [user]);

	// Send Message to the Socket Server
	useEffect(() => {
		if (sendMessage !== null) socket.current.emit('send-message', sendMessage);
	}, [sendMessage]);

	// Receive Message from the Socket Server
	useEffect(() => {
		socket.current.on('receive-message', (data) => {
			setReceivedMessage(data);
		});
	}, []);

	const checkOnlineStatus = (chat) => {
		const chatMember = chat.members.find((member) => member !== user._id);
		const online = onlineUsers.find((user) => user.userId === chatMember);
		return online ? true : false;
	};

	return (
		<div className='chat'>
			{/* Lef Side */}
			<div className='left-side-chat'>
				<LogoSearch />
				<div className='chat-container'>
					<h2>Chats</h2>
					<div className='chat-list'>
						{chats.map((chat, id) => (
							<div key={id} onClick={() => setCurrentChat(chat)}>
								<Conversation
									chat={chat}
									currentUserId={user._id}
									receivedMessage={receivedMessage}
									online={checkOnlineStatus(chat)}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* Right Side */}
			<div className='right-side-chat'>
				<div className='nav-chat'>
					<NavIcons />
				</div>
				{/* Chat body */}
				<ChatBox
					chat={currentChat}
					currentUserId={user._id}
					setSendMessage={setSendMessage}
					receivedMessage={receivedMessage}
				/>
			</div>
		</div>
	);
};

export default Chat;
