import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout.jsx';
import { useAdminAuth } from '../../context/AdminAuthContext.jsx';
import {
  Search,
  Filter,
  Download,
  Trash2,
  Eye,
  RefreshCw,
  PlaySquare,
  X,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
  Building,
  Phone,
  Mail,
} from 'lucide-react';

export default function AdminDemoRequestsPage() {
  const { authFetch } = useAdminAuth();
  const [demos, setDemos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({ page: 1, limit: 10, total: 0, totalPages: 1 });

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortBy, setSortBy] = useState('created_at');
  const [sortOrder, setSortOrder] = useState('DESC');

  const [selectedDemo, setSelectedDemo] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);

  const fetchDemos = async (page = 1) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '10',
        sortBy,
        sortOrder,
        ...(statusFilter !== 'All' ? { status: statusFilter } : {}),
        ...(search.trim() ? { search: search.trim() } : {}),
      });

      const res = await authFetch(`/api/admin/demo-requests?${params}`);
      if (res.ok) {
        const data = await res.json();
        setDemos(data.data || []);
        setPagination(data.pagination || { page: 1, limit: 10, total: 0, totalPages: 1 });
      }
    } catch (err) {
      console.error('Failed to load demo requests:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDemos(1);
  }, [statusFilter, sortBy, sortOrder]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchDemos(1);
  };

  const handleUpdateStatus = async (id, newStatus) => {
    setActionLoading(true);
    try {
      const res = await authFetch(`/api/admin/demo-requests/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        setDemos((prev) => prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item)));
        if (selectedDemo && selectedDemo.id === id) {
          setSelectedDemo((prev) => ({ ...prev, status: newStatus }));
        }
      }
    } catch (err) {
      console.error('Failed to update demo status:', err);
    } finally {
      setActionLoading(false);
    }
  };

  const handleDeleteDemo = async (id) => {
    setActionLoading(true);
    try {
      const res = await authFetch(`/api/admin/demo-requests/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setDemos((prev) => prev.filter((item) => item.id !== id));
        setDeleteConfirmId(null);
        if (selectedDemo?.id === id) {
          setSelectedDemo(null);
        }
      }
    } catch (err) {
      console.error('Failed to delete demo request:', err);
    } finally {
      setActionLoading(false);
    }
  };

  const handleExportCSV = () => {
    if (demos.length === 0) return;

    const headers = ['ID', 'Name', 'Email', 'Phone', 'Company', 'Preferred Contact', 'Message', 'Status', 'Date'];
    const rows = demos.map((d) => [
      d.id,
      `"${(d.name || '').replace(/"/g, '""')}"`,
      `"${(d.email || '').replace(/"/g, '""')}"`,
      `"${(d.phone || '').replace(/"/g, '""')}"`,
      `"${(d.company || '').replace(/"/g, '""')}"`,
      `"${(d.preferred_contact_method || '').replace(/"/g, '""')}"`,
      `"${(d.message || '').replace(/"/g, '""')}"`,
      d.status,
      `"${new Date(d.created_at).toLocaleString()}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const link = document.createElement('a');
    link.setAttribute('href', encodeURI(csvContent));
    link.setAttribute('download', `autolink_demo_requests_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AdminLayout title="Product Demo Requests">
      <div className="space-y-6">
        {/* Controls */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <form onSubmit={handleSearchSubmit} className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search demo leads, company..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden focus:border-red-500 focus:ring-1 focus:ring-red-500"
            />
          </form>

          <div className="w-full md:w-auto flex flex-wrap items-center justify-end gap-2.5">
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold focus:outline-hidden"
              >
                <option value="All">All Statuses</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Completed">Completed</option>
                <option value="Closed">Closed</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={`${sortBy}:${sortOrder}`}
                onChange={(e) => {
                  const [by, order] = e.target.value.split(':');
                  setSortBy(by);
                  setSortOrder(order);
                }}
                className="px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold focus:outline-hidden"
              >
                <option value="created_at:DESC">Newest First</option>
                <option value="created_at:ASC">Oldest First</option>
                <option value="name:ASC">Name A-Z</option>
                <option value="status:ASC">Status</option>
              </select>
            </div>

            <button
              type="button"
              onClick={handleExportCSV}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>

            <button
              type="button"
              onClick={() => fetchDemos(pagination.page)}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-bold border-b border-slate-100">
                <tr>
                  <th className="px-6 py-3.5">ID</th>
                  <th className="px-6 py-3.5">Lead Name</th>
                  <th className="px-6 py-3.5">Company & Phone</th>
                  <th className="px-6 py-3.5">Preferred Contact</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5">Date</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {loading ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-slate-400">
                      <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-slate-400" />
                      Loading demo requests...
                    </td>
                  </tr>
                ) : demos.length > 0 ? (
                  demos.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-6 py-4 font-mono text-slate-400">#{item.id}</td>
                      <td className="px-6 py-4">
                        <div className="font-bold text-slate-900">{item.name}</div>
                        <div className="text-slate-500 text-[11px]">{item.email}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-slate-900 font-semibold">{item.company || '—'}</div>
                        <div className="text-slate-500 text-[11px]">{item.phone || '—'}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 font-medium text-slate-700">
                          {item.preferred_contact_method || 'Email'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={item.status}
                          onChange={(e) => handleUpdateStatus(item.id, e.target.value)}
                          className={`text-[11px] font-bold px-2.5 py-1 rounded-full border cursor-pointer focus:outline-hidden ${
                            item.status === 'New'
                              ? 'bg-purple-50 text-purple-800 border-purple-200'
                              : item.status === 'Contacted'
                              ? 'bg-blue-50 text-blue-700 border-blue-200'
                              : item.status === 'Scheduled'
                              ? 'bg-amber-50 text-amber-700 border-amber-200'
                              : item.status === 'Completed'
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              : 'bg-slate-100 text-slate-600 border-slate-200'
                          }`}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Scheduled">Scheduled</option>
                          <option value="Completed">Completed</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </td>
                      <td className="px-6 py-4 text-slate-500 whitespace-nowrap">
                        {new Date(item.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            type="button"
                            onClick={() => setSelectedDemo(item)}
                            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                            title="View Full Scope"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setDeleteConfirmId(item.id)}
                            className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-colors"
                            title="Delete Demo Request"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-slate-400">
                      No demo requests found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
            <div>
              Showing <span className="font-bold">{demos.length}</span> of{' '}
              <span className="font-bold">{pagination.total}</span> demo requests
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={pagination.page <= 1}
                onClick={() => fetchDemos(pagination.page - 1)}
                className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed font-semibold flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>
              <span className="font-bold text-slate-900 px-2">
                Page {pagination.page} of {pagination.totalPages}
              </span>
              <button
                type="button"
                disabled={pagination.page >= pagination.totalPages}
                onClick={() => fetchDemos(pagination.page + 1)}
                className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed font-semibold flex items-center gap-1"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedDemo && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[10px] uppercase font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full">
                    Demo Request #{selectedDemo.id}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">{selectedDemo.name}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedDemo(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-4 text-xs">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="text-slate-400 block mb-0.5">Company</span>
                    <span className="font-bold text-slate-900">{selectedDemo.company || 'Not specified'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Email</span>
                    <a href={`mailto:${selectedDemo.email}`} className="font-bold text-blue-600 hover:underline">
                      {selectedDemo.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Phone</span>
                    <span className="font-bold text-slate-900">{selectedDemo.phone || 'Not provided'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Preferred Contact Method</span>
                    <span className="font-bold text-slate-900">{selectedDemo.preferred_contact_method || 'Email'}</span>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1.5">Customer Message / Demo Notes</label>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-800 whitespace-pre-wrap">
                    {selectedDemo.message || 'No additional notes provided.'}
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1.5">Update Status</label>
                  <select
                    value={selectedDemo.status}
                    onChange={(e) => handleUpdateStatus(selectedDemo.id, e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl font-bold text-xs bg-white"
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Scheduled">Scheduled</option>
                    <option value="Completed">Completed</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setDeleteConfirmId(selectedDemo.id)}
                  className="px-4 py-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 font-bold text-xs flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete Demo</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedDemo(null)}
                  className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation */}
        {deleteConfirmId && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-sm w-full p-6 text-center shadow-2xl border border-slate-200">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Delete demo request?</h4>
              <p className="text-xs text-slate-500 mt-1 mb-6">
                This record will be permanently deleted from your SQL database.
              </p>
              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setDeleteConfirmId(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteDemo(deleteConfirmId)}
                  disabled={actionLoading}
                  className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{actionLoading ? 'Deleting...' : 'Confirm Delete'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
