import React, { useState } from 'react';
import { useChm } from '../../context/ChmContext.jsx';
import {
  ShieldCheck,
  Search,
  Plus,
  Copy,
  FileSpreadsheet,
  Printer,
  ChevronRight,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  FileText,
} from 'lucide-react';
import { ModalBackdrop, ViewDetailModal } from '../../components/chm/ChmModals.jsx';

export default function RegoInsurancePage() {
  const { regoInsurance, addRegoRecord, fleets, showToast } = useChm();

  const [tableSearch, setTableSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [formData, setFormData] = useState({
    registrationNo: fleets[0]?.registrationNo || 'TG1232',
    provider: 'Techtonika Autolink',
    policyNo: 'POL-992812',
    regoExpiry: '2027-08-31',
    insuranceExpiry: '2027-08-31',
    daysRemaining: 357,
    status: 'Valid',
  });

  const filtered = regoInsurance.filter((r) => {
    if (!tableSearch) return true;
    const term = tableSearch.toLowerCase();
    return (
      r.registrationNo?.toLowerCase().includes(term) ||
      r.provider?.toLowerCase().includes(term) ||
      r.policyNo?.toLowerCase().includes(term)
    );
  });

  const handleCopy = () => {
    const text = filtered
      .map((r) => `${r.registrationNo}\t${r.provider}\t${r.policyNo}\t${r.regoExpiry}\t${r.insuranceExpiry}\t${r.status}`)
      .join('\n');
    navigator.clipboard.writeText(`Rego\tProvider\tPolicy\tRego Expiry\tInsurance Expiry\tStatus\n${text}`);
    showToast('Rego & Insurance records copied!');
  };

  const handleExportCSV = () => {
    const headers = 'Registration No,Provider,Policy No,Rego Expiry,Insurance Expiry,Status\n';
    const rows = filtered
      .map((r) => `"${r.registrationNo}","${r.provider}","${r.policyNo}","${r.regoExpiry}","${r.insuranceExpiry}","${r.status}"`)
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chm_rego_insurance_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    showToast('Rego & Insurance CSV exported!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRegoRecord(formData);
    setModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
        <span>Maintenance</span>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-blue-600 dark:text-blue-400 font-bold">Rego & Insurance</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            Rego & Insurance
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Compliance tracker for Australian State road registrations (TMR/Service NSW) and commercial fleet policies.
          </p>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>+ Add Policy Record</span>
        </button>
      </div>

      {/* Rego Table Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Active Policies & Registration</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Automated expiry alerts and renewal schedules</p>
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
                <th className="px-5 py-3.5">Registration No</th>
                <th className="px-5 py-3.5">Policy Provider</th>
                <th className="px-5 py-3.5">Policy Number</th>
                <th className="px-5 py-3.5">Rego Expiry</th>
                <th className="px-5 py-3.5">Insurance Expiry</th>
                <th className="px-5 py-3.5">Remaining</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {filtered.map((r) => (
                <tr key={r.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="px-5 py-4 font-mono font-bold text-blue-600 dark:text-blue-400">{r.registrationNo}</td>
                  <td className="px-5 py-4 font-bold text-slate-900 dark:text-white">{r.provider}</td>
                  <td className="px-5 py-4 font-mono text-slate-600 dark:text-slate-300">{r.policyNo}</td>
                  <td className="px-5 py-4 font-mono">{r.regoExpiry}</td>
                  <td className="px-5 py-4 font-mono">{r.insuranceExpiry}</td>
                  <td className="px-5 py-4">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      {r.daysRemaining} days
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                      {r.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <button
                      onClick={() => showToast(`Renewal notice sent for ${r.registrationNo}`)}
                      className="px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold"
                    >
                      Renew
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {modalOpen && (
        <ModalBackdrop
          title="Add Registration & Insurance Record"
          subtitle="Log road compliance and policy details"
          onClose={() => setModalOpen(false)}
        >
          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Vehicle</label>
              <select
                value={formData.registrationNo}
                onChange={(e) => setFormData({ ...formData, registrationNo: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
              >
                {fleets.map((f) => (
                  <option key={f.id} value={f.registrationNo}>
                    {f.registrationNo} - {f.make} {f.model}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Policy Provider</label>
                <input
                  type="text"
                  value={formData.provider}
                  onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Policy Number</label>
                <input
                  type="text"
                  value={formData.policyNo}
                  onChange={(e) => setFormData({ ...formData, policyNo: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Rego Expiry Date</label>
                <input
                  type="date"
                  value={formData.regoExpiry}
                  onChange={(e) => setFormData({ ...formData, regoExpiry: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Insurance Expiry Date</label>
                <input
                  type="date"
                  value={formData.insuranceExpiry}
                  onChange={(e) => setFormData({ ...formData, insuranceExpiry: e.target.value })}
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
                Save Record
              </button>
            </div>
          </form>
        </ModalBackdrop>
      )}
    </div>
  );
}
