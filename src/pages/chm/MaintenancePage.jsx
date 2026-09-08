import React, { useState } from 'react';
import { useChm } from '../../context/ChmContext.jsx';
import {
  Wrench,
  Search,
  Plus,
  Copy,
  FileSpreadsheet,
  Printer,
  ChevronRight,
  AlertTriangle,
  Clock,
  CheckCircle,
  FileText,
  Eye,
} from 'lucide-react';
import { AddMaintenanceModal, ViewDetailModal } from '../../components/chm/ChmModals.jsx';

export default function MaintenancePage() {
  const { maintenanceRecords, damageLogs, showToast, currencySymbol } = useChm();

  const [activeTab, setActiveTab] = useState('workOrders'); // workOrders | damageLogs
  const [tableSearch, setTableSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const filteredRecords = maintenanceRecords.filter((m) => {
    if (!tableSearch) return true;
    const term = tableSearch.toLowerCase();
    return (
      m.vehicleName?.toLowerCase().includes(term) ||
      m.maintenanceType?.toLowerCase().includes(term) ||
      m.technician?.toLowerCase().includes(term)
    );
  });

  const handleCopy = () => {
    const text = filteredRecords
      .map((m) => `${m.id}\t${m.vehicleName}\t${m.maintenanceType}\t${m.cost}\t${m.technician}\t${m.status}`)
      .join('\n');
    navigator.clipboard.writeText(`ID\tVehicle\tType\tCost\tTechnician\tStatus\n${text}`);
    showToast('Maintenance records copied to clipboard!');
  };

  const handleExportCSV = () => {
    const headers = 'ID,Vehicle,Maintenance Type,Cost,Technician,Status\n';
    const rows = filteredRecords
      .map((m) => `"${m.id}","${m.vehicleName}","${m.maintenanceType}","${m.cost}","${m.technician}","${m.status}"`)
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chm_maintenance_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    showToast('Maintenance CSV exported!');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
        <span>Maintenance</span>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-blue-600 dark:text-blue-400 font-bold">Work Orders & Service</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            Maintenance
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Synchronized with MEX CMMS work orders, mechanical repairs, and routine services.
          </p>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>+ Schedule Maintenance</span>
        </button>
      </div>

      {/* Tabs Switcher: Work Orders vs Damage Inspection Logs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('workOrders')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
            activeTab === 'workOrders'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          Scheduled Work Orders ({maintenanceRecords.length})
        </button>
        <button
          onClick={() => setActiveTab('damageLogs')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
            activeTab === 'damageLogs'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          Damage Check Logs ({damageLogs.length})
        </button>
      </div>

      {/* Table Card */}
      {activeTab === 'workOrders' ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs overflow-hidden">
          <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Maintenance Schedule</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">MEX CMMS linked vehicle repairs and preventative checkups</p>
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
                  <th className="px-5 py-3.5">Work Order ID</th>
                  <th className="px-5 py-3.5">Vehicle</th>
                  <th className="px-5 py-3.5">Maintenance Type</th>
                  <th className="px-5 py-3.5">Est. Cost</th>
                  <th className="px-5 py-3.5">Technician / Workshop</th>
                  <th className="px-5 py-3.5">Created Date</th>
                  <th className="px-5 py-3.5">Status</th>
                  <th className="px-5 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {filteredRecords.map((m) => (
                  <tr key={m.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="px-5 py-4 font-mono font-bold text-blue-600 dark:text-blue-400">{m.id}</td>
                    <td className="px-5 py-4 font-bold text-slate-900 dark:text-white">{m.vehicleName}</td>
                    <td className="px-5 py-4">
                      <span className="px-2 py-0.5 rounded-md font-semibold bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                        {m.maintenanceType}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-black font-mono">
                      {currencySymbol}{Number(m.cost).toFixed(2)}
                    </td>
                    <td className="px-5 py-4">{m.technician}</td>
                    <td className="px-5 py-4 font-mono text-slate-500">{m.createdAt}</td>
                    <td className="px-5 py-4">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                        {m.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button
                        onClick={() => setSelectedRecord(m)}
                        className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                        title="View job card"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Damage Inspection Logs */
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs overflow-hidden">
          <div className="p-5 border-b border-slate-100 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Vehicle Damage Inspection Logs</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Pre/post-rental return damage logs</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50/80 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-5 py-3.5">Log ID</th>
                  <th className="px-5 py-3.5">Vehicle</th>
                  <th className="px-5 py-3.5">Damage Description</th>
                  <th className="px-5 py-3.5">Location on Body</th>
                  <th className="px-5 py-3.5">Severity</th>
                  <th className="px-5 py-3.5">Reported By</th>
                  <th className="px-5 py-3.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {damageLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                    <td className="px-5 py-4 font-mono font-bold text-blue-600">{log.id}</td>
                    <td className="px-5 py-4 font-bold text-slate-900 dark:text-white">{log.vehicle}</td>
                    <td className="px-5 py-4">{log.description}</td>
                    <td className="px-5 py-4 font-medium">{log.location}</td>
                    <td className="px-5 py-4">
                      <span className="px-2 py-0.5 rounded-md font-bold uppercase text-[10.5px] bg-amber-50 text-amber-600 border border-amber-200">
                        {log.severity}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-semibold text-slate-700 dark:text-slate-300">{log.reportedBy}</td>
                    <td className="px-5 py-4">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <AddMaintenanceModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <ViewDetailModal
        isOpen={!!selectedRecord}
        onClose={() => setSelectedRecord(null)}
        title="MEX CMMS Work Order Job Card"
        data={selectedRecord}
      />
    </div>
  );
}
