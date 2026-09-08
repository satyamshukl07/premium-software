import React, { useState } from 'react';
import { useChm } from '../../context/ChmContext.jsx';
import {
  Navigation,
  Search,
  Plus,
  Copy,
  FileSpreadsheet,
  Printer,
  ChevronRight,
  RefreshCw,
  DollarSign,
  CheckCircle,
  Receipt,
} from 'lucide-react';
import { AddTollChargeModal, ViewDetailModal } from '../../components/chm/ChmModals.jsx';

export default function TollManagementPage() {
  const { tolls, showToast, currencySymbol } = useChm();

  const [tableSearch, setTableSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedToll, setSelectedToll] = useState(null);
  const [isSyncing, setIsSyncing] = useState(false);

  const filtered = tolls.filter((t) => {
    if (!tableSearch) return true;
    const term = tableSearch.toLowerCase();
    return (
      t.booking?.toLowerCase().includes(term) ||
      t.customer?.toLowerCase().includes(term) ||
      t.registrationNo?.toLowerCase().includes(term) ||
      t.operator?.toLowerCase().includes(term)
    );
  });

  const handleSyncTolls = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      showToast('Linkt & EastLink toll e-tags synchronized! 0 new charges found.');
    }, 900);
  };

  const handleCopy = () => {
    const text = filtered
      .map((t) => `${t.booking}\t${t.customer}\t${t.registrationNo}\t${t.tollDate}\t${t.amount}\t${t.dueDate}\t${t.status}`)
      .join('\n');
    navigator.clipboard.writeText(`Booking\tCustomer\tRegistration\tDate\tAmount\tDue\tStatus\n${text}`);
    showToast('Toll records copied to clipboard!');
  };

  const handleExportCSV = () => {
    const headers = 'Booking,Customer,Registration,Date,Amount,Due Date,Operator,Status\n';
    const rows = filtered
      .map((t) => `"${t.booking}","${t.customer}","${t.registrationNo}","${t.tollDate}","${t.amount}","${t.dueDate}","${t.operator}","${t.status}"`)
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chm_tolls_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    showToast('Tolls CSV exported!');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
        <span>Toll Management</span>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-blue-600 dark:text-blue-400 font-bold">Toll Charges</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            Toll Management
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Automated Linkt / Transurban toll gantry detection and customer re-billing.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleSyncTolls}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin text-blue-600' : ''}`} />
            <span>Sync Linkt API</span>
          </button>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>+ Add Toll Charge</span>
          </button>
        </div>
      </div>

      {/* Toll Table Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Motorway Toll Charges</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Electronic tag passes and automatic billings</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
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
                <th className="px-5 py-3.5">Booking ID</th>
                <th className="px-5 py-3.5">Customer</th>
                <th className="px-5 py-3.5">Registration No</th>
                <th className="px-5 py-3.5">Toll Date</th>
                <th className="px-5 py-3.5">Amount</th>
                <th className="px-5 py-3.5">Due Date</th>
                <th className="px-5 py-3.5">Gantry Operator</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={9} className="px-5 py-8 text-center text-slate-400">
                    No toll records found
                  </td>
                </tr>
              ) : (
                filtered.map((t) => (
                  <tr key={t.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="px-5 py-4 font-mono font-bold text-blue-600 dark:text-blue-400">{t.booking}</td>
                    <td className="px-5 py-4 font-bold text-slate-900 dark:text-white">{t.customer}</td>
                    <td className="px-5 py-4 font-mono font-bold">{t.registrationNo}</td>
                    <td className="px-5 py-4 font-mono text-slate-600 dark:text-slate-300">{t.tollDate}</td>
                    <td className="px-5 py-4 font-black font-mono">
                      {currencySymbol}{Number(t.amount).toFixed(2)}
                    </td>
                    <td className="px-5 py-4 font-mono text-slate-600 dark:text-slate-300">{t.dueDate}</td>
                    <td className="px-5 py-4 text-slate-700 dark:text-slate-300">{t.operator}</td>
                    <td className="px-5 py-4">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                        {t.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button
                        onClick={() => showToast(`Invoice sent to ${t.customer} for toll ${t.booking}`)}
                        className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold"
                      >
                        Bill Customer
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <AddTollChargeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
