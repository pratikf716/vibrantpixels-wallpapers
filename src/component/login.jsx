import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? 'http://localhost:5000/api/login' : 'http://localhost:5000/api/signup';
    
    try {
      const response = await axios.post(endpoint, { username, password });
      alert(response.data.message); 
      navigate('/'); 
    } catch (error) {
      alert(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="login-container" style={{ margin: '50px auto', maxWidth: '400px', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <h2>{isLogin ? 'Login' : 'Create Account'}</h2><br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          /><br />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div><br />
        <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Create Account'}</button>
      </form>
      <p style={{ marginTop: '10px', cursor: 'pointer' }} onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Don't have an account? Create one" : 'Already have an account? Login'}
      </p>
    </div>
  );
}

export default Login;
