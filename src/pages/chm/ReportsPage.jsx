import React, { useState } from 'react';
import { useChm } from '../../context/ChmContext.jsx';
import {
  FileText,
  Download,
  Calendar,
  Filter,
  CheckCircle2,
  Clock,
  ChevronRight,
  FileSpreadsheet,
  FileCode,
  Sparkles,
} from 'lucide-react';

export default function ReportsPage() {
  const { reports, generateReport, showToast } = useChm();
  const [selectedPeriod, setSelectedPeriod] = useState('Current Month (Sep 2026)');

  const handleDownload = (r, format) => {
    const csvContent = `Report Title: ${r.title}\nCategory: ${r.category}\nGenerated Date: ${new Date().toISOString()}\nPeriod: ${selectedPeriod}\n\nStatus: Verified\nSummary: Complete fleet operational audit passed with zero integrity discrepancies.\n`;
    const blob = new Blob([csvContent], { type: 'text/plain;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${r.title.toLowerCase().replace(/\s+/g, '_')}_${new Date().toISOString().slice(0, 10)}.${format}`;
    a.click();
    showToast(`${r.title} (${format.toUpperCase()}) downloaded successfully!`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
        <span>Reports</span>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-blue-600 dark:text-blue-400 font-bold">Business Intelligence</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            Reports
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Export compliant financial audits, ATO tax summaries, fleet utilization, and work order logs.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white outline-none shadow-xs"
          >
            <option value="Current Month (Sep 2026)">Current Month (Sep 2026)</option>
            <option value="Last Month (Aug 2026)">Last Month (Aug 2026)</option>
            <option value="FY 2025-2026 Full Year">FY 2025-2026 Full Year</option>
            <option value="Q3 2026">Q3 2026</option>
          </select>
        </div>
      </div>

      {/* Reports Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reports.map((r) => {
          const isReady = r.status === 'Ready';
          const isGenerating = r.status?.includes('Progress');

          return (
            <div
              key={r.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs flex flex-col justify-between hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                    {r.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{r.frequency}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">{r.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{r.description}</p>
              </div>

              <div className="pt-5 border-t border-slate-100 dark:border-slate-800 mt-5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{r.status}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleDownload(r, 'csv')}
                    className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1"
                    title="Download CSV"
                  >
                    <FileSpreadsheet className="w-3.5 h-3.5 text-slate-500" />
                    <span>CSV</span>
                  </button>

                  <button
                    onClick={() => handleDownload(r, 'pdf')}
                    className="px-2.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1 shadow-xs"
                    title="Download PDF"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>PDF</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
