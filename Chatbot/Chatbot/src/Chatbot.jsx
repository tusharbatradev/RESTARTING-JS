import React, { useState } from 'react';
import axios from 'axios';
import image from './assets/image.png'

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const API_URL = 'https://api.aimlapi.com/v1/chat/completions';
  const API_KEY = '250cd3bb4ad047cf85b6bfa00bdb124e';

  const sendMessage = async (userMessage) => {
    try {
      const response = await axios.post(
        API_URL,
        {
          model: 'google/gemma-2-27b-it',
          messages: [
            {
              role: 'system',
              content: 'You are an AI assistant who knows everything.',
            },
            {
              role: 'user',
              content: userMessage,
            },
          ],
        },
        {
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const botMessage = response.data.choices[0].message.content;
      setMessages([...messages, { text: userMessage, user: 'user' }, { text: botMessage, user: 'bot' }]);
    } catch (error) {
      console.error('Error sending message:', error.response ? error.response.data : error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputMessage = e.target.elements.messageInput.value.trim();
    if (inputMessage) {
      sendMessage(inputMessage);
      setInput('');
    }
  };

  return (
    <div style={{
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-between',
        height : '70vh'
    }} className="chatbot">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user}`}>
            ~{msg.text}
          </div>
        ))}
      </div>
      <form style={{display : 'flex', flexDirection : 'row', justifyContent : 'space-around' ,padding : '4px'}} onSubmit={handleSubmit}>
        <input
          type="text"
          name="messageInput"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{height : '50px', width : '80%', borderRadius : '12px'}}
        />
        <button style={{
            height : '50px', 
            width : '10%', 
            textAlign : 'center',
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'center',
            backgroundColor : 'white',
            border : '1px solid black',
            borderRadius : '50%',
            }}  type="submit">
                <img width={'20px'} src={image} alt="" srcset="" />
            </button>
      </form>
    </div>
  );
};

export default Chatbot;
