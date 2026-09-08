import React, { useState } from 'react';
import { useChm } from '../../context/ChmContext.jsx';
import {
  Clock,
  Search,
  Plus,
  Copy,
  FileSpreadsheet,
  Printer,
  ChevronRight,
  Pause,
  Play,
  Trash2,
  Calendar,
} from 'lucide-react';
import { ModalBackdrop } from '../../components/chm/ChmModals.jsx';

export default function RecurringBookingPage() {
  const { recurringBookings, addRecurringBooking, deleteRecurringBooking, customers, fleets, showToast, currencySymbol } = useChm();

  const [searchFilter, setSearchFilter] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    customerName: customers[0]?.name || 'Raj Singh',
    vehicleName: fleets[0]?.registrationNo ? `Truck ${fleets[0].registrationNo}` : 'Truck TG1232',
    frequency: 'Weekly',
    amount: 70.0,
    startDate: '2026-09-08',
    endDate: '2027-03-31',
    nextChargeDate: '2026-09-15',
  });

  const filtered = recurringBookings.filter((r) => {
    if (!searchFilter) return true;
    const term = searchFilter.toLowerCase();
    return (
      r.customerName?.toLowerCase().includes(term) ||
      r.vehicleName?.toLowerCase().includes(term) ||
      r.frequency?.toLowerCase().includes(term)
    );
  });

  const handleCreate = (e) => {
    e.preventDefault();
    addRecurringBooking(formData);
    setModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
        <span>Recurring Booking</span>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-blue-600 dark:text-blue-400 font-bold">Schedules</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            Recurring Booking
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Automate repeat corporate contracts, monthly leases, and scheduled debits.
          </p>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>+ Add Recurring Booking</span>
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search recurring booking agreements..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Recurring Schedules</h2>
          <span className="text-xs font-semibold text-slate-400">Total: {filtered.length} active plans</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/80 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="px-5 py-3.5">Customer Name</th>
                <th className="px-5 py-3.5">Vehicle</th>
                <th className="px-5 py-3.5">Frequency</th>
                <th className="px-5 py-3.5">Rate / Cycle</th>
                <th className="px-5 py-3.5">Start Date</th>
                <th className="px-5 py-3.5">Next Charge</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-5 py-8 text-center text-slate-400">
                    No recurring booking plans configured
                  </td>
                </tr>
              ) : (
                filtered.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900 dark:text-white">{r.customerName}</td>
                    <td className="px-5 py-4 font-medium">{r.vehicleName}</td>
                    <td className="px-5 py-4">
                      <span className="px-2 py-0.5 rounded-md font-semibold bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                        {r.frequency}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-bold font-mono">
                      {currencySymbol}{Number(r.amount).toFixed(2)}
                    </td>
                    <td className="px-5 py-4">{r.startDate}</td>
                    <td className="px-5 py-4 font-mono text-emerald-600 dark:text-emerald-400 font-bold">{r.nextChargeDate}</td>
                    <td className="px-5 py-4">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                        {r.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button
                        onClick={() => deleteRecurringBooking(r.id)}
                        className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-red-50 hover:border-red-300 hover:text-red-600 text-slate-400 transition-colors"
                        title="Delete schedule"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Recurring Booking Modal */}
      {modalOpen && (
        <ModalBackdrop
          title="Create Recurring Booking Schedule"
          subtitle="Configure auto-renewing customer subscription"
          onClose={() => setModalOpen(false)}
        >
          <form onSubmit={handleCreate} className="space-y-4 text-sm">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Customer</label>
              <select
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
              >
                {customers.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Vehicle</label>
              <select
                value={formData.vehicleName}
                onChange={(e) => setFormData({ ...formData, vehicleName: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
              >
                {fleets.map((f) => (
                  <option key={f.id} value={`${f.make} ${f.registrationNo}`}>
                    {f.make} {f.registrationNo} ({f.model})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Frequency</label>
                <select
                  value={formData.frequency}
                  onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
                >
                  <option value="Weekly">Weekly</option>
                  <option value="Fortnightly">Fortnightly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Quarterly">Quarterly</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Billing Amount ({currencySymbol})
                </label>
                <input
                  type="number"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Start Date</label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Next Charge Date</label>
                <input
                  type="date"
                  value={formData.nextChargeDate}
                  onChange={(e) => setFormData({ ...formData, nextChargeDate: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm"
              >
                Save Schedule
              </button>
            </div>
          </form>
        </ModalBackdrop>
      )}
    </div>
  );
}
