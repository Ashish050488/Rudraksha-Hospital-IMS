import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../../config/api.js';

const Login = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch(`${API_BASE_URL}/api/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ employeeId, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate('/profile');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) { setError('Cannot connect to server.'); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md border-t-4 border-primary">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Hospital IMS</h2>
        {error && <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm">{error}</div>}
        <form onSubmit={handleLogin} className="space-y-6">
          <div><label className="block text-sm font-medium text-gray-700">Employee ID</label><input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-secondary border border-accent rounded-md text-primary focus:outline-none focus:ring-2 focus:ring-primary" placeholder="e.g. ADMIN-001" required /></div>
          <div><label className="block text-sm font-medium text-gray-700">Password</label><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-secondary border border-accent rounded-md text-primary focus:outline-none focus:ring-2 focus:ring-primary" placeholder="••••••••" required /></div>
          <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-opacity-90 transition duration-150">Sign In</button>
        </form>
      </div>
    </div>
  );
};
export default Login;