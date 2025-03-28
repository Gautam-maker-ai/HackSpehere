import React, { useState ,useEffect } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { useNavigate } from 'react-router-dom';
import GithubAuth from './GithubAuth';
import Layout from './Layout';
import Navigation from '../components/Navigation';

function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [authMethod, setAuthMethod] = useState<'form' | 'github'>('form');
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [githubCredentials, setGithubCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsLogin(!isLogin);
      setIsAnimating(false);
    }, 300);
  };

  const handleAuthMethodChange = (method: 'form' | 'github') => {
    setAuthMethod(method);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email/password authentication here
    console.log('Credentials:', credentials);
 
};

  const handleGithubSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle GitHub authentication here
    console.log('GitHub credentials:', githubCredentials);
  };
  return (
    <Layout>
       <Navigation /> 
    <div className="min-h-screen bg-black relative pt-20 flex items-center justify-center p-4 overflow-hidden">

      {/* Animated background gradients */}
      <div className="absolute inset-0  overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className={`absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-red-500/30 rounded-full blur-3xl transform -translate-y-1/2 transition-all duration-1000 ease-in-out ${isAnimating ? 'scale-110' : 'scale-100'}`} />
          <div className={`absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-white-500/20 rounded-full blur-3xl transition-all duration-1000 ease-in-out ${isAnimating ? 'scale-90' : 'scale-100'}`} />
          <div className={`absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-black-/20 rounded-full blur-3xl transition-all duration-1000 ease-in-out ${isAnimating ? 'scale-105' : 'scale-100'}`} />
        </div>
      </div>

      <div className="relative w-full max-w-md overflow-hidden">
        <div className="relative bg-black/50 backdrop-blur-xl rounded-2xl shadow-2xl border-[1px] border-white/40 p-8">
          <div className={`transform transition-all duration-500 ease-in-out ${
            authMethod !== 'form' ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'
          }`}>
            {isLogin ? (
              <Login 
                onToggleForm={toggleForm} 
                onAuthMethodChange={handleAuthMethodChange}
              />
            ) : (
              <SignUp 
                onToggleForm={toggleForm} 
                onAuthMethodChange={handleAuthMethodChange}
              />
            )}
          </div>

          <div className={`absolute top-0 left-0 w-full h-full transform transition-all duration-500 ease-in-out ${
            authMethod === 'github' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <GithubAuth 
              isLogin={isLogin} 
              onBack={() => handleAuthMethodChange('form')}
            />
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default LoginForm;