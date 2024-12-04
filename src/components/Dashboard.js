import React from "react";
import { Typography, Grid, Card, CardContent } from "@mui/material";

const Dashboard = ({ totalUsers, roles }) => {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the RBAC Dashboard
      </Typography>
      <Typography variant="body1" gutterBottom>
        Manage users, roles, and permissions efficiently.
      </Typography>

      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Users</Typography>
              <Typography variant="h4" style={{ marginTop: "10px" }}>
                {totalUsers}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Active Roles</Typography>
              <Typography variant="h4" style={{ marginTop: "10px" }}>
                {roles.filter((role) => role.active).length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
