import React, { useState } from 'react';
import { useChm } from '../../context/ChmContext.jsx';
import {
  ShieldAlert,
  Search,
  Plus,
  Copy,
  FileSpreadsheet,
  Printer,
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  Eye,
  FileText,
} from 'lucide-react';
import { ReportIncidentModal, ViewDetailModal } from '../../components/chm/ChmModals.jsx';

export default function DriverManagementPage() {
  const { drivers, showToast, currencySymbol } = useChm();

  const [tableSearch, setTableSearch] = useState('');
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [selectedIncident, setSelectedIncident] = useState(null);

  const filtered = drivers.filter((d) => {
    if (!tableSearch) return true;
    const term = tableSearch.toLowerCase();
    return (
      d.driver?.toLowerCase().includes(term) ||
      d.vehicle?.toLowerCase().includes(term) ||
      d.incidentType?.toLowerCase().includes(term)
    );
  });

  const handleCopy = () => {
    const text = filtered
      .map((d) => `${d.driver}\t${d.vehicle}\t${d.incidentType}\t${d.date}\t${d.severity}\t${d.financialImpact}\t${d.status}`)
      .join('\n');
    navigator.clipboard.writeText(`Driver\tVehicle\tIncident\tDate\tSeverity\tImpact\tStatus\n${text}`);
    showToast('Incident logs copied to clipboard!');
  };

  const handleExportCSV = () => {
    const headers = 'Driver,Vehicle,Incident,Date,Severity,Financial Impact,Status\n';
    const rows = filtered
      .map((d) => `"${d.driver}","${d.vehicle}","${d.incidentType}","${d.date}","${d.severity}","${d.financialImpact}","${d.status}"`)
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chm_incidents_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    showToast('Incidents CSV exported!');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
        <span>Driver Management</span>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-blue-600 dark:text-blue-400 font-bold">Incidents & Infringements</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            Driver Management
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Monitor traffic infringements, speeding notices, collisions, and customer accountability.
          </p>
        </div>

        <button
          onClick={() => setReportModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>+ Report Incident</span>
        </button>
      </div>

      {/* KPI Banners */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
          <span className="text-xs font-bold text-slate-500">Active Infringements</span>
          <div className="text-2xl font-black text-amber-600 mt-1">1 Open</div>
          <span className="text-[11px] text-slate-400">Under police / depot review</span>
        </div>
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
          <span className="text-xs font-bold text-slate-500">Assessed Liability</span>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">
            {currencySymbol}150.00
          </div>
          <span className="text-[11px] text-emerald-600 font-semibold">Deducted from bond</span>
        </div>
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
          <span className="text-xs font-bold text-slate-500">Clean Driver Rate</span>
          <div className="text-2xl font-black text-emerald-600 mt-1">98.4%</div>
          <span className="text-[11px] text-slate-400">Zero-accident fleet metric</span>
        </div>
      </div>

      {/* Incident Table Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Incident Records</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Traffic fines and vehicle damage events</p>
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
                <th className="px-5 py-3.5">Driver Name</th>
                <th className="px-5 py-3.5">Vehicle Rego</th>
                <th className="px-5 py-3.5">Incident Type</th>
                <th className="px-5 py-3.5">Date</th>
                <th className="px-5 py-3.5">Severity</th>
                <th className="px-5 py-3.5">Financial Impact</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-5 py-8 text-center text-slate-400">
                    No incident records logged
                  </td>
                </tr>
              ) : (
                filtered.map((d) => (
                  <tr key={d.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="px-5 py-4 font-bold text-slate-900 dark:text-white">{d.driver}</td>
                    <td className="px-5 py-4 font-mono font-bold text-blue-600 dark:text-blue-400">{d.vehicle}</td>
                    <td className="px-5 py-4 font-medium text-slate-800 dark:text-slate-200">{d.incidentType}</td>
                    <td className="px-5 py-4 font-mono text-slate-600 dark:text-slate-300">{d.date}</td>
                    <td className="px-5 py-4">
                      <span className="px-2 py-0.5 rounded-md font-bold text-[10.5px] uppercase bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                        {d.severity}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-bold font-mono">
                      {currencySymbol}{Number(d.financialImpact).toFixed(2)}
                    </td>
                    <td className="px-5 py-4">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {d.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button
                        onClick={() => setSelectedIncident(d)}
                        className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                        title="View investigation notes"
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
      </div>

      <ReportIncidentModal isOpen={reportModalOpen} onClose={() => setReportModalOpen(false)} />
      <ViewDetailModal
        isOpen={!!selectedIncident}
        onClose={() => setSelectedIncident(null)}
        title="Driver Infringement Investigation"
        data={selectedIncident}
      />
    </div>
  );
}
