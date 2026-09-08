import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useChm } from '../../context/ChmContext.jsx';
import {
  Settings,
  Users,
  ShieldCheck,
  Bell,
  Cpu,
  Save,
  ChevronRight,
  Plus,
  Trash2,
  Check,
  Key,
  RefreshCw,
} from 'lucide-react';

export default function SettingsPage() {
  const { settings, updateSettingsSection, showToast, currencySymbol, setCurrencySymbol } = useChm();
  const location = useLocation();
  const navigate = useNavigate();

  // Determine active tab from URL path
  const getTabFromPath = () => {
    if (location.pathname.includes('/users')) return 'users';
    if (location.pathname.includes('/roles')) return 'roles';
    if (location.pathname.includes('/notifications')) return 'notifications';
    if (location.pathname.includes('/system')) return 'system';
    return 'general';
  };

  const [activeTab, setActiveTab] = useState(getTabFromPath());
  const [generalForm, setGeneralForm] = useState(settings.general);
  const [notificationForm, setNotificationForm] = useState(settings.notifications);

  useEffect(() => {
    setActiveTab(getTabFromPath());
  }, [location.pathname]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    navigate(`/products/chm/settings/${tabId}`);
  };

  const handleSaveGeneral = (e) => {
    e.preventDefault();
    updateSettingsSection('general', generalForm);
    if (generalForm.currency !== currencySymbol) {
      setCurrencySymbol(generalForm.currency);
    }
  };

  const handleToggleNotification = (key) => {
    const updated = {
      ...notificationForm,
      [key]: !notificationForm[key],
    };
    setNotificationForm(updated);
    updateSettingsSection('notifications', updated);
  };

  const staffUsers = [
    { id: 1, name: 'Satyam Shukla', email: 'satyam@carhiremanager.com', role: 'Super Administrator', status: 'Active' },
    { id: 2, name: 'Dave Miller', email: 'dave@carhiremanager.com', role: 'Fleet & Maintenance Manager', status: 'Active' },
    { id: 3, name: 'Sarah Jenkins', email: 'sarah@carhiremanager.com', role: 'Depot Dispatcher', status: 'Active' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
        <span>Settings</span>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-blue-600 dark:text-blue-400 font-bold capitalize">{activeTab} Settings</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            System Settings
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Configure depot details, user roles, notification channels, and MEX CMMS API integrations.
          </p>
        </div>
      </div>

      {/* Settings Tab Navigation Bar */}
      <div className="flex items-center gap-1 border-b border-slate-200 dark:border-slate-800 overflow-x-auto pb-1">
        {[
          { id: 'general', label: 'General Settings', icon: Settings },
          { id: 'users', label: 'User Management', icon: Users },
          { id: 'roles', label: 'Roles & Permissions', icon: ShieldCheck },
          { id: 'notifications', label: 'Notification Settings', icon: Bell },
          { id: 'system', label: 'System & API Sync', icon: Cpu },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl transition-colors whitespace-nowrap ${
                isActive
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: General Settings */}
      {activeTab === 'general' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Company & Depot Profile</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">Default branding, currency, and rental agreement rules</p>

          <form onSubmit={handleSaveGeneral} className="space-y-4 max-w-2xl text-sm">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Company / Legal Name</label>
                <input
                  type="text"
                  value={generalForm.companyName}
                  onChange={(e) => setGeneralForm({ ...generalForm, companyName: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white text-xs"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Australian ABN / Tax ID</label>
                <input
                  type="text"
                  value={generalForm.abn}
                  onChange={(e) => setGeneralForm({ ...generalForm, abn: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Contact Email</label>
                <input
                  type="email"
                  value={generalForm.contactEmail}
                  onChange={(e) => setGeneralForm({ ...generalForm, contactEmail: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white text-xs"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Contact Phone</label>
                <input
                  type="text"
                  value={generalForm.contactPhone}
                  onChange={(e) => setGeneralForm({ ...generalForm, contactPhone: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Currency Symbol</label>
                <select
                  value={generalForm.currency}
                  onChange={(e) => setGeneralForm({ ...generalForm, currency: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white text-xs font-bold"
                >
                  <option value="¥">¥ (Yen / RMB)</option>
                  <option value="$">$ (AUD / USD)</option>
                  <option value="€">€ (EUR)</option>
                  <option value="£">£ (GBP)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">GST / Tax Rate (%)</label>
                <input
                  type="number"
                  value={generalForm.taxRatePercent}
                  onChange={(e) => setGeneralForm({ ...generalForm, taxRatePercent: Number(e.target.value) })}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Depot Physical Address</label>
              <input
                type="text"
                value={generalForm.depotAddress}
                onChange={(e) => setGeneralForm({ ...generalForm, depotAddress: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white text-xs"
              />
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
              >
                <Save className="w-4 h-4" />
                <span>Save General Settings</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Tab 2: User Management */}
      {activeTab === 'users' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs overflow-hidden">
          <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Staff Users & Dispatchers</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Team members authorized to manage fleets and bookings</p>
            </div>
            <button
              onClick={() => showToast('Invite staff modal')}
              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Staff User</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50/80 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-5 py-3.5">User</th>
                  <th className="px-5 py-3.5">Email</th>
                  <th className="px-5 py-3.5">Assigned Role</th>
                  <th className="px-5 py-3.5">Status</th>
                  <th className="px-5 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {staffUsers.map((u) => (
                  <tr key={u.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                    <td className="px-5 py-4 font-bold text-slate-900 dark:text-white">{u.name}</td>
                    <td className="px-5 py-4 font-mono text-slate-600 dark:text-slate-300">{u.email}</td>
                    <td className="px-5 py-4">
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                        {u.role}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                        {u.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button className="text-xs font-bold text-blue-600 hover:underline">Edit Permissions</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: Roles & Permissions */}
      {activeTab === 'roles' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Role Access Control Matrix</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Super Administrator', 'Depot Dispatcher', 'Fleet Mechanic'].map((role, idx) => (
              <div key={role} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">{role}</h3>
                  <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    {idx === 0 ? 'Full Root Access' : 'Standard'}
                  </span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>View & Edit Fleet Status</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Manage Customer Hire Contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Log Work Orders & Tolls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {idx === 0 ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <span className="w-3.5 h-3.5 flex items-center justify-center text-slate-300">✕</span>
                    )}
                    <span>Access Financials & Tax Schedules</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Notification Settings */}
      {activeTab === 'notifications' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs max-w-2xl space-y-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Automated Triggers & Alerts</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Control SMS and Email dispatched to clients and depot mechanics</p>

          {[
            { key: 'emailOnBooking', label: 'Email confirmation on new booking creation' },
            { key: 'smsCustomerReminder', label: 'SMS reminder 24 hours prior to vehicle return' },
            { key: 'regoExpiryAlerts', label: 'Weekly email alerts for Rego & Insurance expiring in <30 days' },
            { key: 'tollChargeNotification', label: 'Immediate email invoice when new Linkt toll is detected' },
          ].map((item) => (
            <label
              key={item.key}
              className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer"
            >
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{item.label}</span>
              <input
                type="checkbox"
                checked={notificationForm[item.key]}
                onChange={() => handleToggleNotification(item.key)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
            </label>
          ))}
        </div>
      )}

      {/* Tab 5: System Settings & API Integration */}
      {activeTab === 'system' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs max-w-2xl space-y-6">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-1">API Integrations & CMMS Sync</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Live connectors with MEX Maintenance software and GPS tracking providers</p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-slate-900 dark:text-white">MEX CMMS API Connector</span>
              </div>
              <span className="text-[10px] font-bold font-mono text-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                CONNECTED
              </span>
            </div>
            <p className="text-[11px] text-slate-500">
              Synchronizing work orders, asset IDs, and preventative maintenance schedules with MEX CMMS Enterprise.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Key className="w-4 h-4 text-purple-600" />
                <span className="text-xs font-bold text-slate-900 dark:text-white">Transurban / Linkt Toll Gateway Webhook</span>
              </div>
              <span className="text-[10px] font-bold font-mono text-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                ACTIVE
              </span>
            </div>
            <p className="text-[11px] text-slate-500">
              Captures electronic toll tag gantries in real time across QLD, NSW, and VIC motorways.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
