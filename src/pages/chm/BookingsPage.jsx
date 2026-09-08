import React, { useState } from 'react';
import { useChm } from '../../context/ChmContext.jsx';
import {
  CalendarCheck,
  Search,
  Plus,
  Copy,
  FileSpreadsheet,
  Printer,
  Eye,
  CheckCircle,
  FileText,
  Clock,
  Car,
  DollarSign,
  ChevronRight,
} from 'lucide-react';
import { NewBookingModal, ViewDetailModal } from '../../components/chm/ChmModals.jsx';

export default function BookingsPage() {
  const { bookings, showToast, currencySymbol } = useChm();

  const [searchFilter, setSearchFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [tableSearch, setTableSearch] = useState('');
  const [newBookingOpen, setNewBookingOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const filteredBookings = bookings.filter((b) => {
    if (statusFilter !== 'All' && b.status !== statusFilter) return false;

    if (searchFilter) {
      const q = searchFilter.toLowerCase();
      const match =
        b.customerName?.toLowerCase().includes(q) ||
        b.customerPhone?.includes(q) ||
        b.registrationNo?.toLowerCase().includes(q) ||
        b.id?.toLowerCase().includes(q);
      if (!match) return false;
    }

    if (tableSearch) {
      const q = tableSearch.toLowerCase();
      const match =
        b.customerName?.toLowerCase().includes(q) ||
        b.customerPhone?.includes(q) ||
        b.registrationNo?.toLowerCase().includes(q) ||
        b.id?.toLowerCase().includes(q);
      if (!match) return false;
    }

    return true;
  });

  const handleCopy = () => {
    const text = filteredBookings
      .map(
        (b) =>
          `${b.id}\t${b.customerName}\t${b.customerPhone}\t${b.registrationNo}\t${b.pickupDateTime}\t${b.returnDateTime}\t${b.status}`
      )
      .join('\n');
    navigator.clipboard.writeText(`BookingID\tCustomer\tPhone\tRegistration\tPickup\tReturn\tStatus\n${text}`);
    showToast('Bookings copied to clipboard!');
  };

  const handleExportCSV = () => {
    const headers = 'Booking ID,Customer,Phone,Registration,Pickup,Return,Status,Rate\n';
    const rows = filteredBookings
      .map(
        (b) =>
          `"${b.id}","${b.customerName}","${b.customerPhone}","${b.registrationNo}","${b.pickupDateTime}","${b.returnDateTime}","${b.status}","${b.dailyRate}"`
      )
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chm_bookings_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    showToast('Bookings CSV exported!');
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb Bar (Matching video reference 00:07) */}
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
        <span>Booking Management</span>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-blue-600 dark:text-blue-400 font-bold">Booking Directory</span>
      </div>

      {/* Page Title & Add Booking Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            Booking Management
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Manage car rentals, check-ins, returns, and digital customer contracts.
          </p>
        </div>

        <button
          onClick={() => setNewBookingOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>+ Add Booking</span>
        </button>
      </div>

      {/* Top Filter Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          <div className="sm:col-span-8 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by customer name, phone, booking ID, license..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="sm:col-span-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Statuses</option>
              <option value="On Hire">On Hire</option>
              <option value="Reserved">Reserved</option>
              <option value="Returned">Returned</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bookings Table Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs overflow-hidden">
        {/* Table Top Bar */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">All Bookings</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Master customer hire contracts registry</p>
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

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/80 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="px-5 py-3.5">Booking ID</th>
                <th className="px-5 py-3.5">Customer Name</th>
                <th className="px-5 py-3.5">Vehicle / Rego</th>
                <th className="px-5 py-3.5">Pickup Date & Time</th>
                <th className="px-5 py-3.5">Return Date & Time</th>
                <th className="px-5 py-3.5">Daily Rate</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {filteredBookings.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-5 py-8 text-center text-slate-400">
                    No bookings found
                  </td>
                </tr>
              ) : (
                filteredBookings.map((b) => (
                  <tr key={b.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="px-5 py-4 font-mono font-bold text-blue-600 dark:text-blue-400">
                      {b.id}
                    </td>
                    <td className="px-5 py-4">
                      <div className="font-bold text-slate-900 dark:text-white">{b.customerName}</div>
                      <div className="text-[11px] font-mono text-slate-400">{b.customerPhone}</div>
                    </td>
                    <td className="px-5 py-4">
                      <div className="font-medium text-slate-800 dark:text-slate-200">{b.makeModel}</div>
                      <div className="font-mono text-xs text-blue-600 dark:text-blue-400 font-bold">{b.registrationNo}</div>
                    </td>
                    <td className="px-5 py-4">{b.pickupDateTime}</td>
                    <td className="px-5 py-4">{b.returnDateTime}</td>
                    <td className="px-5 py-4 font-bold font-mono">
                      {currencySymbol}{b.dailyRate?.toFixed(2)}/day
                    </td>
                    <td className="px-5 py-4">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-red-50 text-red-600 dark:bg-red-950/50 dark:text-red-400 border border-red-200 dark:border-red-800">
                        {b.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => setSelectedBooking(b)}
                          className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                          title="View booking contract"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            showToast(`Invoice generated for ${b.id}`);
                          }}
                          className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-blue-600 dark:text-blue-400"
                          title="Print Rental Invoice"
                        >
                          <FileText className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Table Pagination */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
          <div>
            Showing 1 to {filteredBookings.length} of {filteredBookings.length} entries
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

      <NewBookingModal isOpen={newBookingOpen} onClose={() => setNewBookingOpen(false)} />
      <ViewDetailModal
        isOpen={!!selectedBooking}
        onClose={() => setSelectedBooking(null)}
        title={`Booking Details: ${selectedBooking?.id}`}
        data={selectedBooking}
      />
    </div>
  );
}
