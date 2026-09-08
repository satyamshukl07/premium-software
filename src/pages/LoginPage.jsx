import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, Mail, Key, ShieldCheck, ArrowRight, CheckCircle2, UserCheck, AlertCircle } from 'lucide-react';
import TechtonikaLogo from '../components/TechtonikaLogo.jsx';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('demo@mex.com.au');
  const [password, setPassword] = useState('mex12345');
  const [loading, setLoading] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [rememberMe, setRememberMe] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setLoggedInUser({
        name: 'David Richardson',
        role: 'Plant Maintenance Supervisor',
        company: 'Apex Industrial Processing',
        email: email,
      });
    }, 600);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div className="bg-[#0b1320] min-h-[80vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-md w-full space-y-8 bg-[#111c2e] p-8 rounded-3xl border border-slate-700/80 shadow-2xl relative">
        {/* Brand Header */}
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <Link to="/">
              <TechtonikaLogo variant="dark" className="h-12 w-auto" />
            </Link>
          </div>
          <h2 className="text-xl font-bold text-slate-100">Customer Portal & Cloud Access</h2>
          <p className="text-xs text-slate-400">
            Sign in to access your automotive operations database, fleet bookings, and mobile sync.
          </p>
        </div>

        {loggedInUser ? (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="bg-[#0b1320] p-5 rounded-2xl border border-slate-800 space-y-3 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <UserCheck className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">{loggedInUser.name}</h4>
                <p className="text-xs text-slate-400">{loggedInUser.role}</p>
                <span className="text-[11px] font-mono text-emerald-400 mt-1 block">
                  {loggedInUser.company} • Online
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <Link
                to="/"
                className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <span>Open CMMS Dashboard</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={handleLogout}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors"
              >
                Sign Out of Portal
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4 text-xs">
            <div className="bg-sky-950/40 border border-sky-800/50 p-3 rounded-xl flex items-start gap-2.5 text-sky-200 text-[11px]">
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-sky-400 mt-0.5" />
              <span>
                Demo credentials pre-filled. Click <strong>Sign In</strong> to explore client portal access.
              </span>
            </div>

            <div>
              <label className="font-bold text-slate-300 block mb-1">Work Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#0b1320] border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-red-500"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-300 block mb-1">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#0b1320] border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-red-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-800 text-red-600 focus:ring-red-500"
                />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-red-400 hover:text-red-300">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all active:scale-98 cursor-pointer"
            >
              {loading ? 'Authenticating...' : 'Sign In to Portal'}
            </button>

            <div className="pt-4 border-t border-slate-800 text-center space-y-2">
              <p className="text-slate-400">Don't have a MEX account yet?</p>
              <Link
                to="/free-trial"
                className="text-red-400 hover:text-red-300 font-bold inline-block"
              >
                Register for a 30-Day Free Trial &rarr;
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
