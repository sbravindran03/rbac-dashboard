import React, { useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Box,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const UserManagement = ({ roles, totalUsers, setTotalUsers }) => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const addUser = (name, role) => {
    setUsers([...users, { id: Date.now(), name, role }]);
    setTotalUsers(totalUsers + 1);
    setNewUser("");
    setSelectedRole("");
  };

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setTotalUsers(totalUsers - 1);
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <TextField
          label="User Name"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Role</InputLabel>
          <Select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            displayEmpty
          >
            {roles.map((role) => (
              <MenuItem key={role.id} value={role.name}>
                {role.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            if (newUser && selectedRole) {
              addUser(newUser, selectedRole);
            } else {
              alert("Please provide a username and select a role!");
            }
          }}
        >
          Add User
        </Button>
      </Box>

      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{user.name}</Typography>
                <Typography>Role: {user.role}</Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => removeUser(user.id)}
                  sx={{ marginTop: "10px" }}
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UserManagement;
