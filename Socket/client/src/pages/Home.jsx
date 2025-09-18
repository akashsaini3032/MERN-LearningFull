// import React, { useEffect, useState } from 'react';
// import { io } from 'socket.io-client';
// const socket = io("http://localhost:5000"); // Connect to backend
// const Home=()=>{
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);
//    const sendMessage = () => {
//     if (message.trim() === "") return;
//     socket.emit("send_message", { message });
//     setChat((prev) => [...prev, { message }]);
//     setMessage("");
//   };
//   useEffect(() => {
//     socket.on("receive_message", (data) => {
//       setChat((prev) => [...prev, data]);
//     });
//     return () => socket.off("receive_message");
//   }, []);
//     return(
//         <>
//             <h1> Welcome To Cybrom!</h1>
//              <div style={{ padding: 20 }}>
//       <h2>Socket.IO Chat</h2>
//       <div style={{ border: "1px solid #ccc", height: 200, overflowY: "scroll", padding: 10 }}>
//         {chat.map((msg, i) => (
//           <p key={i}>{msg.message}</p>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Type message"
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//         </>
//     )
// }
// export default Home;



// import React, { useEffect, useState } from 'react';
// import { io } from 'socket.io-client';


// const socket = io("http://localhost:5000");

// const Home = () => {
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);

//   const sendMessage = () => {
//     if (message.trim() === "") return;
//     socket.emit("send_message", { message });
//     setChat((prev) => [...prev, { message }]);
//     setMessage("");
//   };

//   useEffect(() => {
//     socket.on("receive_message", (data) => {
//       setChat((prev) => [...prev, data]);
//     });
//     return () => socket.off("receive_message");
//   }, []);

//   return (
//     <div className="cybrom-chat-wrapper">
//       <h1> Welcome To Cybrom!</h1>
//       <div className="chat-container">
//         <h2>Socket.IO Chat</h2>
//         <div className="chat-box">
//           {chat.map((msg, i) => (
//             <p key={i}>{msg.message}</p>
//           ))}
//         </div>
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Type message"
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Home;



import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';


const socket = io("http://localhost:5000");

const Home = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (message.trim() === "") return;
    socket.emit("send_message", { message });
    setChat((prev) => [...prev, { message }]);
    setMessage("");
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });
    return () => socket.off("receive_message");
  }, []);

  return (
    <div className="cybrom-chat-dark">
      <h1>🚀 Made BY Akash Saini!</h1>
      <div className="chat-container">
        <h2>💬 Socket.IO Chat IN MERN</h2>
        <div className="chat-box">
          {chat.map((msg, i) => (
            <p key={i}>{msg.message}</p>
          ))}
        </div>
        <div className="input-area">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

