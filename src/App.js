import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Dashboard from "./components/Dashboard";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";
import Permissions from "./components/Permissions";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/role-management" element={<RoleManagement />} />
        <Route path="/permissions" element={<Permissions />} />
      </Routes>
    </div>
  );
};

export default App;
