import React, { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'سلام! خوش اومدی', sender: 'علی' },
    { id: 2, text: 'ممنون، حالت چطوره؟', sender: 'من' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        text: newMessage,
        sender: 'من'
      }]);
      setNewMessage('');
    }
  };

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '50px auto', 
      fontFamily: 'Tahoma',
      border: '1px solid #ccc',
      borderRadius: '10px',
      overflow: 'hidden'
    }}>
      <div style={{ 
        background: '#0088cc', 
        color: 'white', 
        padding: '15px',
        textAlign: 'center'
      }}>
        <h2>چت ساده</h2>
      </div>

      <div style={{ 
        height: '400px', 
        overflowY: 'auto', 
        padding: '20px',
        background: '#f5f5f5'
      }}>
        {messages.map(msg => (
          <div key={msg.id} style={{
            background: msg.sender === 'من' ? '#dcf8c6' : 'white',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '8px',
            textAlign: msg.sender === 'من' ? 'left' : 'right'
          }}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div style={{ 
        display: 'flex', 
        padding: '10px',
        background: 'white'
      }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="پیام خود را بنویسید..."
          style={{
            flex: 1,
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginLeft: '10px'
          }}
        />
        <button 
          onClick={sendMessage}
          style={{
            padding: '10px 20px',
            background: '#0088cc',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          ارسال
        </button>
      </div>
    </div>
  );
}

export default App;
