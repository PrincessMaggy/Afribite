import React, { useState } from 'react';
import { MdMail, MdLock, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthenticationContext';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn, signInWithGoogle, signInWithApple } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signIn(email, password);
      navigate('/Adminhome/Dashboard');
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          setError("No account found with this email. Please check your email or sign up.");
          break;
        case 'auth/wrong-password':
          setError("Incorrect password. Please try again or reset your password.");
          break;
        case 'auth/invalid-email':
          setError("Invalid email format. Please enter a valid email address.");
          break;
        case 'auth/user-disabled':
          setError("This account has been disabled. Please contact support.");
          break;
        case 'auth/too-many-requests':
          setError("Too many failed attempts. Please try again later or reset your password.");
          break;
        default:
          setError("An error occurred during sign-in. Please try again later.");
      }
    }
  };


  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate('/Adminhome');
    } catch (error) {
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          setError("The sign-in window was closed. Please try again.");
          break;
        case 'auth/cancelled-popup-request':
          setError("The sign-in request was cancelled. Please try again.");
          break;
        case 'auth/popup-blocked':
          setError("The pop-up window was blocked by your browser. Please allow pop-ups for this site and try again.");
          break;
        case 'auth/account-exists-with-different-credential':
          setError("An account already exists with the same email address but different sign-in credentials. Please sign in using the original method.");
          break;
        default:
          setError("An error occurred during Google sign-in. Please try again later.");
      }
    }
  };

  const handleAppleSignIn = async () => {
    try {
      await signInWithApple();
      navigate('/Adminhome/Dashboard');
    } catch (error) {
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          setError("The sign-in window was closed. Please try again.");
          break;
        case 'auth/cancelled-popup-request':
          setError("The sign-in request was cancelled. Please try again.");
          break;
        default:
          setError("An error occurred during Apple sign-in. Please try again later.");
      }
    }
  };

  return (
    <div className="flex flex-row h-screen min-h-screen overflow-auto">
      <div className="hidden md:block h-full md:w-1/2 bg-cover" style={{ backgroundImage: "url('/Sign_background.jpg')" }}></div>
      <div className="w-full md:w-1/2 h-full bg-gradient-to-b from-neutral-900 from-70% via-neutral-900 to-slate-600 to-100% text-white p-4 md:p-8 flex flex-col justify-center overflow-auto">
        <div className="w-full md:px-4 py-8 md:py-12 my-4 mx-auto max-w-md">
          <div className=''>
            <span className='mb-20'>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-center">Welcome to AfriBite!</h1>
              <h2 className="text-lg md:text-xl mb-4 md:mb-8 text-center">Sign in</h2>
            </span>

            <form onSubmit={handleSubmit} className="space-y-4">
              <span className='my-12'>
                <span className='my-4 block'>Email</span>
                <div className="relative">
                  <MdMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-transparent border border-gray-600 text-white w-full p-2 rounded"
                    required
                  />
                </div>
              </span>

              <span className='my-2'>
                <span className='mt-10 mb-4 block'>Password</span>
                <div className="relative">
                  <MdLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 bg-transparent border border-gray-600 text-white w-full p-2 rounded"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? (
                      <MdVisibility className="text-gray-400" size={24} />
                    ) : (
                      <MdVisibilityOff className="text-gray-400" size={24} />
                    )}
                  </button>
                </div>
                <div className='flex justify-end mt-1 hover:text-white/30 transition-all'>
                  <Link to="#" >Forgot password ?</Link>
                </div>
              </span>

              {error && <p className="text-red-500 text-center text-sm">{error}</p>}

              <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white p-2 rounded">
                Sign in
              </button>
            </form>

            <div className="mt-4 text-center flex items-center justify-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="mx-4 text-gray-400 font-bold text-xl">or</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <div className="mt-4 w-full flex justify-center">
              <div className="flex space-x-4 w-40">
                <button  onClick={handleAppleSignIn}  className="border border-red-500 bg-transparent text-white w-16 h-16 hover:bg-neutral-50/10 rounded-full transition-all flex items-center justify-center">
                  <FaApple className="text-white hover:text-gray-500" size={24} />
                </button>
                <button 
                  onClick={handleGoogleSignIn}
                  className="border border-red-500 bg-transparent text-white w-16 h-16 hover:bg-neutral-50/10 rounded-full flex items-center justify-center"
                >
                  <FcGoogle className="text-white" size={24} />
                </button>
              </div>
            </div>

            <p className="mt-6 text-center text-gray-400">
              New User? <Link to="/Sign-up" className="text-red-500 hover:underline">Sign up</Link> 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
