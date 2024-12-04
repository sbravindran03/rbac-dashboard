import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Dashboard from "./components/Dashboard";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";

const App = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Execute"], active: true },
    { id: 2, name: "Editor", permissions: ["Read", "Write"], active: true },
  ]);

  const addRole = (newRole) => setRoles([...roles, newRole]);

  return (
    <Router>
      <Box>
        {/* Navbar */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              RBAC Dashboard
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Dashboard
            </Button>
            <Button color="inherit" component={Link} to="/users">
              User Management
            </Button>
            <Button color="inherit" component={Link} to="/roles">
              Role Management
            </Button>
          </Toolbar>
        </AppBar>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Dashboard totalUsers={totalUsers} roles={roles} />} />
          <Route
            path="/users"
            element={<UserManagement roles={roles} totalUsers={totalUsers} setTotalUsers={setTotalUsers} />}
          />
          <Route path="/roles" element={<RoleManagement roles={roles} addRole={addRole} />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
