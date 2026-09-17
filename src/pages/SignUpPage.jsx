import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext.jsx';
import {
  User,
  Mail,
  Lock,
  Building,
  Phone,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
} from 'lucide-react';
import TechtonikaLogo from '../components/TechtonikaLogo.jsx';

export default function SignUpPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signup, isAuthenticated } = useUserAuth();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage('Please enter your full name (at least 2 characters).');
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid work email address.');
      return;
    }

    if (formData.password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match. Please verify both password fields.');
      return;
    }

    if (!agreeTerms) {
      setErrorMessage('Please accept the Terms of Service and Privacy Policy to continue.');
      return;
    }

    setLoading(true);

    try {
      const result = await signup({
        name: formData.name.trim(),
        email: formData.email.trim(),
        password: formData.password,
        company: formData.company.trim(),
        phone: formData.phone.trim(),
      });

      if (result.success) {
        setSuccessMessage('Account created successfully! You are now logged in.');
        // Redirect after brief celebration
        setTimeout(() => {
          navigate('/login', { replace: true });
        }, 1200);
      } else {
        setErrorMessage(result.message || 'Registration failed. Please try again.');
        setLoading(false);
      }
    } catch (err) {
      console.error('Sign up error:', err);
      setErrorMessage('Something went wrong. Please check your network connection.');
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0b1320] min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-lg w-full space-y-6 bg-[#111c2e] p-7 sm:p-9 rounded-3xl border border-slate-700/80 shadow-2xl relative">
        {/* Brand Header */}
        <div className="text-center space-y-2.5">
          <div className="flex justify-center">
            <Link to="/">
              <TechtonikaLogo variant="dark" className="h-11 w-auto" />
            </Link>
          </div>
          <h1 className="text-2xl font-black tracking-tight text-white">
            Create Your Account
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Join thousands of businesses managing maintenance, operations, and fleet logistics with MEX.
          </p>
        </div>

        {/* Success Screen Banner */}
        {successMessage && (
          <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-600/50 text-emerald-300 text-xs flex items-center gap-3 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm text-white">Welcome aboard!</p>
              <p className="text-[11px] text-emerald-200">{successMessage} Redirecting to your portal...</p>
            </div>
          </div>
        )}

        {/* Error Screen Banner */}
        {errorMessage && (
          <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs flex items-center gap-2.5">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Full Name */}
            <div>
              <label className="font-bold text-slate-300 block mb-1">
                Full Name <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Satyam Shukla"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#0b1320] border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-red-500 transition-colors"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="font-bold text-slate-300 block mb-1">
                Work Email <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#0b1320] border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-red-500 transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Company / Business */}
            <div>
              <label className="font-bold text-slate-300 block mb-1">
                Company / Business Name
              </label>
              <div className="relative">
                <Building className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type="text"
                  name="company"
                  placeholder="e.g. Acme Fleet Ltd"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#0b1320] border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-red-500 transition-colors"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="font-bold text-slate-300 block mb-1">
                Contact Phone
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="+61 400 123 456"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#0b1320] border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-red-500 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Passwords */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Password */}
            <div>
              <label className="font-bold text-slate-300 block mb-1">
                Password <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                  placeholder="At least 6 characters"
                  value={formData.password}
                  onChange={handleChange}
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

            {/* Confirm Password */}
            <div>
              <label className="font-bold text-slate-300 block mb-1">
                Confirm Password <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  required
                  placeholder="Re-type password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-9 pr-9 py-2.5 bg-[#0b1320] border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-red-500 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2.5 top-3 text-slate-400 hover:text-slate-200"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="pt-1">
            <label className="flex items-start gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded-sm border-slate-700 bg-[#0b1320] text-red-600 focus:ring-red-500 cursor-pointer"
              />
              <span className="text-[11px] text-slate-400 leading-tight">
                I agree to MEX’s <Link to="/terms" className="text-red-400 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-red-400 hover:underline">Privacy Policy</Link>, and consent to secure account creation.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || Boolean(successMessage)}
            className="w-full mt-3 py-3 rounded-xl bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Creating Your Account & Signing In...</span>
              </>
            ) : (
              <>
                <span>Complete Sign Up & Enter Portal</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Existing User Redirect */}
        <div className="pt-4 border-t border-slate-800/80 text-center text-xs">
          <p className="text-slate-400">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-red-400 font-bold hover:text-red-300 transition-colors underline"
            >
              Sign In here
            </Link>
          </p>
        </div>

        {/* Quick Enterprise/Admin Note */}
        <div className="text-center pt-1">
          <Link
            to="/admin/login"
            className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors inline-flex items-center gap-1"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
            <span>MEX System Administrator Portal →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
