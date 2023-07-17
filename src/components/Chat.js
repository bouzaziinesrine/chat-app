import React, {useState ,useEffect ,useRef} from 'react'
import Message from './Message'
import {  collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase'
import Send from './Send'

const style ={
    main:'flex flex-col p-[10px]',
}

const Chat = () => {
    const[messages,setMessages]=useState([]);
    const scroll = useRef();


    useEffect (() =>{
        const q = query(collection(db,'messages'),orderBy('timestamp'))
        const unsubscribe = onSnapshot(q,(QuerySnapshot) =>{
            let messages = []
            QuerySnapshot.forEach((doc) => {
                messages.push({...doc.data(),id: doc.id})

            })
            setMessages(messages)
        })
        return () => unsubscribe()
    },[])
    
  return (
   <div>
    <main className={style.main}>

            {messages && messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}

    </main>
    <Send scroll={scroll}/>
    <span ref={scroll}></span>
   </div>
  )
}

export default Chat
