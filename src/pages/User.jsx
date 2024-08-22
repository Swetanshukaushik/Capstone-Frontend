import React, { useState, useEffect } from 'react';
import axios from 'axios';
import urlConfig from './../../urlConfig';
import { List, ListItem, ListItemText } from '@mui/material';

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(urlConfig.All_USERS_URL);
        console.log(response);
        setUsers(response.data.message);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <List>
      {users?.map((user) => (
        <ListItem key={user.id}>
          <ListItemText primary={user.name} secondary={user.email} />
        </ListItem>
      ))}
    </List>
  );
}

export default User;