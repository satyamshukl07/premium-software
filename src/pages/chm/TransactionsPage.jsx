import React, { useState } from 'react';
import { useChm } from '../../context/ChmContext.jsx';
import {
  CreditCard,
  Search,
  Copy,
  FileSpreadsheet,
  Printer,
  ChevronRight,
  DollarSign,
  ArrowUpRight,
  Receipt,
  FileText,
} from 'lucide-react';
import { ViewDetailModal } from '../../components/chm/ChmModals.jsx';

export default function TransactionsPage() {
  const { transactions, showToast, currencySymbol } = useChm();

  const [tableSearch, setTableSearch] = useState('');
  const [methodFilter, setMethodFilter] = useState('All');
  const [selectedTxn, setSelectedTxn] = useState(null);

  const filtered = transactions.filter((t) => {
    if (methodFilter !== 'All' && t.method !== methodFilter) return false;
    if (!tableSearch) return true;
    const term = tableSearch.toLowerCase();
    return (
      t.id?.toLowerCase().includes(term) ||
      t.customer?.toLowerCase().includes(term) ||
      t.booking?.toLowerCase().includes(term) ||
      t.method?.toLowerCase().includes(term)
    );
  });

  const totalRevenue = transactions.reduce((acc, t) => acc + (Number(t.amount) || 0), 0);
  const completedRevenue = transactions
    .filter((t) => t.status === 'Completed')
    .reduce((acc, t) => acc + (Number(t.amount) || 0), 0);

  const handleCopy = () => {
    const text = filtered
      .map((t) => `${t.id}\t${t.date}\t${t.customer}\t${t.booking}\t${t.method}\t${t.amount}\t${t.status}`)
      .join('\n');
    navigator.clipboard.writeText(`TxnID\tDate\tCustomer\tBooking\tMethod\tAmount\tStatus\n${text}`);
    showToast('Transactions copied to clipboard!');
  };

  const handleExportCSV = () => {
    const headers = 'Transaction ID,Date,Customer,Booking,Payment Method,Amount,Status\n';
    const rows = filtered
      .map((t) => `"${t.id}","${t.date}","${t.customer}","${t.booking}","${t.method}","${t.amount}","${t.status}"`)
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chm_transactions_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    showToast('Transactions CSV exported!');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
        <span>Financials</span>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-blue-600 dark:text-blue-400 font-bold">Transactions</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            Transactions
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Audit rental receipts, credit card charges, security deposits, and payouts.
          </p>
        </div>

        <button
          onClick={() => showToast('Receipt reconciliation running...')}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
        >
          <Receipt className="w-4 h-4" />
          <span>Reconcile Ledger</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
          <span className="text-xs font-bold text-slate-500">Gross Invoiced</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">
            {currencySymbol}{totalRevenue.toFixed(2)}
          </div>
          <span className="text-[11px] text-emerald-600 font-semibold">100% Collected</span>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
          <span className="text-xs font-bold text-slate-500">Card Gateways</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">
            {currencySymbol}{completedRevenue.toFixed(2)}
          </div>
          <span className="text-[11px] text-slate-400">Stripe & EFTPOS</span>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
          <span className="text-xs font-bold text-slate-500">Pending Holds</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">
            {currencySymbol}500.00
          </div>
          <span className="text-[11px] text-blue-600 font-semibold">1 Active Deposit Held</span>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Transaction History</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Payment receipts and settlement ledger</p>
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
                <th className="px-5 py-3.5">Transaction ID</th>
                <th className="px-5 py-3.5">Date & Time</th>
                <th className="px-5 py-3.5">Customer</th>
                <th className="px-5 py-3.5">Booking Ref</th>
                <th className="px-5 py-3.5">Method</th>
                <th className="px-5 py-3.5">Amount</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-5 py-8 text-center text-slate-400">
                    No transactions recorded
                  </td>
                </tr>
              ) : (
                filtered.map((t) => (
                  <tr key={t.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="px-5 py-4 font-mono font-bold text-blue-600 dark:text-blue-400">{t.id}</td>
                    <td className="px-5 py-4">{t.date}</td>
                    <td className="px-5 py-4 font-bold text-slate-900 dark:text-white">{t.customer}</td>
                    <td className="px-5 py-4 font-mono text-blue-600 dark:text-blue-400">{t.booking}</td>
                    <td className="px-5 py-4">{t.method}</td>
                    <td className="px-5 py-4 font-black font-mono">
                      {currencySymbol}{Number(t.amount).toFixed(2)}
                    </td>
                    <td className="px-5 py-4">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                        {t.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button
                        onClick={() => setSelectedTxn(t)}
                        className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold"
                      >
                        Receipt
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <ViewDetailModal
        isOpen={!!selectedTxn}
        onClose={() => setSelectedTxn(null)}
        title={`Payment Receipt: ${selectedTxn?.id}`}
        data={selectedTxn}
      />
    </div>
  );
}
