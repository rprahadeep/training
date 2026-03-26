import { useEffect, useState } from "react";

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
    ws.onopen = () => {
        console.log("WebSocket connection established");
    }
    
    ws.onmessage = (event) => {
        setMessages((prev) => [...prev, event.data]);
    }

    ws.onclose = () => {
        console.log("WebSocket connection closed");
    }
    setSocket(ws);

    return () => {ws.close()};
  }, [])

  const sendMessage = () => {
    if(input.trim() && socket) {
        socket.send(input);
        setInput("");
    }
  }

  return (
    <>
    <div className="chat-box">
        {messages.map((msg, index) => (
            <p key={index}>{msg}</p>
        ))}
    </div>
    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter message"></input>
    <button onClick={sendMessage}>Send</button>
    </>
  )
}

export default Chat