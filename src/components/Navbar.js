import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          RBAC Dashboard
        </Typography>
        <Box display="flex">
          <Button color="inherit" component={Link} to="/">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/users">
            User Management
          </Button>
          <Button color="inherit" component={Link} to="/roles">
            Role Management
          </Button>
          <Button color="inherit" component={Link} to="/settings">
            Settings
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
