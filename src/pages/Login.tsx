import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Heart } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="card w-96">
        <div className="card2">
          <form className="form" onSubmit={handleLogin}>
            <p id="heading" className="flex items-center justify-center gap-2">
              <Heart className="text-pink-500" /> Login <Heart className="text-pink-500" />
            </p>
            <div className="field">
              <input
                type="email"
                className="input-field"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field">
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="btn">
              <button type="submit" className="button1">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;