import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const handleLogin = () => {
    login();
    const from = location.state?.from?.pathname || '/profile';
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>
        Login (Demo)
      </button>
    </div>
  );
};

export default Login;
