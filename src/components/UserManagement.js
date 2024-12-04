import React, { useState } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Select,
  MenuItem,
  Paper,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const UserManagement = ({ updateTotalUsers }) => {
  // Mock data
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
    { id: 3, name: "Mark Lee", email: "mark@example.com", role: "Viewer" },
  ]);
  const [roles] = useState(["Admin", "Editor", "Viewer"]);

  // Dialog state
  const [openDialog, setOpenDialog] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isAddingUser, setIsAddingUser] = useState(false);

  // Open dialog for adding/editing
  const handleOpenAddUser = () => {
    setCurrentUser({ name: "", email: "", role: "Viewer" });
    setIsAddingUser(true);
    setOpenDialog(true);
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    setIsAddingUser(false);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setCurrentUser(null);
  };

  // Save user (add or update)
  const handleSave = () => {
    if (isAddingUser) {
      setUsers((prev) => [
        ...prev,
        { ...currentUser, id: prev.length + 1 },
      ]);
      updateTotalUsers(users.length + 1);
    } else {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === currentUser.id ? { ...currentUser } : user
        )
      );
    }
    handleClose();
  };

  // Delete user
  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    updateTotalUsers(updatedUsers.length);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>
      <Typography variant="body1" gutterBottom>
        Here you can manage users: Add, Edit, or Delete them.
      </Typography>

      {/* Add User Button */}
      <Button
        variant="contained"
        color="primary"
        style={{ margin: "10px 0" }}
        onClick={handleOpenAddUser}
      >
        Add User
      </Button>

      {/* User Table */}
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Role</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(user)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDelete(user.id)}
                    color="secondary"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for Adding/Editing User */}
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>{isAddingUser ? "Add User" : "Edit User"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            margin="dense"
            value={currentUser?.name || ""}
            onChange={(e) =>
              setCurrentUser({ ...currentUser, name: e.target.value })
            }
          />
          <TextField
            label="Email"
            fullWidth
            margin="dense"
            value={currentUser?.email || ""}
            onChange={(e) =>
              setCurrentUser({ ...currentUser, email: e.target.value })
            }
          />
          <Select
            fullWidth
            value={currentUser?.role || ""}
            onChange={(e) =>
              setCurrentUser({ ...currentUser, role: e.target.value })
            }
            style={{ marginTop: "10px" }}
          >
            {roles.map((role) => (
              <MenuItem key={role} value={role}>
                {role}
              </MenuItem>
            ))}
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserManagement;
