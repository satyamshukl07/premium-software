import React, { useState } from 'react';
import { useChm } from '../../context/ChmContext.jsx';
import {
  Receipt,
  Search,
  Plus,
  Copy,
  FileSpreadsheet,
  Printer,
  ChevronRight,
  Trash2,
  Eye,
  Fuel,
  Wrench,
  Navigation,
} from 'lucide-react';
import { AddExpenseModal, ViewDetailModal } from '../../components/chm/ChmModals.jsx';

export default function ExpensesPage() {
  const { expenses, showToast, currencySymbol } = useChm();

  const [searchFilter, setSearchFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [tableSearch, setTableSearch] = useState('');
  const [addExpenseOpen, setAddExpenseOpen] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);

  const filtered = expenses.filter((exp) => {
    if (categoryFilter !== 'All' && exp.category !== categoryFilter) return false;
    const term = (searchFilter || tableSearch).toLowerCase();
    if (!term) return true;
    return (
      exp.description?.toLowerCase().includes(term) ||
      exp.vehicle?.toLowerCase().includes(term) ||
      exp.contact?.toLowerCase().includes(term) ||
      exp.category?.toLowerCase().includes(term)
    );
  });

  const totalExpenses = expenses.reduce((acc, e) => acc + (Number(e.amount) || 0), 0);

  const handleCopy = () => {
    const text = filtered
      .map((e) => `${e.date}\t${e.category}\t${e.description}\t${e.vehicle}\t${e.amount}\t${e.contact}`)
      .join('\n');
    navigator.clipboard.writeText(`Date\tCategory\tDescription\tVehicle\tAmount\tContact\n${text}`);
    showToast('Expenses copied to clipboard!');
  };

  const handleExportCSV = () => {
    const headers = 'Date,Category,Description,Vehicle,Amount,Contact\n';
    const rows = filtered
      .map((e) => `"${e.date}","${e.category}","${e.description}","${e.vehicle}","${e.amount}","${e.contact}"`)
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chm_expenses_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    showToast('Expenses CSV exported!');
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb Bar (Matching video reference 00:33) */}
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
        <span>Financials</span>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-blue-600 dark:text-blue-400 font-bold">Expenses</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            Expenses
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Log fleet operational outlays, fuel vouchers, repairs, and depot supplies.
          </p>
        </div>

        <button
          onClick={() => setAddExpenseOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>+ Add Expense</span>
        </button>
      </div>

      {/* Top Search & Category Filter */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          <div className="sm:col-span-8 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search expenses by vehicle, description, or contact..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="sm:col-span-4">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Categories</option>
              <option value="Fuel">Fuel</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Tolls & Registration">Tolls & Registration</option>
              <option value="Insurance">Insurance</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table Card (Exactly as shown in video reference 00:35) */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">All Expenses</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Total logged operational expenditures</p>
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
                <th className="px-5 py-3.5">Date</th>
                <th className="px-5 py-3.5">Expense Category</th>
                <th className="px-5 py-3.5">Description</th>
                <th className="px-5 py-3.5">Vehicle</th>
                <th className="px-5 py-3.5">Amount</th>
                <th className="px-5 py-3.5">Contact</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-5 py-8 text-center text-slate-400">
                    No expense records found
                  </td>
                </tr>
              ) : (
                filtered.map((exp) => (
                  <tr key={exp.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="px-5 py-4 font-mono text-slate-600 dark:text-slate-300">{exp.date}</td>
                    <td className="px-5 py-4 font-semibold text-slate-900 dark:text-white">
                      <span className="px-2 py-0.5 rounded-md text-[11px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                        {exp.category}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-medium text-slate-800 dark:text-slate-200">{exp.description}</td>
                    <td className="px-5 py-4 font-bold text-blue-600 dark:text-blue-400">{exp.vehicle}</td>
                    <td className="px-5 py-4 font-black font-mono">
                      {currencySymbol}{Number(exp.amount).toFixed(2)}
                    </td>
                    <td className="px-5 py-4 font-mono text-slate-600 dark:text-slate-300">{exp.contact}</td>
                    <td className="px-5 py-4 text-right">
                      <button
                        onClick={() => setSelectedExpense(exp)}
                        className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                        title="View expense details"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
          <div>
            Showing 1 to {filtered.length} of {filtered.length} entries
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

      <AddExpenseModal isOpen={addExpenseOpen} onClose={() => setAddExpenseOpen(false)} />
      <ViewDetailModal
        isOpen={!!selectedExpense}
        onClose={() => setSelectedExpense(null)}
        title="Expense Voucher Breakdown"
        data={selectedExpense}
      />
    </div>
  );
}
