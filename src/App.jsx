import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Core Components
import Layout from './core/components/Layout';
import PrivateRoute from './core/components/PrivateRoute';

// Auth Module
import Login from './modules/auth/pages/Login';
import Profile from './modules/auth/pages/Profile';

// HR Module
import AddEmployee from './modules/hr/pages/AddEmployee';

// Attendance Module
import AttendanceEmployee from './modules/attendance/pages/AttendanceEmployee';
import AttendanceAdmin from './modules/attendance/pages/AttendanceAdmin';

// Pharmacy Module
import PharmacyDashboard from './modules/pharmacy/pages/PharmacyDashboard';

// Clinical Module
import DoctorRequest from './modules/clinical/pages/DoctorRequest';
import NurseStation from './modules/clinical/pages/NurseStation';

// Simple Dashboard Component (Inline for now)
const Dashboard = () => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <h3 className="text-lg font-bold text-gray-800">Welcome to IMS Dashboard</h3>
    <p className="text-gray-600 mt-2">Select an option from the sidebar to begin.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute><Layout /></PrivateRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          
          {/* Attendance Module */}
          <Route path="/attendance" element={<AttendanceEmployee />} /> 
          <Route path="/admin-attendance" element={<AttendanceAdmin />} />
          
          {/* HR Module */}
          {/* Note: Matches the path defined in your new Layout.jsx */}
          <Route path="/hr/add-employee" element={<AddEmployee />} />
          
          {/* Pharmacy Module */}
          <Route path="/pharmacy" element={<PharmacyDashboard />} />
          
          {/* Clinical Module */}
          <Route path="/doctor-requests" element={<DoctorRequest />} />
          <Route path="/nurse-tasks" element={<NurseStation />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;