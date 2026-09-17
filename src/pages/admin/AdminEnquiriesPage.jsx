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
  Mail,
  Phone,
  Building,
  Calendar,
  X,
  Check,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  ArrowUpDown,
} from 'lucide-react';

export default function AdminEnquiriesPage() {
  const { authFetch } = useAdminAuth();
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({ page: 1, limit: 10, total: 0, totalPages: 1 });

  // Filters & Sorting
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortBy, setSortBy] = useState('created_at');
  const [sortOrder, setSortOrder] = useState('DESC');

  // Modal State
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);

  const fetchEnquiries = async (page = 1) => {
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

      const res = await authFetch(`/api/admin/enquiries?${params}`);
      if (res.ok) {
        const data = await res.json();
        setEnquiries(data.data || []);
        setPagination(data.pagination || { page: 1, limit: 10, total: 0, totalPages: 1 });
      }
    } catch (err) {
      console.error('Failed to load enquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries(1);
  }, [statusFilter, sortBy, sortOrder]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchEnquiries(1);
  };

  // Update Status
  const handleUpdateStatus = async (id, newStatus) => {
    setActionLoading(true);
    try {
      const res = await authFetch(`/api/admin/enquiries/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        const updated = await res.json();
        setEnquiries((prev) => prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item)));
        if (selectedEnquiry && selectedEnquiry.id === id) {
          setSelectedEnquiry((prev) => ({ ...prev, status: newStatus }));
        }
      }
    } catch (err) {
      console.error('Failed to update status:', err);
    } finally {
      setActionLoading(false);
    }
  };

  // Delete Enquiry
  const handleDeleteEnquiry = async (id) => {
    setActionLoading(true);
    try {
      const res = await authFetch(`/api/admin/enquiries/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setEnquiries((prev) => prev.filter((item) => item.id !== id));
        setDeleteConfirmId(null);
        if (selectedEnquiry?.id === id) {
          setSelectedEnquiry(null);
        }
      }
    } catch (err) {
      console.error('Failed to delete enquiry:', err);
    } finally {
      setActionLoading(false);
    }
  };

  // Export CSV
  const handleExportCSV = () => {
    if (enquiries.length === 0) return;

    const headers = ['ID', 'Name', 'Email', 'Phone', 'Company', 'Subject', 'Type', 'Status', 'Date'];
    const rows = enquiries.map((e) => [
      e.id,
      `"${(e.name || '').replace(/"/g, '""')}"`,
      `"${(e.email || '').replace(/"/g, '""')}"`,
      `"${(e.phone || '').replace(/"/g, '""')}"`,
      `"${(e.company || '').replace(/"/g, '""')}"`,
      `"${(e.subject || '').replace(/"/g, '""')}"`,
      `"${(e.enquiry_type || '').replace(/"/g, '""')}"`,
      e.status,
      `"${new Date(e.created_at).toLocaleString()}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `autolink_enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AdminLayout title="Enquiries & Messages">
      <div className="space-y-6">
        {/* Top Control Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Form */}
          <form onSubmit={handleSearchSubmit} className="w-full md:w-80 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search leads, email, company..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden focus:border-red-500 focus:ring-1 focus:ring-red-500"
            />
          </form>

          {/* Filters & Actions */}
          <div className="w-full md:w-auto flex flex-wrap items-center justify-end gap-2.5">
            {/* Status Filter */}
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold focus:outline-hidden"
              >
                <option value="All">All Statuses</option>
                <option value="New">New</option>
                <option value="Read">Read</option>
                <option value="In Progress">In Progress</option>
                <option value="Replied">Replied</option>
                <option value="Closed">Closed</option>
              </select>
            </div>

            {/* Sorting */}
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

            {/* Export CSV */}
            <button
              type="button"
              onClick={handleExportCSV}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>

            {/* Refresh */}
            <button
              type="button"
              onClick={() => fetchEnquiries(pagination.page)}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
              title="Refresh"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Enquiries Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-bold border-b border-slate-100">
                <tr>
                  <th className="px-6 py-3.5">ID</th>
                  <th className="px-6 py-3.5">Client / Contact</th>
                  <th className="px-6 py-3.5">Company & Phone</th>
                  <th className="px-6 py-3.5">Subject / Message</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5">Submitted</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {loading ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-slate-400">
                      <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-slate-400" />
                      Loading enquiries from database...
                    </td>
                  </tr>
                ) : enquiries.length > 0 ? (
                  enquiries.map((item) => (
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
                      <td className="px-6 py-4 max-w-xs">
                        <div className="font-bold text-slate-900 truncate">{item.subject || 'General Inquiry'}</div>
                        <div className="text-slate-500 truncate text-[11px]">{item.message || 'No message provided'}</div>
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={item.status}
                          onChange={(e) => handleUpdateStatus(item.id, e.target.value)}
                          className={`text-[11px] font-bold px-2.5 py-1 rounded-full border cursor-pointer focus:outline-hidden ${
                            item.status === 'New'
                              ? 'bg-blue-50 text-blue-700 border-blue-200'
                              : item.status === 'Read'
                              ? 'bg-amber-50 text-amber-700 border-amber-200'
                              : item.status === 'In Progress'
                              ? 'bg-purple-50 text-purple-700 border-purple-200'
                              : item.status === 'Replied'
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              : 'bg-slate-100 text-slate-600 border-slate-200'
                          }`}
                        >
                          <option value="New">New</option>
                          <option value="Read">Read</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Replied">Replied</option>
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
                            onClick={() => setSelectedEnquiry(item)}
                            className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                            title="View Full Details"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setDeleteConfirmId(item.id)}
                            className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition-colors"
                            title="Delete Enquiry"
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
                      No enquiries match your search or filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
            <div>
              Showing <span className="font-bold">{enquiries.length}</span> of{' '}
              <span className="font-bold">{pagination.total}</span> enquiries
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={pagination.page <= 1}
                onClick={() => fetchEnquiries(pagination.page - 1)}
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
                onClick={() => fetchEnquiries(pagination.page + 1)}
                className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed font-semibold flex items-center gap-1"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* View Details Modal */}
        {selectedEnquiry && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[10px] uppercase font-bold text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full">
                    Enquiry Details #{selectedEnquiry.id}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">{selectedEnquiry.subject}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedEnquiry(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-4 text-xs">
                {/* Contact Card */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="text-slate-400 block mb-0.5">Name</span>
                    <span className="font-bold text-slate-900">{selectedEnquiry.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Company</span>
                    <span className="font-bold text-slate-900">{selectedEnquiry.company || 'Not specified'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Email</span>
                    <a href={`mailto:${selectedEnquiry.email}`} className="font-bold text-blue-600 hover:underline">
                      {selectedEnquiry.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Phone</span>
                    <span className="font-bold text-slate-900">{selectedEnquiry.phone || 'Not provided'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Origin / Source</span>
                    <span className="font-semibold text-slate-700">{selectedEnquiry.source || 'Website'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Submitted On</span>
                    <span className="font-semibold text-slate-700">
                      {new Date(selectedEnquiry.created_at).toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Message Body */}
                <div>
                  <label className="font-bold text-slate-700 block mb-1.5">Inquiry Message</label>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-800 whitespace-pre-wrap leading-relaxed">
                    {selectedEnquiry.message || 'No additional message was written.'}
                  </div>
                </div>

                {/* Status Selector */}
                <div>
                  <label className="font-bold text-slate-700 block mb-1.5">Current Status</label>
                  <select
                    value={selectedEnquiry.status}
                    onChange={(e) => handleUpdateStatus(selectedEnquiry.id, e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl font-bold text-xs bg-white focus:outline-hidden"
                  >
                    <option value="New">New</option>
                    <option value="Read">Read</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Replied">Replied</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setDeleteConfirmId(selectedEnquiry.id)}
                  className="px-4 py-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 font-bold text-xs flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Delete Enquiry</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedEnquiry(null)}
                  className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {deleteConfirmId && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-sm w-full p-6 text-center shadow-2xl border border-slate-200">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Delete this enquiry?</h4>
              <p className="text-xs text-slate-500 mt-1 mb-6">
                This action is irreversible and will remove the record from your SQL database.
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
                  onClick={() => handleDeleteEnquiry(deleteConfirmId)}
                  disabled={actionLoading}
                  className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{actionLoading ? 'Deleting...' : 'Yes, Delete'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
