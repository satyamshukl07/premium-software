import React, { useState } from 'react';
import { Plus, Check, Clock, AlertTriangle, Search, Filter, MoreVertical, Wrench } from 'lucide-react';

export default function HeroDashboardMockup() {
  const [workOrders, setWorkOrders] = useState([
    {
      id: '235',
      priority: 'Urgent',
      priorityColor: 'bg-red-500/20 text-red-400 border border-red-500/30',
      status: 'Entered',
      text: 'Replace expired fire extinguishers.',
      due: 'Urgent',
    },
    {
      id: '234',
      priority: 'Within 14 days',
      priorityColor: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
      status: 'In Progress',
      text: 'Lubricate conveyor belt rollers.',
      due: 'Within 14 days',
    },
  ]);

  const [assetInput, setAssetInput] = useState('RM2203');
  const [issueInput, setIssueInput] = useState('Bearing squeal');
  const [statusInput, setStatusInput] = useState('Entered');
  const [priorityInput, setPriorityInput] = useState('2 - Within 3 days');
  const [deptInput, setDeptInput] = useState('Services');
  const [isCreated, setIsCreated] = useState(false);
  const [myWorkCount, setMyWorkCount] = useState(6);

  const handleCreate = (e) => {
    e.preventDefault();
    const newId = (parseInt(workOrders[0]?.id || '235', 10) + 1).toString();
    const newOrder = {
      id: newId,
      priority: priorityInput.includes('3 days') ? 'Urgent' : 'Scheduled',
      priorityColor: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
      status: statusInput,
      text: `${issueInput} on asset ${assetInput}`,
      due: 'Active',
    };
    setWorkOrders([newOrder, ...workOrders]);
    setMyWorkCount((prev) => prev + 1);
    setIsCreated(true);
    setTimeout(() => setIsCreated(false), 2500);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
      {/* Glow effect */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-600/20 to-blue-600/20 blur-xl opacity-60"></div>

      {/* Main Container Card */}
      <div className="relative bg-[#111c2e]/95 backdrop-blur-md rounded-2xl border border-slate-700/60 p-5 sm:p-6 shadow-2xl text-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Left Column: Work Order Listing (Col 7) */}
          <div className="md:col-span-7 space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/60">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-slate-800 text-slate-300">
                  <Wrench className="w-4 h-4 text-red-400" />
                </div>
                <h4 className="text-sm font-bold tracking-tight text-slate-100">
                  Work Order Listing
                </h4>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Search className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                <Filter className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
              </div>
            </div>

            {/* List of active work orders */}
            <div className="space-y-2.5">
              {workOrders.map((wo) => (
                <div
                  key={wo.id}
                  className="bg-[#0b1320] border border-slate-700/50 rounded-xl p-3 hover:border-slate-600 transition-all"
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-mono text-slate-400 font-semibold text-[11px]">
                      WORK ORDER {wo.id}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${wo.priorityColor}`}>
                        {wo.priority}
                      </span>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                        {wo.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-slate-100 leading-snug">
                    {wo.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Quick Metric Tiles */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {/* Overdue Work Orders Card (Red Accent) */}
              <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-3.5 text-white shadow-lg relative overflow-hidden group">
                <div className="absolute -right-3 -bottom-3 w-16 h-16 bg-white/10 rounded-full blur-xs"></div>
                <span className="text-3xl font-extrabold tracking-tight block">
                  19
                </span>
                <span className="text-[11px] font-semibold text-red-100 leading-tight block mt-0.5">
                  Overdue Work Orders
                </span>
              </div>

              {/* My Work Orders Card (Blue Accent) */}
              <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl p-3.5 text-white shadow-lg relative overflow-hidden group">
                <div className="absolute -right-3 -bottom-3 w-16 h-16 bg-white/10 rounded-full blur-xs"></div>
                <span className="text-3xl font-extrabold tracking-tight block">
                  {myWorkCount}
                </span>
                <span className="text-[11px] font-semibold text-blue-100 leading-tight block mt-0.5">
                  My Work Orders
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Create Work Order form panel (Col 5) */}
          <div className="md:col-span-5 bg-[#0b1320]/90 rounded-xl p-4 border border-slate-700/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Create Work Order
                </h5>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>

              <form onSubmit={handleCreate} className="space-y-2 text-xs">
                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                    Asset
                  </label>
                  <input
                    type="text"
                    value={assetInput}
                    onChange={(e) => setAssetInput(e.target.value)}
                    className="w-full bg-[#162133] border border-slate-700 rounded-md px-2.5 py-1 text-slate-100 font-mono text-xs focus:outline-hidden focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                    Issue
                  </label>
                  <input
                    type="text"
                    value={issueInput}
                    onChange={(e) => setIssueInput(e.target.value)}
                    className="w-full bg-[#162133] border border-slate-700 rounded-md px-2.5 py-1 text-slate-100 text-xs focus:outline-hidden focus:border-red-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                      Status
                    </label>
                    <select
                      value={statusInput}
                      onChange={(e) => setStatusInput(e.target.value)}
                      className="w-full bg-[#162133] border border-slate-700 rounded-md px-2 py-1 text-slate-100 text-xs focus:outline-hidden focus:border-red-500"
                    >
                      <option>Entered</option>
                      <option>In Progress</option>
                      <option>Pending Parts</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                      Department
                    </label>
                    <input
                      type="text"
                      value={deptInput}
                      onChange={(e) => setDeptInput(e.target.value)}
                      className="w-full bg-[#162133] border border-slate-700 rounded-md px-2 py-1 text-slate-100 text-xs focus:outline-hidden focus:border-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">
                    Priority
                  </label>
                  <select
                    value={priorityInput}
                    onChange={(e) => setPriorityInput(e.target.value)}
                    className="w-full bg-[#162133] border border-slate-700 rounded-md px-2 py-1 text-slate-100 text-xs focus:outline-hidden focus:border-red-500"
                  >
                    <option>1 - Urgent (24 Hours)</option>
                    <option>2 - Within 3 days</option>
                    <option>3 - Standard (14 days)</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className={`w-full py-2 px-3 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                      isCreated
                        ? 'bg-emerald-600 text-white'
                        : 'bg-sky-500 hover:bg-sky-400 text-white shadow-sm'
                    }`}
                  >
                    {isCreated ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Order Logged!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Create +</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
              <span>Next PM Sync:</span>
              <span className="text-emerald-400 font-mono font-medium">Ready (Online)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
