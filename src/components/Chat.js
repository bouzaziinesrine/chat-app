import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import Send from "./Send";
import { db } from "../firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";

const style = {
	main: `
    flex 
    flex-col 
    p-[10px]
    max-h-[765px]
    overflow-y-auto 
    scrollbar-thin 
    scrollbar-thumb-gray-300 
    scrollbar-track-gray-100
  `,
};

const Chat = () => {
	const [messages, setMessages] = useState([]);
	const scroll = useRef();

	useEffect(() => {
		const q = query(collection(db, "messages"), orderBy("timestamp"));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			let messages = [];
			querySnapshot.forEach((doc) => {
				messages.push({ ...doc.data(), id: doc.id });
			});
			setMessages(messages);
		});
		return () => unsubscribe();
	}, []);

	return (
		<>
			<main className={style.main} ref={scroll}>
				{messages &&
					messages.map((message) => (
						<Message key={message.id} message={message} />
					))}
			</main>
			{/* Send Message Component */}
			<Send scroll={scroll} />
		</>
	);
};

export default Chat;
