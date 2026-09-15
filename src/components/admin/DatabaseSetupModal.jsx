import React, { useState } from 'react';
import {
  X,
  Database,
  ExternalLink,
  Check,
  Copy,
  Sliders,
  Server,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Zap,
  Info,
  Layers,
} from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext.jsx';

export default function DatabaseSetupModal({ isOpen, onClose }) {
  const { authFetch } = useAdminAuth();

  const [activeTab, setActiveTab] = useState('guide'); // 'guide' | 'tester' | 'templates'
  const [testUrl, setTestUrl] = useState('');
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);
  const [copiedKey, setCopiedKey] = useState('');

  if (!isOpen) return null;

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
        message: 'Could not connect to the backend server to run the test.',
      });
    } finally {
      setTesting(false);
    }
  };

  // Parse details from testUrl if entered
  const parsePostgresUrl = (url) => {
    try {
      const trimmed = url.trim();
      if (!trimmed.startsWith('postgres://') && !trimmed.startsWith('postgresql://')) {
        return null;
      }
      const parsed = new URL(trimmed.replace('postgresql://', 'http://').replace('postgres://', 'http://'));
      return {
        protocol: 'postgresql://',
        username: parsed.username || 'postgres',
        password: parsed.password ? '••••••••' : '(none)',
        host: parsed.hostname,
        port: parsed.port || '5432',
        database: parsed.pathname ? parsed.pathname.replace('/', '') : 'postgres',
        ssl: parsed.searchParams.get('sslmode') || 'require',
      };
    } catch {
      return null;
    }
  };

  const parsedUrl = parsePostgresUrl(testUrl);

  const providerTemplates = [
    {
      name: 'Supabase (Direct / Pooler)',
      badge: 'Recommended',
      color: 'emerald',
      url: 'postgresql://postgres.[YOUR-PROJECT-REF]:[YOUR-PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres',
      note: 'Found in Supabase Dashboard -> Project Settings -> Database -> Connection string (URI mode). Use port 6543 (Transaction Pooler).',
    },
    {
      name: 'Neon.tech (Serverless Postgres)',
      badge: 'Fast Setup',
      color: 'cyan',
      url: 'postgresql://[USER]:[PASSWORD]@[ENDPOINT].neon.tech/[DBNAME]?sslmode=require',
      note: 'Found on the Neon Console dashboard under "Connection Details" -> select "Pooled connection".',
    },
    {
      name: 'Railway PostgreSQL',
      badge: 'Instant Provision',
      color: 'purple',
      url: 'postgresql://postgres:[PASSWORD]@[HOST]:[PORT]/railway',
      note: 'Found in Railway service variables under "DATABASE_URL" or "DATABASE_PUBLIC_URL".',
    },
    {
      name: 'Render PostgreSQL',
      badge: 'Managed',
      color: 'indigo',
      url: 'postgresql://[USER]:[PASSWORD]@[HOST].render.com/[DBNAME]',
      note: 'Found in Render dashboard -> PostgreSQL -> "External Database URL".',
    },
    {
      name: 'AWS RDS / Generic PostgreSQL',
      badge: 'Enterprise',
      color: 'orange',
      url: 'postgresql://[USERNAME]:[PASSWORD]@[RDS-ENDPOINT]:5432/[DBNAME]',
      note: 'Ensure RDS security group permits inbound traffic from 0.0.0.0/0 or container IP.',
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="db-setup-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-900 text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-md">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="db-setup-modal-title" className="text-sm sm:text-base font-bold text-white">
                  Database URL Configuration Window
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                  DATABASE_URL
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                डेटाबेस URL डालने और टेस्ट करने की विंडो (Google AI Studio & Production)
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('guide')}
            className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'guide'
                ? 'border-red-600 text-red-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>कहाँ डालें? (AI Studio Settings Guide)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('tester')}
            className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'tester'
                ? 'border-red-600 text-red-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>URL टेस्ट करें (Live Connection Tester)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('templates')}
            className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'templates'
                ? 'border-red-600 text-red-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>रेडीमेड टेम्पलेट्स (Supabase, Neon, etc.)</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          {/* TAB 1: GUIDE */}
          {activeTab === 'guide' && (
            <div className="space-y-5">
              {/* Visual Highlight Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 text-red-900">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Info className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-red-950">
                      DATABASE_URL डालने की मुख्य जगह: Google AI Studio Settings
                    </h3>
                    <p className="text-xs text-red-800 mt-1 leading-relaxed">
                      Google AI Studio में आपका प्रोजेक्ट सुरक्षित क्लाउड कंटेनर में चलता है। डेटाबेस URL डालने के लिए AI Studio के ऊपर दाईं ओर स्थित <span className="font-bold">Settings (⚙️ Gear Icon)</span> का उपयोग करें।
                    </p>
                  </div>
                </div>
              </div>

              {/* Step-by-Step Visual Walkthrough */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Step 1 */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                      1
                    </span>
                    <span className="font-bold text-slate-900">Settings आइकन खोलें</span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    AI Studio Build के शीर्ष दाईं ओर (Top Header) या साइडबार में <span className="font-semibold text-slate-900">⚙️ Settings</span> पर क्लिक करें।
                  </p>
                  <div className="p-2.5 rounded-xl bg-slate-900 text-slate-200 font-mono text-[11px] flex items-center justify-between">
                    <span>AI Studio -&gt; ⚙️ Settings</span>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                      2
                    </span>
                    <span className="font-bold text-slate-900">Environment Variables / Secrets चुनें</span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    सेटिंग्स विंडो में <span className="font-semibold text-slate-900">Environment Variables</span> या <span className="font-semibold text-slate-900">Secrets</span> टैब पर क्लिक करें।
                  </p>
                  <div className="p-2.5 rounded-xl bg-slate-900 text-slate-200 font-mono text-[11px]">
                    <span>Tab: [Secrets / Variables]</span>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center">
                      3
                    </span>
                    <span className="font-bold text-slate-900">वेरिएबल का नाम DATABASE_URL रखें</span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Key / Name फ़ील्ड में नीचे दिया गया नाम कॉपी करके डालें:
                  </p>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-300 font-mono font-bold text-slate-900">
                    <span>DATABASE_URL</span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard('DATABASE_URL', 'key')}
                      className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-sans flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      {copiedKey === 'key' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedKey === 'key' ? 'Copied!' : 'Copy Name'}</span>
                    </button>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center">
                      4
                    </span>
                    <span className="font-bold text-slate-900">Value में Postgres Connection URI डालें</span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    अपने Supabase, Neon या Cloud SQL से मिली पूरी स्ट्रिंग पेस्ट करें और Save पर क्लिक करें।
                  </p>
                  <div className="p-2 rounded-xl bg-white border border-slate-300 font-mono text-[10px] text-slate-600 truncate">
                    postgresql://postgres:[pass]@[host]:6543/[db]
                  </div>
                </div>
              </div>

              {/* Automatic Behavior Note */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>सेव करने के बाद क्या होगा? (Automatic Migration)</span>
                </div>
                <p className="text-[11px] text-emerald-800 leading-relaxed">
                  जैसे ही आप AI Studio Settings में <strong>DATABASE_URL</strong> सेव करेंगे, सर्वर अपने आप रीस्टार्ट होगा और आपके PostgreSQL डेटाबेस में सारी जरूरी टेबल्स (<code>enquiries</code>, <code>free_trials</code>, <code>demo_requests</code>, <code>specialist_requests</code>, <code>newsletter_subscribers</code>, <code>admins</code>) अपने आप बना देगा!
                </p>
              </div>

              {/* Current Active Status */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 text-white">
                <div className="flex items-center gap-2.5">
                  <Server className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="font-bold text-xs">वर्तमान सक्रिय डेटाबेस (Current Active Database)</div>
                    <div className="text-[11px] text-slate-400">
                      Zero-Config Built-in SQLite इंजन सक्रिय है। PostgreSQL URL डालते ही स्विच हो जाएगा।
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('tester')}
                  className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-[11px] shrink-0 cursor-pointer"
                >
                  URL टेस्ट करें
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: TESTER */}
          {activeTab === 'tester' && (
            <div className="space-y-5">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Live PostgreSQL Connection Tester
                </h3>
                <p className="text-slate-500 text-xs">
                  AI Studio Settings में सेव करने से पहले यहाँ अपनी कनेक्शन स्ट्रिंग डालकर टेस्ट कर सकते हैं कि होस्ट और पासवर्ड सही हैं या नहीं।
                </p>
              </div>

              <form onSubmit={handleTestConnection} className="space-y-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1.5">
                    PostgreSQL Connection URL (पेस्ट करें)
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={testUrl}
                      onChange={(e) => setTestUrl(e.target.value)}
                      placeholder="postgresql://postgres:your_password@db.xxxxxx.supabase.co:6543/postgres"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl font-mono text-xs focus:bg-white focus:outline-hidden focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    फॉर्मेट: <code>postgresql://[user]:[password]@[host]:[port]/[database]</code>
                  </p>
                </div>

                {/* Parsed Structure Preview */}
                {parsedUrl && (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="font-bold text-slate-700 text-xs flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                      <span>URL पार्सिंग विवरण (Parsed Breakdown)</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                      <div className="p-2 rounded-lg bg-white border border-slate-200">
                        <span className="text-slate-400 block text-[10px]">Host:</span>
                        <span className="font-mono font-bold text-slate-800 truncate block">{parsedUrl.host}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white border border-slate-200">
                        <span className="text-slate-400 block text-[10px]">Port:</span>
                        <span className="font-mono font-bold text-slate-800 block">{parsedUrl.port}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white border border-slate-200">
                        <span className="text-slate-400 block text-[10px]">Database:</span>
                        <span className="font-mono font-bold text-slate-800 truncate block">{parsedUrl.database}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white border border-slate-200">
                        <span className="text-slate-400 block text-[10px]">Username:</span>
                        <span className="font-mono font-bold text-slate-800 truncate block">{parsedUrl.username}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={testing || !testUrl.trim()}
                    className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs shadow-md shadow-red-600/20 transition-all cursor-pointer disabled:opacity-50 flex items-center gap-2"
                  >
                    {testing ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Testing PostgreSQL Connection...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-3.5 h-3.5" />
                        <span>Test Connection Now</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setTestUrl('');
                      setTestResult(null);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs cursor-pointer"
                  >
                    Clear
                  </button>
                </div>
              </form>

              {/* Test Results Output */}
              {testResult && (
                <div
                  className={`p-4 rounded-2xl border text-xs space-y-2 ${
                    testResult.success
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                      : 'bg-red-50 border-red-300 text-red-900'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-sm">
                    {testResult.success ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                    )}
                    <span>{testResult.message}</span>
                  </div>

                  {testResult.details && (
                    <div className="mt-2 pt-2 border-t border-emerald-200/60 grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                      <div>
                        <span className="text-emerald-700 font-medium">Database: </span>
                        <span className="font-mono font-bold text-emerald-950">{testResult.details.database}</span>
                      </div>
                      <div>
                        <span className="text-emerald-700 font-medium">Latency: </span>
                        <span className="font-mono font-bold text-emerald-950">{testResult.details.latencyMs} ms</span>
                      </div>
                      <div>
                        <span className="text-emerald-700 font-medium">Postgres Version: </span>
                        <span className="font-mono font-bold text-emerald-950">{testResult.details.version}</span>
                      </div>
                    </div>
                  )}

                  {testResult.success && (
                    <p className="text-[11px] text-emerald-800 font-medium pt-1">
                      🎉 यह URL पूरी तरह सही है! अब इसे Google AI Studio Settings में <code>DATABASE_URL</code> के रूप में सेव कर लें।
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: TEMPLATES */}
          {activeTab === 'templates' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Ready-to-Use Connection String Templates
                </h3>
                <p className="text-slate-500 text-xs">
                  लोकप्रिय डेटाबेस प्रोवाइडर्स के फॉर्मेट नीचे दिए गए हैं। एक क्लिक में कॉपी करें और अपनी डिटेल्स भरें:
                </p>
              </div>

              <div className="space-y-3">
                {providerTemplates.map((item) => (
                  <div
                    key={item.name}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-xs">{item.name}</span>
                        <span className="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold">
                          {item.badge}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          copyToClipboard(item.url, item.name);
                          setTestUrl(item.url);
                        }}
                        className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-[11px] font-semibold flex items-center gap-1.5 cursor-pointer shadow-2xs"
                      >
                        {copiedKey === item.name ? (
                          <Check className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                        <span>{copiedKey === item.name ? 'Copied & Loaded!' : 'Copy & Load in Tester'}</span>
                      </button>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-900 text-emerald-400 font-mono text-[11px] overflow-x-auto select-all">
                      {item.url}
                    </div>

                    <p className="text-[11px] text-slate-500">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <div className="text-[11px] text-slate-500">
            Need help? Check <code>.env.example</code> for the complete variable list.
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs cursor-pointer transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
