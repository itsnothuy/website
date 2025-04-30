'use client';

import { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I am Jade, Huy&apos; personal AI assistant. How can I help you today?",
    },
  ]);

  const [message, setMessage] = useState('');

  // Handle Sending Messages
  const sendMessage = async () => {
    if (message.trim() === '') return;

    setMessages((messages) => [
      ...messages,
      { role: 'user', content: message },
      { role: 'assistant', content: '' }, // Placeholder removed
    ]);

    setMessage('');

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([...messages, { role: 'user', content: message }]),
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    await reader.read().then(function processText({ done, value }) {
      if (done) return;

      const text = decoder.decode(value, { stream: true });
      setMessages((messages) => {
        let lastMessage = messages[messages.length - 1];
        let otherMessages = messages.slice(0, messages.length - 1);
        return [
          ...otherMessages,
          {
            ...lastMessage,
            content: lastMessage.content + text,
          },
        ];
      });
      return reader.read().then(processText);
    });
  };

  // Handle Enter Key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-md border border-gray-200 shadow-sm bg-white">
      {/* Chat Messages */}
      <div className="h-80 overflow-y-auto p-4 space-y-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.role === 'assistant' ? 'text-left' : 'text-right'
            }`}
          >
            <p
              className={`inline-block px-3 py-1 text-sm rounded-md ${
                message.role === 'assistant'
                  ? 'bg-gray-100 text-gray-700'
                  : 'bg-blue-500 text-white'
              }`}
            >
              {message.content}
            </p>
          </div>
        ))}
      </div>

      {/* Input Field */}
      <div className="flex items-center border-t border-gray-200 p-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything..."
          className="flex-1 p-2 text-sm border-none focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-1 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
