import React from "react";
import { auth } from "../firebase";

const style = {
	message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
	nameSent: `text-gray-600 text-xs text-end`,
	nameReceived: `text-gray-600 text-xs text-start`,
	sent: `bg-[#395dff] text-white flex-row text-start float-right rounded-bl-full`,
	received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

const Message = ({ message }) => {
	const messageClass =
		message.uid === auth.currentUser.uid
			? `${style.sent}`
			: `${style.received}`;

	const mameClass =
		message.uid === auth.currentUser.uid
			? `${style.nameSent}`
			: `${style.nameReceived}`;

	return (
		<div>
			<p className={`${style.name} ${mameClass} `}>{message.name}</p>
			<div className={`${style.message} ${messageClass}`}>
				<p>{message.text}</p>
			</div>
		</div>
	);
};

export default Message;
