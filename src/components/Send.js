import React, { useState } from 'react'
import {auth, db} from '../firebase.jsx'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';




const style  ={
    form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
    input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
    button: `w-[20%] bg-purple-500`,
}

const Send = ({scroll}) => {
    const [input , setInput]= useState('');
    
    const Send = async (e) => {
			e.preventDefault();
			if (input === "") {
				alert("Please enter a message");
				return;
			}
			const { uid, displayName } = auth.currentUser;
			await addDoc(collection(db, "messages"), {
				text: input,
				name: displayName,
				uid,
				timestamp: serverTimestamp(),
			});
			setInput("");
			scroll.current.scrollIntoView({ behavior: "smooth" });
		};

		return (
			<form onSubmit={Send} className={style.form}>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className={style.input}
					type="text"
					placeholder="Message"
				/>
				<button className={style.button} type="submit">
					Send
				</button>
			</form>
		);
}

export default Send