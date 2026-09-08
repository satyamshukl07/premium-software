import React, { useState } from 'react';
import { useChm } from '../../context/ChmContext.jsx';
import {
  Car,
  Search,
  Plus,
  ChevronDown,
  ChevronRight,
  Printer,
  FileSpreadsheet,
  Copy,
  Wrench,
  Fuel,
  Radio,
  Shield,
  Gauge,
} from 'lucide-react';
import { AddVehicleModal } from '../../components/chm/ChmModals.jsx';

export default function FleetStatusPage() {
  const { fleets, showToast, currencySymbol } = useChm();

  const [searchFilter, setSearchFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [categoryFilter, setCategoryFilter] = useState('All Category');
  const [tableSearch, setTableSearch] = useState('');
  const [expandedRows, setExpandedRows] = useState({});
  const [addVehicleOpen, setAddVehicleOpen] = useState(false);

  const toggleExpand = (rego) => {
    setExpandedRows((prev) => ({ ...prev, [rego]: !prev[rego] }));
  };

  // Filtered fleets
  const filteredFleets = fleets.filter((f) => {
    // Top general filter
    if (searchFilter) {
      const term = searchFilter.toLowerCase();
      const match =
        f.make?.toLowerCase().includes(term) ||
        f.model?.toLowerCase().includes(term) ||
        f.registrationNo?.toLowerCase().includes(term);
      if (!match) return false;
    }

    if (statusFilter !== 'All Status' && f.status !== statusFilter) {
      return false;
    }

    if (categoryFilter !== 'All Category' && f.category !== categoryFilter) {
      return false;
    }

    // Table specific search
    if (tableSearch) {
      const term = tableSearch.toLowerCase();
      const match =
        f.registrationNo?.toLowerCase().includes(term) ||
        f.make?.toLowerCase().includes(term) ||
        f.model?.toLowerCase().includes(term) ||
        f.category?.toLowerCase().includes(term);
      if (!match) return false;
    }

    return true;
  });

  // Table action buttons
  const handleCopy = () => {
    const text = filteredFleets
      .map(
        (f) =>
          `${f.registrationNo}\t${f.year}\t${f.model}\t${f.category}\t${f.make}\t${f.status}\t${f.transmission}\t${currencySymbol}${f.dailyRate}/day`
      )
      .join('\n');
    navigator.clipboard.writeText(`Registration\tYear\tModel\tCategory\tMake\tStatus\tTransmission\tRate\n${text}`);
    showToast('Fleet data copied to clipboard!');
  };

  const handleExportCSV = () => {
    const headers = 'Registration No,Year,Model,Category,Make,Status,Transmission,Daily Rate\n';
    const rows = filteredFleets
      .map(
        (f) =>
          `"${f.registrationNo}","${f.year}","${f.model}","${f.category}","${f.make}","${f.status}","${f.transmission}","${f.dailyRate}"`
      )
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chm_fleets_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    showToast('Fleet CSV export downloaded!');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Top Filter Bar (Directly matching video reference 00:04) */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
          <div className="sm:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by Make, Model, License Plate..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="sm:col-span-3">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All Status">All Status</option>
              <option value="Available">Available</option>
              <option value="On Hire">On Hire</option>
              <option value="On Maintenance">On Maintenance</option>
              <option value="Accidental">Accidental</option>
            </select>
          </div>

          <div className="sm:col-span-3">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All Category">All Category</option>
              <option value="1 Ton Van">1 Ton Van</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="4WD Ute">4WD Ute</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Table Card: All Fleets */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs overflow-hidden">
        {/* Table Top Bar */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">All Fleets</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Total active registered rental fleet units</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Copy CSV Print Buttons (Exactly as shown in video) */}
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
                onClick={handlePrint}
                className="px-3 py-1.5 hover:bg-white dark:hover:bg-slate-700 rounded-md transition-colors flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5 text-slate-500" />
                <span>Print</span>
              </button>
            </div>

            {/* Table Search */}
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

            {/* Add Vehicle CTA */}
            <button
              onClick={() => setAddVehicleOpen(true)}
              className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Add Vehicle</span>
            </button>
          </div>
        </div>

        {/* Table View */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/80 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="w-10 px-4 py-3.5 text-center"></th>
                <th className="px-4 py-3.5">Registration No</th>
                <th className="px-4 py-3.5">Year</th>
                <th className="px-4 py-3.5">Model</th>
                <th className="px-4 py-3.5">Category</th>
                <th className="px-4 py-3.5">Make</th>
                <th className="px-4 py-3.5">Status</th>
                <th className="px-4 py-3.5">Transmission</th>
                <th className="px-4 py-3.5">Daily_Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {filteredFleets.length === 0 ? (
                <tr>
                  <td colSpan={9} className="px-5 py-8 text-center text-slate-400">
                    No vehicles found matching current criteria
                  </td>
                </tr>
              ) : (
                filteredFleets.map((f) => {
                  const isExpanded = !!expandedRows[f.registrationNo];
                  const isOnHire = f.status === 'On Hire';
                  return (
                    <React.Fragment key={f.id}>
                      <tr className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                        <td className="px-4 py-3.5 text-center">
                          <button
                            onClick={() => toggleExpand(f.registrationNo)}
                            className="w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white flex items-center justify-center font-bold text-xs transition-colors shadow-2xs"
                            title="Expand specs"
                          >
                            {isExpanded ? '−' : '+'}
                          </button>
                        </td>
                        <td className="px-4 py-3.5 font-bold font-mono text-blue-600 dark:text-blue-400">
                          {f.registrationNo}
                        </td>
                        <td className="px-4 py-3.5 font-semibold">{f.year}</td>
                        <td className="px-4 py-3.5 font-mono">{f.model}</td>
                        <td className="px-4 py-3.5">{f.category}</td>
                        <td className="px-4 py-3.5">{f.make}</td>
                        <td className="px-4 py-3.5">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                              isOnHire
                                ? 'bg-red-50 text-red-600 dark:bg-red-950/50 dark:text-red-400 border border-red-200 dark:border-red-800'
                                : 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                            }`}
                          >
                            {f.status}
                          </span>
                        </td>
                        <td className="px-4 py-3.5">{f.transmission}</td>
                        <td className="px-4 py-3.5 font-bold font-mono">
                          {currencySymbol}{f.dailyRate.toFixed(2)} / day
                        </td>
                      </tr>

                      {/* Expandable Child Row */}
                      {isExpanded && (
                        <tr className="bg-slate-50/80 dark:bg-slate-800/80 border-y border-slate-200 dark:border-slate-700 animate-in fade-in duration-150">
                          <td colSpan={9} className="px-8 py-4">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                              <div className="space-y-1">
                                <span className="text-slate-400 font-semibold flex items-center gap-1">
                                  <Gauge className="w-3.5 h-3.5 text-blue-500" />
                                  <span>Odometer:</span>
                                </span>
                                <p className="font-bold text-slate-800 dark:text-white">{f.odometer || '48,210 km'}</p>
                              </div>
                              <div className="space-y-1">
                                <span className="text-slate-400 font-semibold flex items-center gap-1">
                                  <Fuel className="w-3.5 h-3.5 text-amber-500" />
                                  <span>Fuel Level:</span>
                                </span>
                                <p className="font-bold text-slate-800 dark:text-white">{f.fuelLevel || '85%'}</p>
                              </div>
                              <div className="space-y-1">
                                <span className="text-slate-400 font-semibold flex items-center gap-1">
                                  <Radio className="w-3.5 h-3.5 text-emerald-500" />
                                  <span>4G GPS IMEI:</span>
                                </span>
                                <p className="font-bold font-mono text-slate-800 dark:text-white">{f.gpsTrackerImei || '864209041289123'}</p>
                              </div>
                              <div className="space-y-1">
                                <span className="text-slate-400 font-semibold flex items-center gap-1">
                                  <Shield className="w-3.5 h-3.5 text-purple-500" />
                                  <span>Insurance Provider:</span>
                                </span>
                                <p className="font-bold text-slate-800 dark:text-white">{f.insuranceProvider || 'Techtonika Autolink'}</p>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
          <div>
            Showing 1 to {filteredFleets.length} of {filteredFleets.length} entries
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

      <AddVehicleModal isOpen={addVehicleOpen} onClose={() => setAddVehicleOpen(false)} />
    </div>
  );
}
