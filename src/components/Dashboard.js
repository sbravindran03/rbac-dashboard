import React from "react";
import { Typography, Grid, Card, CardContent, CardMedia, Button, Box } from "@mui/material";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      {/* Welcome Section */}
      <Typography variant="h4" gutterBottom>
        Welcome to the RBAC Dashboard
      </Typography>
      <Typography variant="body1" gutterBottom>
        Manage users, roles, and permissions efficiently with this dashboard.
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Users</Typography>
              <Typography variant="h4" style={{ marginTop: "10px" }}>
                120
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Active Roles</Typography>
              <Typography variant="h4" style={{ marginTop: "10px" }}>
                8
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Permissions Configured</Typography>
              <Typography variant="h4" style={{ marginTop: "10px" }}>
                35
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Featured Section */}
      <Box style={{ marginTop: "40px" }}>
        <Typography variant="h5" gutterBottom>
          Quick Actions
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://tse2.mm.bing.net/th?id=OIG3.E7EfPY_2H91qQDD14aue&pid=ImgGn"
                alt="Manage Users"
              />
              <CardContent>
                <Typography variant="h6">Manage Users</Typography>
                <Typography variant="body2" color="text.secondary">
                  Add, edit, or delete users and assign roles.
                </Typography>
              </CardContent>
              <Button size="small" variant="contained" color="primary" style={{ margin: "10px" }}>
                Go to User Management
              </Button>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://tse4.mm.bing.net/th?id=OIG1.GF924HzJHtlPQmK4Ro2m&pid=ImgGn"
                alt="Manage Roles"
              />
              <CardContent>
                <Typography variant="h6">Manage Roles</Typography>
                <Typography variant="body2" color="text.secondary">
                  Configure roles and assign permissions dynamically.
                </Typography>
              </CardContent>
              <Button size="small" variant="contained" color="secondary" style={{ margin: "10px" }}>
                Go to Role Management 
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Dashboard;
