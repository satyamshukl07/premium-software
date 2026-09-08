import React, { useState } from 'react';
import { useChm } from '../../context/ChmContext.jsx';
import {
  Users,
  Search,
  Plus,
  Copy,
  FileSpreadsheet,
  Printer,
  ChevronRight,
  Eye,
  Trash2,
  Phone,
  Mail,
  MapPin,
  FileCheck,
} from 'lucide-react';
import { AddCustomerModal, ViewDetailModal } from '../../components/chm/ChmModals.jsx';

export default function CustomersPage() {
  const { customers, deleteCustomer, showToast } = useChm();

  const [searchFilter, setSearchFilter] = useState('');
  const [tableSearch, setTableSearch] = useState('');
  const [addCustomerOpen, setAddCustomerOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const filteredCustomers = customers.filter((c) => {
    const term = (searchFilter || tableSearch).toLowerCase();
    if (!term) return true;
    return (
      c.name?.toLowerCase().includes(term) ||
      c.email?.toLowerCase().includes(term) ||
      c.phone?.includes(term) ||
      c.license?.toLowerCase().includes(term)
    );
  });

  const handleCopy = () => {
    const text = filteredCustomers
      .map((c) => `${c.name}\t${c.address}\t${c.email}\t${c.phone}\t${c.license}`)
      .join('\n');
    navigator.clipboard.writeText(`Name\tAddress\tEmail\tPhone\tLicense\n${text}`);
    showToast('Customer directory copied to clipboard!');
  };

  const handleExportCSV = () => {
    const headers = 'Name,Address,Email,Phone,License\n';
    const rows = filteredCustomers
      .map((c) => `"${c.name}","${c.address}","${c.email}","${c.phone}","${c.license}"`)
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chm_customers_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    showToast('Customers CSV exported!');
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb Bar (Matching video reference 00:24) */}
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
        <span>Customer Management</span>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-blue-600 dark:text-blue-400 font-bold">Directory</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            Customer Management
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Verified driver licenses, KYC records, rental histories, and profiles.
          </p>
        </div>

        <button
          onClick={() => setAddCustomerOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>+ Add Customer</span>
        </button>
      </div>

      {/* Top Search Filter */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search customers by name, phone, email, or driver license..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Table Card: All Customers */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">All Customers</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Total registered clients and authorized hirers</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Copy CSV Print */}
            <div className="flex items-center rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-0.5 text-xs font-bold text-slate-700 dark:text-slate-300">
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 hover:bg-white dark:hover:bg-slate-700 rounded-md transition-colors flex items-center gap-1.5"
              >
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>Copy</span>
              </button>
              <button
                onClick={handleExportCSV}
                className="px-3 py-1.5 hover:bg-white dark:hover:bg-slate-700 rounded-md transition-colors flex items-center gap-1.5 border-x border-slate-200 dark:border-slate-700"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-slate-500" />
                <span>CSV</span>
              </button>
              <button
                onClick={() => window.print()}
                className="px-3 py-1.5 hover:bg-white dark:hover:bg-slate-700 rounded-md transition-colors flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5 text-slate-500" />
                <span>Print</span>
              </button>
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search..."
                value={tableSearch}
                onChange={(e) => setTableSearch(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 w-36 sm:w-48"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/80 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="px-5 py-3.5">Customer Name</th>
                <th className="px-5 py-3.5">Address</th>
                <th className="px-5 py-3.5">Email</th>
                <th className="px-5 py-3.5">Phone</th>
                <th className="px-5 py-3.5">License</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {filteredCustomers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-8 text-center text-slate-400">
                    No customer accounts found
                  </td>
                </tr>
              ) : (
                filteredCustomers.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="px-5 py-4">
                      <span
                        onClick={() => setSelectedCustomer(c)}
                        className="font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                      >
                        {c.name}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-medium text-slate-600 dark:text-slate-300">{c.address}</td>
                    <td className="px-5 py-4 font-mono text-slate-600 dark:text-slate-300">{c.email}</td>
                    <td className="px-5 py-4 font-mono text-slate-600 dark:text-slate-300">{c.phone}</td>
                    <td className="px-5 py-4 font-mono font-bold">{c.license}</td>
                    <td className="px-5 py-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => setSelectedCustomer(c)}
                          className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                          title="View profile"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => deleteCustomer(c.id)}
                          className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-red-50 hover:text-red-600 text-slate-400"
                          title="Delete customer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
          <div>
            Showing 1 to {filteredCustomers.length} of {filteredCustomers.length} entries
          </div>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 disabled:opacity-50 font-semibold" disabled>
              Previous
            </button>
            <button className="px-3 py-1 rounded-md bg-blue-600 text-white font-bold">1</button>
            <button className="px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 disabled:opacity-50 font-semibold" disabled>
              Next
            </button>
          </div>
        </div>
      </div>

      <AddCustomerModal isOpen={addCustomerOpen} onClose={() => setAddCustomerOpen(false)} />
      <ViewDetailModal
        isOpen={!!selectedCustomer}
        onClose={() => setSelectedCustomer(null)}
        title={`Customer Profile: ${selectedCustomer?.name}`}
        data={selectedCustomer}
      />
    </div>
  );
}
