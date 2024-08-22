import { useEffect, useState } from 'react';
import { localhost } from '../../../urlConfig';
import { io } from 'socket.io-client';

const WebsocketShowcase = () => {
  const [socket, setSocket] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const socketConnection = io(localhost);
    setSocket(socketConnection);

    socketConnection.on('message_from_BE_server', () => {
      console.log('I am connected to BE socket');
    });

    socketConnection.on('item_message_from_BE', (value) => {
      setListItems((prevItems) => [...prevItems, value]);
    });

    socketConnection.on('serve_group_messages', (value) => {
      console.log('Serving group message: ', value);
    });

    return () => {
      socketConnection.disconnect();
    };
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddToList = () => {
    if (inputValue) {
      setListItems((prevItems) => [...prevItems, inputValue]);
      socket.emit('add_to_list_message', inputValue);
      setInputValue('');
    }
  };

  const handleCreateGroup = () => {
    console.log('create group req at FE');
    socket.emit('create_group', Math.random() * 1000);
  };

  const handleJoinGroup = () => {
    console.log('group join req at FE');
    socket.emit('join_room');
  };

  const handleSendToGroup = () => {
    if (inputValue) {
      socket.emit('group_message', inputValue);
    }
  };

  return (
    <>
      <h1>Websocket Showcase</h1>
      <button id="join_group" onClick={handleJoinGroup}>Join Group</button>
      <button id="create_group" onClick={handleCreateGroup}>Create Group</button>
      <button id="send_to_group" onClick={handleSendToGroup}>Send to Group</button>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button id="add_to_list" onClick={handleAddToList}>Add to List</button>
      <ul id="unordered_list">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default WebsocketShowcase;
