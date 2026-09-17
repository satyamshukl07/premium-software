import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext.jsx';
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  UserCheck,
  AlertCircle,
  Loader2,
  Building,
  UserPlus,
  ExternalLink,
} from 'lucide-react';
import TechtonikaLogo from '../components/TechtonikaLogo.jsx';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, login, logout, isAuthenticated } = useUserAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successNotice, setSuccessNotice] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessNotice('');
    setLoading(true);

    const cleanEmail = email.trim();
    const cleanPassword = password.trim();

    if (!cleanEmail || !cleanPassword) {
      setErrorMessage('Please enter both your email address and password.');
      setLoading(false);
      return;
    }

    try {
      const res = await login(cleanEmail, cleanPassword);
      if (res.success) {
        setSuccessNotice('Login successful! Welcome back.');
      } else {
        setErrorMessage(res.message || 'Invalid email or password. Please try again.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setErrorMessage('Network connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fillDemoAccount = () => {
    setEmail('demo@techtonika.com.au');
    setPassword('techtonika123');
    setErrorMessage('');
  };

  return (
    <div className="bg-[#0b1320] min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-md w-full space-y-6 bg-[#111c2e] p-7 sm:p-9 rounded-3xl border border-slate-700/80 shadow-2xl relative">
        {/* Brand Header */}
        <div className="text-center space-y-2.5">
          <div className="flex justify-center">
            <Link to="/">
              <TechtonikaLogo variant="dark" className="h-11 w-auto" />
            </Link>
          </div>
          <h1 className="text-2xl font-black tracking-tight text-white">
            Customer Portal Sign In
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Sign in to access your automotive operations database, fleet bookings, and sync.
          </p>
        </div>

        {isAuthenticated && user ? (
          /* Logged In Screen */
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-[#0b1320] p-6 rounded-2xl border border-slate-800 space-y-3 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                <UserCheck className="w-8 h-8" />
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-1.5">
                  Authenticated User
                </span>
                <h2 className="font-extrabold text-lg text-white">{user.name}</h2>
                <p className="text-xs text-slate-400">{user.email}</p>
                {user.company && (
                  <p className="text-xs text-slate-300 font-medium mt-1 flex items-center justify-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>{user.company}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2.5 text-xs">
              <Link
                to="/"
                className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all cursor-pointer"
              >
                <span>Browse Website as Logged-In User</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/free-trial"
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                <span>Launch CMMS Free Sandbox</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>

              <button
                type="button"
                onClick={logout}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-red-950/40 text-slate-400 hover:text-red-300 font-semibold border border-slate-800 transition-colors cursor-pointer"
              >
                Sign Out of This Session
              </button>
            </div>
          </div>
        ) : (
          /* Sign In Form */
          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            {/* Success notification */}
            {successNotice && (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{successNotice}</span>
              </div>
            )}

            {/* Error banner */}
            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Quick Demo Helper */}
            <div className="bg-sky-950/40 border border-sky-800/50 p-3 rounded-xl flex items-center justify-between text-sky-200 text-[11px]">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Need a quick test login?</span>
              </div>
              <button
                type="button"
                onClick={fillDemoAccount}
                className="px-2.5 py-1 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-[10px] cursor-pointer transition-colors shadow-xs"
              >
                Fill Demo Credentials
              </button>
            </div>

            {/* Email Field */}
            <div>
              <label className="font-bold text-slate-300 block mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#0b1320] border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-red-500 transition-colors"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="font-bold text-slate-300 block mb-1">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-9 py-2.5 bg-[#0b1320] border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-red-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2.5 top-3 text-slate-400 hover:text-slate-200"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all cursor-pointer disabled:opacity-50 mt-1"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Callout to SIGN UP */}
            <div className="pt-4 border-t border-slate-800 text-center space-y-2">
              <p className="text-slate-400">Don't have an account yet?</p>
              <Link
                to="/signup"
                className="w-full py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-bold flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                <UserPlus className="w-4 h-4 text-red-400" />
                <span>Create New Account / Sign Up</span>
              </Link>
            </div>
          </form>
        )}

        {/* Back link & Admin Portal Link */}
        <div className="pt-2 text-center flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-800/60">
          <Link to="/" className="hover:text-slate-300 transition-colors">
            ← Return to Home
          </Link>
          <Link to="/admin/login" className="hover:text-red-400 transition-colors flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Admin Console</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
