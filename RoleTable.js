import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

const RoleTable = ({ roles, onEdit, onDelete }) => {
  return (
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
              <Button variant="outlined" color="secondary" onClick={() => onEdit(role)}>
                Edit
              </Button>
              <Button
                variant="outlined"
                color="error"
                style={{ marginLeft: '10px' }}
                onClick={() => onDelete(role.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RoleTable;
