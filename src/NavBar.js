import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" style={{ background: "#1976d2" }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          RBAC Dashboard
        </Typography>
        <Button color="inherit" onClick={() => navigate("/")}>
          Dashboard
        </Button>
        <Button color="inherit" onClick={() => navigate("/user-management")}>
          Users
        </Button>
        <Button color="inherit" onClick={() => navigate("/role-management")}>
          Roles
        </Button>
        <Button color="inherit" onClick={() => navigate("/permissions")}>
          Permissions
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
