import React from "react";
import { NavLink } from "react-router-dom";
import { List, ListItem, ListItemText, Typography, Box } from "@mui/material";
import { Dashboard, Group, Security } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "240px",
        backgroundColor: "#2C2F33",
        color: "#FFFFFF",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
        RBAC System
      </Typography>
      <List>
        <ListItem button component={NavLink} to="/" sx={{ color: "#FFFFFF" }}>
          <Dashboard sx={{ marginRight: "10px" }} />
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={NavLink} to="/users" sx={{ color: "#FFFFFF" }}>
          <Group sx={{ marginRight: "10px" }} />
          <ListItemText primary="User Management" />
        </ListItem>
        <ListItem button component={NavLink} to="/roles" sx={{ color: "#FFFFFF" }}>
          <Security sx={{ marginRight: "10px" }} />
          <ListItemText primary="Role Management" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
