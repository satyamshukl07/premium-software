import React, { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout.jsx';
import DatabaseSetupModal from '../../components/admin/DatabaseSetupModal.jsx';
import { useAdminAuth } from '../../context/AdminAuthContext.jsx';
import {
  Shield,
  KeyRound,
  Database,
  Server,
  Mail,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  Terminal,
  Lock,
  Zap,
  Copy,
  Check,
  Loader2,
  Info,
  Layers,
  ExternalLink,
  Sliders,
} from 'lucide-react';

export default function AdminSettingsPage() {
  const { admin, authFetch } = useAdminAuth();

  // Database setup modal state
  const [dbModalOpen, setDbModalOpen] = useState(false);
  const [testUrl, setTestUrl] = useState('');
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);
  const [copiedKey, setCopiedKey] = useState('');

  // Password change state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswords, setShowPasswords] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: '', type: '' });

    if (newPassword.length < 8) {
      setMessage({ text: 'New password must be at least 8 characters long.', type: 'error' });
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage({ text: 'New passwords do not match.', type: 'error' });
      return;
    }

    setLoading(true);
    try {
      const res = await authFetch('/api/admin/auth/change-password', {
        method: 'POST',
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setMessage({ text: 'Password successfully changed! Your new credentials are now active.', type: 'success' });
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setMessage({ text: data.message || 'Failed to update password.', type: 'error' });
      }
    } catch (err) {
      setMessage({ text: 'Error connecting to the backend server.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(''), 2500);
  };

  const handleTestConnection = async (e) => {
    e.preventDefault();
    if (!testUrl.trim()) return;

    setTesting(true);
    setTestResult(null);

    try {
      const res = await authFetch('/api/admin/database/test', {
        method: 'POST',
        body: JSON.stringify({ connectionUrl: testUrl.trim() }),
      });
      const data = await res.json();
      setTestResult(data);
    } catch (err) {
      setTestResult({
        success: false,
        message: 'Could not connect to backend to test PostgreSQL connection.',
      });
    } finally {
      setTesting(false);
    }
  };

  return (
    <AdminLayout title="System & Security Settings">
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left 2 Columns: Database Setup, Password & Security */}
          <div className="lg:col-span-2 space-y-6">
            {/* 1. DEDICATED DATABASE SETUP & CONFIGURATION CARD */}
            <div id="database-setup" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-slate-900">Database URL Configuration (DATABASE_URL)</h3>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                        Active & Ready
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">
                      डेटाबेस URL कहाँ और कैसे डालना है — संपूर्ण सेटअप विंडो और लाइव टेस्ट
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setDbModalOpen(true)}
                  className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md shadow-red-600/20 transition-all cursor-pointer flex items-center gap-1.5 self-start sm:self-auto shrink-0"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Open Full Setup Window</span>
                </button>
              </div>

              {/* Hindi & English Visual Location Guide */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 text-red-950 space-y-3">
                <div className="flex items-center gap-2 font-bold text-sm text-red-900">
                  <Info className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Google AI Studio में DATABASE_URL कहाँ डालना है? (How & Where to Enter)</span>
                </div>
                <p className="text-xs text-red-800 leading-relaxed">
                  Google AI Studio में आपका सर्वर सुरक्षित क्लाउड कंटेनर में चलता है। डेटाबेस URL जोड़ने के लिए ऊपर दाईं ओर दिए गए <strong className="text-red-950 font-bold">Settings (⚙️ Gear Icon)</strong> विंडो का उपयोग किया जाता है:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                  <div className="p-3 bg-white/90 rounded-xl border border-red-200/80 space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[11px] font-bold flex items-center justify-center">1</span>
                      <span>AI Studio Header ⚙️ Settings</span>
                    </div>
                    <p className="text-slate-600 text-[11px]">
                      AI Studio स्क्रीन के टॉप बार में <strong>Settings</strong> पर क्लिक करें।
                    </p>
                  </div>

                  <div className="p-3 bg-white/90 rounded-xl border border-red-200/80 space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[11px] font-bold flex items-center justify-center">2</span>
                      <span>Environment Variables / Secrets</span>
                    </div>
                    <p className="text-slate-600 text-[11px]">
                      Settings मेनू में <strong>Environment Variables</strong> या <strong>Secrets</strong> टैब चुनें।
                    </p>
                  </div>

                  <div className="p-3 bg-white/90 rounded-xl border border-red-200/80 space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[11px] font-bold flex items-center justify-center">3</span>
                      <span>Key: DATABASE_URL</span>
                    </div>
                    <div className="flex items-center justify-between font-mono font-bold text-slate-900 text-[11px]">
                      <span>DATABASE_URL</span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard('DATABASE_URL', 'inpage_key')}
                        className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-[10px] font-sans text-slate-700 flex items-center gap-1"
                      >
                        {copiedKey === 'inpage_key' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedKey === 'inpage_key' ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-3 bg-white/90 rounded-xl border border-red-200/80 space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-red-600 text-white text-[11px] font-bold flex items-center justify-center">4</span>
                      <span>Value: Postgres Connection URI</span>
                    </div>
                    <p className="text-slate-600 text-[11px]">
                      Value में अपना PostgreSQL URL पेस्ट करके <strong>Save</strong> करें।
                    </p>
                  </div>
                </div>
              </div>

              {/* In-Page Connection URL Tester */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      <span>Live PostgreSQL Connection Tester (यहीं टेस्ट करें)</span>
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Settings में डालने से पहले यहाँ चेक कर सकते हैं कि आपका डेटाबेस URL काम कर रहा है या नहीं:
                    </p>
                  </div>
                </div>

                <form onSubmit={handleTestConnection} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      required
                      value={testUrl}
                      onChange={(e) => setTestUrl(e.target.value)}
                      placeholder="postgresql://postgres:your_password@db.xxxxxx.supabase.co:6543/postgres"
                      className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl font-mono text-xs focus:bg-white focus:outline-hidden focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    />
                    <button
                      type="submit"
                      disabled={testing || !testUrl.trim()}
                      className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 shrink-0"
                    >
                      {testing ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Testing...</span>
                        </>
                      ) : (
                        <>
                          <Zap className="w-3.5 h-3.5 text-amber-400" />
                          <span>Test Connection</span>
                        </>
                      )}
                    </button>
                  </div>

                  {testResult && (
                    <div
                      className={`p-3.5 rounded-xl text-xs space-y-1.5 ${
                        testResult.success
                          ? 'bg-emerald-50 border border-emerald-300 text-emerald-900'
                          : 'bg-red-50 border border-red-300 text-red-900'
                      }`}
                    >
                      <div className="flex items-center gap-2 font-bold">
                        {testResult.success ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                        )}
                        <span>{testResult.message}</span>
                      </div>
                      {testResult.details && (
                        <div className="pt-1 text-[11px] text-emerald-800 flex flex-wrap gap-x-4 gap-y-1">
                          <span>Database: <strong>{testResult.details.database}</strong></span>
                          <span>Ping Latency: <strong>{testResult.details.latencyMs}ms</strong></span>
                          <span>Version: <strong>{testResult.details.version}</strong></span>
                        </div>
                      )}
                    </div>
                  )}
                </form>
              </div>

              {/* Sample Templates Quick Copy Row */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <div className="font-bold text-slate-700 text-[11px] uppercase tracking-wider">
                  Popular Database Providers (1-Click Sample Copy)
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      const str = 'postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres';
                      copyToClipboard(str, 'supa');
                      setTestUrl(str);
                    }}
                    className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-[11px] flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Supabase</span>
                    {copiedKey === 'supa' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-slate-400" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const str = 'postgresql://[USER]:[PASSWORD]@[ENDPOINT].neon.tech/[DBNAME]?sslmode=require';
                      copyToClipboard(str, 'neon');
                      setTestUrl(str);
                    }}
                    className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-[11px] flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Neon.tech</span>
                    {copiedKey === 'neon' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-slate-400" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const str = 'postgresql://postgres:[PASSWORD]@[HOST]:[PORT]/railway';
                      copyToClipboard(str, 'railway');
                      setTestUrl(str);
                    }}
                    className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-[11px] flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Railway</span>
                    {copiedKey === 'railway' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-slate-400" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const str = 'postgresql://[USER]:[PASSWORD]@[HOST].render.com/[DBNAME]';
                      copyToClipboard(str, 'render');
                      setTestUrl(str);
                    }}
                    className="px-2.5 py-1.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-[11px] flex items-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>Render</span>
                    {copiedKey === 'render' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-slate-400" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Password Change Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                  <KeyRound className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Change Admin Password</h3>
                  <p className="text-xs text-slate-500">Update your administrative credentials securely</p>
                </div>
              </div>

              {message.text && (
                <div
                  className={`mt-6 p-4 rounded-xl text-xs font-semibold flex items-center gap-2.5 ${
                    message.type === 'success'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {message.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  )}
                  <span>{message.text}</span>
                </div>
              )}

              <form onSubmit={handlePasswordSubmit} className="mt-6 space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Current Password</label>
                  <div className="relative">
                    <input
                      type={showPasswords ? 'text' : 'password'}
                      required
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="Enter your current password"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">New Password</label>
                    <input
                      type={showPasswords ? 'text' : 'password'}
                      required
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Minimum 8 characters"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Confirm New Password</label>
                    <input
                      type={showPasswords ? 'text' : 'password'}
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter new password"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setShowPasswords(!showPasswords)}
                    className="text-slate-500 hover:text-slate-800 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                  >
                    {showPasswords ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    <span>{showPasswords ? 'Hide Passwords' : 'Show Passwords'}</span>
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md shadow-red-600/20 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {loading ? 'Updating Password...' : 'Save New Password'}
                  </button>
                </div>
              </form>
            </div>

            {/* Deployment & Production Environment Variables Reference */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Production Deployment Environment Variables</h3>
                  <p className="text-xs text-slate-500">
                    Configuration options for deploying this backend on Vercel, Railway, Render, or any VPS
                  </p>
                </div>
              </div>

              <div className="mt-5 overflow-x-auto text-xs">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-100">
                    <tr>
                      <th className="py-2.5 px-3">Variable Name</th>
                      <th className="py-2.5 px-3">Purpose</th>
                      <th className="py-2.5 px-3">Current Active Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                    <tr>
                      <td className="py-3 px-3 font-mono font-bold text-slate-900">DATABASE_URL</td>
                      <td className="py-3 px-3 text-slate-600">
                        PostgreSQL Connection string (if set, uses Postgres; if empty, uses local SQLite)
                      </td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-mono text-[11px]">
                          SQLite Database Active
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-mono font-bold text-slate-900">JWT_SECRET</td>
                      <td className="py-3 px-3 text-slate-600">Secret key for signing Admin authentication tokens</td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 font-mono text-[11px] text-slate-700">
                          ••••••••••••••••
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-mono font-bold text-slate-900">ADMIN_EMAIL</td>
                      <td className="py-3 px-3 text-slate-600">Default email for initial admin account seeding</td>
                      <td className="py-3 px-3 font-mono text-slate-900">{admin?.email}</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-mono font-bold text-slate-900">SMTP_HOST / SMTP_PASS</td>
                      <td className="py-3 px-3 text-slate-600">SMTP credentials for sending automatic notification emails</td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px]">
                          Console Logging Active
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column: System Diagnostics Card */}
          <div className="space-y-6">
            {/* Admin Profile Summary */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg">
                  {admin?.name ? admin.name[0].toUpperCase() : 'A'}
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-sm text-slate-900 truncate">{admin?.name || 'Administrator'}</div>
                  <div className="text-xs text-slate-500 truncate">{admin?.email}</div>
                  <div className="inline-block mt-1 px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-[10px] font-bold uppercase tracking-wider">
                    {admin?.role || 'Super Admin'}
                  </div>
                </div>
              </div>
            </div>

            {/* Diagnostics Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4 text-xs">
              <div className="flex items-center gap-2 text-slate-900 font-bold border-b border-slate-100 pb-3">
                <Server className="w-4 h-4 text-sky-500" />
                <span>Backend Diagnostics</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">Database Driver</span>
                <span className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-emerald-500" />
                  <span>SQLite (Built-in Node)</span>
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">Database Schema</span>
                <span className="font-bold text-emerald-600">Initialized & Migrated</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">Authentication</span>
                <span className="font-bold text-slate-900">JWT + Bcrypt (Salt 10)</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">Rate Limiter</span>
                <span className="font-bold text-emerald-600">Active (5 req/min)</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">CSRF & XSS Sanitization</span>
                <span className="font-bold text-emerald-600">Active</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">Email Notification Service</span>
                <span className="font-bold text-sky-600">Console / Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Database Setup Window Modal */}
      <DatabaseSetupModal isOpen={dbModalOpen} onClose={() => setDbModalOpen(false)} />
    </AdminLayout>
  );
}
