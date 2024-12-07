import React, { useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const RoleManagement = ({ roles, addRole, deleteRole }) => {
  const [open, setOpen] = useState(false);
  const [newRole, setNewRole] = useState({ name: "", permissions: [], active: false });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddRole = () => {
    addRole({ ...newRole, id: Date.now() });
    setNewRole({ name: "", permissions: [], active: false });
    handleClose();
  };

  const togglePermission = (permission) => {
    setNewRole((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(permission)
        ? prev.permissions.filter((perm) => perm !== permission)
        : [...prev.permissions, permission],
    }));
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Role Management
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        Add Role
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Role</DialogTitle>
        <DialogContent>
          <TextField
            label="Role Name"
            fullWidth
            value={newRole.name}
            onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
          />
          <Typography>Permissions</Typography>
          {["Read", "Write", "Execute"].map((perm) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={newRole.permissions.includes(perm)}
                  onChange={() => togglePermission(perm)}
                />
              }
              label={perm}
              key={perm}
            />
          ))}
          <FormControlLabel
            control={
              <Checkbox
                checked={newRole.active}
                onChange={() => setNewRole((prev) => ({ ...prev, active: !prev.active }))}
              />
            }
            label="Active"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddRole}>Add</Button>
        </DialogActions>
      </Dialog>
      <Grid container spacing={3} sx={{ marginTop: "20px" }}>
        {roles.map((role) => (
          <Grid item xs={12} sm={6} md={4} key={role.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{role.name}</Typography>
                <Typography>Permissions: {role.permissions.join(", ")}</Typography>
                <Typography>{role.active ? "Active" : "Inactive"}</Typography>
                <Button 
                  variant="outlined" 
                  color="error" 
                  onClick={() => deleteRole(role.id)}
                  sx={{ marginTop: 2 }}
                >
                  Delete Role
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RoleManagement;