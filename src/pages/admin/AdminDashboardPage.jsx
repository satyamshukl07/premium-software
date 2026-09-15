import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../components/admin/AdminLayout.jsx';
import { useAdminAuth } from '../../context/AdminAuthContext.jsx';
import {
  Inbox,
  FlaskConical,
  PlaySquare,
  Users,
  Mail,
  RefreshCw,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Database,
  Building,
  Phone,
  Sliders,
} from 'lucide-react';
import DatabaseSetupModal from '../../components/admin/DatabaseSetupModal.jsx';

export default function AdminDashboardPage() {
  const { authFetch } = useAdminAuth();
  const [stats, setStats] = useState(null);
  const [recent, setRecent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState('enquiries');
  const [dbModalOpen, setDbModalOpen] = useState(false);

  const fetchDashboardData = async (isManualRefresh = false) => {
    if (isManualRefresh) setRefreshing(true);
    try {
      const res = await authFetch('/api/admin/stats');
      if (res.ok) {
        const data = await res.json();
        setStats(data.stats);
        setRecent(data.recent);
      }
    } catch (err) {
      console.error('Failed to load admin stats:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const statCards = [
    {
      title: 'Enquiries',
      total: stats?.totalEnquiries ?? 0,
      newCount: stats?.newEnquiries ?? 0,
      icon: Inbox,
      color: 'bg-blue-500',
      link: '/admin/enquiries',
    },
    {
      title: 'Free Trial Requests',
      total: stats?.totalTrials ?? 0,
      newCount: stats?.newTrials ?? 0,
      icon: FlaskConical,
      color: 'bg-amber-500',
      link: '/admin/free-trials',
    },
    {
      title: 'Demo Requests',
      total: stats?.totalDemos ?? 0,
      newCount: stats?.newDemos ?? 0,
      icon: PlaySquare,
      color: 'bg-purple-500',
      link: '/admin/demo-requests',
    },
    {
      title: 'Specialist Requests',
      total: stats?.totalSpecialists ?? 0,
      newCount: stats?.newSpecialists ?? 0,
      icon: Users,
      color: 'bg-emerald-500',
      link: '/admin/specialist-requests',
    },
    {
      title: 'Newsletter Subscribers',
      total: stats?.totalSubscribers ?? 0,
      newCount: null,
      icon: Mail,
      color: 'bg-sky-500',
      link: '/admin/newsletter',
    },
  ];

  return (
    <AdminLayout title="Operations Dashboard">
      <div className="space-y-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              Live SQL Database Backend
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Enterprise Lead & Inquiry Console
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              All website contact forms, demo requests, specialist consultations, and free trial signups are saved directly into your relational SQL database.
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-start md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setDbModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold flex items-center gap-2 shadow-md shadow-red-600/20 transition-all cursor-pointer"
            >
              <Database className="w-3.5 h-3.5" />
              <span>Database Setup Window</span>
            </button>

            <button
              type="button"
              onClick={() => fetchDashboardData(true)}
              disabled={refreshing}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-2 border border-slate-700 transition-colors shadow-sm cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin' : ''}`} />
              <span>{refreshing ? 'Syncing...' : 'Refresh'}</span>
            </button>
          </div>
        </div>

        {/* 5 Metric Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {statCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                to={card.link}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:shadow-md hover:border-slate-300 transition-all group relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl ${card.color} text-white flex items-center justify-center shadow-xs`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {card.newCount !== null && card.newCount > 0 && (
                    <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-[11px] font-bold animate-pulse">
                      {card.newCount} New
                    </span>
                  )}
                </div>

                <div className="mt-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {loading ? '—' : card.total}
                  </div>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5 group-hover:text-red-600 transition-colors flex items-center justify-between">
                    <span>{card.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Recent Submissions Feed */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
          {/* Header & Tabs */}
          <div className="px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-slate-900">Recent Inbound Submissions</h3>
              <p className="text-xs text-slate-500">Live incoming leads categorized by form type</p>
            </div>

            {/* Tabs */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab('enquiries')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'enquiries' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Enquiries ({stats?.totalEnquiries ?? 0})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('trials')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'trials' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Trials ({stats?.totalTrials ?? 0})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('demos')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'demos' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Demos ({stats?.totalDemos ?? 0})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('specialists')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'specialists' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Specialists ({stats?.totalSpecialists ?? 0})
              </button>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            {activeTab === 'enquiries' && (
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-bold border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-3">Lead Name</th>
                    <th className="px-6 py-3">Contact</th>
                    <th className="px-6 py-3">Company</th>
                    <th className="px-6 py-3">Subject / Type</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {recent?.enquiries?.length > 0 ? (
                    recent.enquiries.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-slate-900">{item.name}</td>
                        <td className="px-6 py-4">{item.email}</td>
                        <td className="px-6 py-4">{item.company || '—'}</td>
                        <td className="px-6 py-4 truncate max-w-xs">{item.subject || item.enquiry_type}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                              item.status === 'New'
                                ? 'bg-blue-100 text-blue-700'
                                : item.status === 'Closed'
                                ? 'bg-slate-100 text-slate-600'
                                : 'bg-emerald-100 text-emerald-700'
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-500 whitespace-nowrap">
                          {new Date(item.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-8 text-center text-slate-400">
                        No enquiries recorded yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}

            {activeTab === 'trials' && (
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-bold border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-3">Applicant</th>
                    <th className="px-6 py-3">Work Email</th>
                    <th className="px-6 py-3">Company</th>
                    <th className="px-6 py-3">Requirements / Scope</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {recent?.trials?.length > 0 ? (
                    recent.trials.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-slate-900">{item.name}</td>
                        <td className="px-6 py-4">{item.email}</td>
                        <td className="px-6 py-4">{item.company || '—'}</td>
                        <td className="px-6 py-4 truncate max-w-xs">{item.requirements || 'Trial request'}</td>
                        <td className="px-6 py-4">
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800">
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-500 whitespace-nowrap">
                          {new Date(item.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-8 text-center text-slate-400">
                        No trial requests recorded yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}

            {activeTab === 'demos' && (
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-bold border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-3">Contact</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">Company</th>
                    <th className="px-6 py-3">Preferred Method</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {recent?.demos?.length > 0 ? (
                    recent.demos.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-slate-900">{item.name}</td>
                        <td className="px-6 py-4">{item.email}</td>
                        <td className="px-6 py-4">{item.company || '—'}</td>
                        <td className="px-6 py-4">{item.preferred_contact_method || 'Email'}</td>
                        <td className="px-6 py-4">
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-purple-100 text-purple-800">
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-500 whitespace-nowrap">
                          {new Date(item.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-8 text-center text-slate-400">
                        No demo requests recorded yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}

            {activeTab === 'specialists' && (
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-bold border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-3">Client</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">Company</th>
                    <th className="px-6 py-3">Consultation Scope</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {recent?.specialists?.length > 0 ? (
                    recent.specialists.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-slate-900">{item.name}</td>
                        <td className="px-6 py-4">{item.email}</td>
                        <td className="px-6 py-4">{item.company || '—'}</td>
                        <td className="px-6 py-4 truncate max-w-xs">{item.message || 'Consultation request'}</td>
                        <td className="px-6 py-4">
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-500 whitespace-nowrap">
                          {new Date(item.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-8 text-center text-slate-400">
                        No specialist consultation requests yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>

          {/* Footer View All Link */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
            <span>Showing recent submissions saved in SQL</span>
            <Link
              to={
                activeTab === 'enquiries'
                  ? '/admin/enquiries'
                  : activeTab === 'trials'
                  ? '/admin/free-trials'
                  : activeTab === 'demos'
                  ? '/admin/demo-requests'
                  : '/admin/specialist-requests'
              }
              className="text-red-600 hover:text-red-700 flex items-center gap-1"
            >
              <span>Manage all {activeTab}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Database Setup Window Modal */}
      <DatabaseSetupModal isOpen={dbModalOpen} onClose={() => setDbModalOpen(false)} />
    </AdminLayout>
  );
}
