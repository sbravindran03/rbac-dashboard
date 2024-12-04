import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: '200px', backgroundColor: '#f4f4f4', height: '100vh' }}>
      <List>
        <ListItem>
          <Link to="/dashboard"><ListItemText primary="Dashboard" /></Link>
        </ListItem>
        <ListItem>
          <Link to="/users"><ListItemText primary="User Management" /></Link>
        </ListItem>
        <ListItem>
          <Link to="/roles"><ListItemText primary="Role Management" /></Link>
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
