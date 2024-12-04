import React from 'react';
import { Typography, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const RoleManagement = () => {
  const roles = [
    { id: 1, name: 'Admin', permissions: 'Read, Write, Delete' },
    { id: 2, name: 'Editor', permissions: 'Read, Write' },
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Role Management
      </Typography>
      <Button variant="contained" color="primary" style={{ marginBottom: '20px' }}>
        Add Role
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Role Name</TableCell>
            <TableCell>Permissions</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map((role) => (
            <TableRow key={role.id}>
              <TableCell>{role.name}</TableCell>
              <TableCell>{role.permissions}</TableCell>
              <TableCell>
                <Button variant="outlined" color="secondary">
                  Edit
                </Button>
                <Button variant="outlined" color="error" style={{ marginLeft: '10px' }}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RoleManagement;
