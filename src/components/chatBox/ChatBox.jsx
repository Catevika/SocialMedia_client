import React, { useState, useEffect, useRef } from 'react';

import InputEmoji from 'react-input-emoji';
import { addMessage, getMessages } from '../../api/messageRequest';
import { getUser } from '../../api/userRequest';
import '../followersCard/FollowersCard.css';
import './ChatBox.css';

import moment from 'moment';

const ChatBox = ({ chat, currentUserId, setSendMessage, receivedMessage }) => {
	const [userData, setUserData] = useState(null);
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState('');
	const scroll = useRef();
	const imageRef = useRef();

	const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

	const handleChange = (newMessage) => {
		setNewMessage(newMessage);
	};

	// Fectch receiver data for Chat box header
	useEffect(() => {
		const userId = chat?.members?.find((id) => id !== currentUserId);
		const getUserData = async () => {
			try {
				const { data } = await getUser(userId);
				setUserData(data);
			} catch (error) {
				console.log(error.message);
			}
		};
		if (chat !== null) getUserData();
	}, [chat, currentUserId]);

	// Fetch Messages
	useEffect(() => {
		const fetchMessages = async () => {
			try {
				const { data } = await getMessages(chat._id);
				setMessages(data);
			} catch (error) {
				console.log(error.message);
			}
		};
		if (chat !== null) fetchMessages();
	}, [chat]);

	// Always scroll to the last message
	useEffect(() => {
		scroll.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

	// Send message
	const handleSend = async (e) => {
		e.preventDefault();
		const message = {
			senderId: currentUserId,
			text: newMessage,
			chatId: chat._id
		};
		console.log(message);
		// Send message to socket server
		const receiverId = chat.members.find((id) => id !== currentUserId);
		setSendMessage({ ...message, receiverId });

		// Send message to database
		try {
			const { data } = await addMessage(message);
			setMessages([...messages, data]);
			setNewMessage('');
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		// Receive Message
		if (!receivedMessage) {
			setMessages((messages) => messages);
		} else {
			setMessages((messages) => [...messages, receivedMessage]);
			console.log('Message Arrived: ', receivedMessage);
		}
	}, [receivedMessage]);

	return (
		<>
			{chat ? (
				<div className='chatBox-container'>
					{/* Chat header */}
					<div className='chat-header'>
						<div className='follower'>
							<div>
								<img
									src={
										userData?.profilePicture
											? serverPublic + userData.profilePicture
											: serverPublic + 'defaultProfile.png'
									}
									alt=''
									className='followerImage-chat'
								/>
								<div className='name name-chat'>
									<span>
										{userData?.firstName} {userData?.lastName}
									</span>
								</div>
							</div>
						</div>
						<hr />
					</div>
					{/* ChatBox Messages */}
					<div className='chat-body'>
						{messages.map((message, id) => {
							return (
								<div
									ref={scroll}
									key={id}
									className={
										message.senderId === currentUserId
											? 'message own'
											: 'message'
									}
								>
									<span>{message.text}</span>
									<span>{moment(message.createdAt).fromNow()}</span>
								</div>
							);
						})}
					</div>
					{/* Chat Sender */}
					<div className='chat-sender'>
						<div onClick={() => imageRef.current.click()}>+</div>
						<InputEmoji value={newMessage} onChange={handleChange} />
						<div className='btn' onClick={handleSend}>
							Send
						</div>
						<input
							type='file'
							name=''
							id=''
							style={{ display: 'none' }}
							ref={imageRef}
						/>
					</div>
				</div>
			) : (
				<div className='chatBox-container'>
					<span className='chatbox-empty-message'>
						Tap on a chat to start the conversation...
					</span>
				</div>
			)}
		</>
	);
};

export default ChatBox;
