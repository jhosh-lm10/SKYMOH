import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

const ChatInbox: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('team-message', (msg: string) => {
      setMessages((prev) => [...prev, msg]);
    });
    socket.on('bot-reply', (msg: string) => {
      setMessages((prev) => [...prev, `Bot: ${msg}`]);
    });
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit('team-message', input);
      socket.emit('user-message', input);
      setMessages((prev) => [...prev, `Me: ${input}`]);
      setInput('');
    }
  };

  return (
    <div>
      <h2>Chat Inbox</h2>
      <div>
        {messages.map((m, idx) => (
          <div key={idx}>{m}</div>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatInbox;
