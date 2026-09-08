import React, { useState } from 'react';
import { Plus, Minus, BarChart2, ListFilter, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { benefitAccordions } from '../data/contentData.js';

export default function BenefitsAccordion() {
  const [openId, setOpenId] = useState('organisation'); // 'organisation' open as shown in 00:12 of video
  const [activeTab, setActiveTab] = useState('graph'); // 'list' | 'graph'

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 bg-[#0d1726] text-white overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
            Streamline your maintenance with ease
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            With 30+ years of operational experience, MEX combines high-powered asset management with a modern, human-centric interface built for engineers in the field.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Dashboard Visualization & Graphs (Col 6) */}
          <div className="lg:col-span-6 bg-[#111c2e] rounded-2xl border border-slate-700/60 p-5 sm:p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-700/60 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <h4 className="text-sm font-bold text-slate-100">
                  Insights & Compliance
                </h4>
              </div>

              {/* View Switcher: List vs Graph */}
              <div className="flex items-center bg-[#0b1320] p-0.5 rounded-lg border border-slate-700">
                <button
                  onClick={() => setActiveTab('list')}
                  className={`flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                    activeTab === 'list'
                      ? 'bg-sky-500 text-white shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <ListFilter className="w-3.5 h-3.5" />
                  <span>List</span>
                </button>
                <button
                  onClick={() => setActiveTab('graph')}
                  className={`flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                    activeTab === 'graph'
                      ? 'bg-sky-500 text-white shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <BarChart2 className="w-3.5 h-3.5" />
                  <span>Graph</span>
                </button>
              </div>
            </div>

            {activeTab === 'graph' ? (
              <div className="space-y-6">
                {/* Graph 1: Closed Work Orders by Department */}
                <div className="bg-[#0b1320] p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-bold text-slate-200">Closed Work Orders by Department</span>
                    <div className="flex items-center gap-3 text-[10px] text-slate-400">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-xs bg-red-500"></span> WO Count
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-xs bg-sky-400"></span> Man Hours
                      </span>
                    </div>
                  </div>

                  {/* Visual Bar Chart */}
                  <div className="h-32 flex items-end justify-between gap-3 pt-4 px-2 border-b border-slate-800 text-[10px] text-slate-400">
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full flex justify-center items-end gap-1 h-24">
                        <div className="w-3.5 bg-red-500 rounded-t-sm h-[75%] transition-all"></div>
                        <div className="w-3.5 bg-sky-400 rounded-t-sm h-[50%] transition-all"></div>
                      </div>
                      <span className="text-[10px] font-medium">Bake</span>
                    </div>

                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full flex justify-center items-end gap-1 h-24">
                        <div className="w-3.5 bg-red-500 rounded-t-sm h-[90%] transition-all"></div>
                        <div className="w-3.5 bg-sky-400 rounded-t-sm h-[65%] transition-all"></div>
                      </div>
                      <span className="text-[10px] font-medium">Services</span>
                    </div>

                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full flex justify-center items-end gap-1 h-24">
                        <div className="w-3.5 bg-red-500 rounded-t-sm h-[40%] transition-all"></div>
                        <div className="w-3.5 bg-sky-400 rounded-t-sm h-[80%] transition-all"></div>
                      </div>
                      <span className="text-[10px] font-medium">Elec</span>
                    </div>

                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full flex justify-center items-end gap-1 h-24">
                        <div className="w-3.5 bg-red-500 rounded-t-sm h-[60%] transition-all"></div>
                        <div className="w-3.5 bg-sky-400 rounded-t-sm h-[45%] transition-all"></div>
                      </div>
                      <span className="text-[10px] font-medium">Mech</span>
                    </div>
                  </div>
                </div>

                {/* Graph 2: Closed Work Orders by Job Type */}
                <div className="bg-[#0b1320] p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-bold text-slate-200">Closed Work Orders by Job Type</span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                      98.2% Compliance
                    </span>
                  </div>

                  <div className="h-28 flex items-end justify-between gap-3 pt-2 px-2 border-b border-slate-800 text-[10px] text-slate-400">
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full flex justify-center items-end gap-1 h-20">
                        <div className="w-3 bg-red-500 rounded-t-sm h-[85%]"></div>
                        <div className="w-3 bg-sky-400 rounded-t-sm h-[70%]"></div>
                      </div>
                      <span>PM Routine</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full flex justify-center items-end gap-1 h-20">
                        <div className="w-3 bg-red-500 rounded-t-sm h-[30%]"></div>
                        <div className="w-3 bg-sky-400 rounded-t-sm h-[25%]"></div>
                      </div>
                      <span>Breakdown</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full flex justify-center items-end gap-1 h-20">
                        <div className="w-3 bg-red-500 rounded-t-sm h-[60%]"></div>
                        <div className="w-3 bg-sky-400 rounded-t-sm h-[45%]"></div>
                      </div>
                      <span>Safety Audit</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-[#0b1320] rounded-xl border border-slate-800 p-3 space-y-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-900/60 flex items-center justify-between">
                  <span className="font-medium text-slate-300">Assigned to Trades</span>
                  <span className="font-bold text-sky-400">42 active</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 flex items-center justify-between">
                  <span className="font-medium text-slate-300">Backlog Aging &lt; 30d</span>
                  <span className="font-bold text-emerald-400">14 orders</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 flex items-center justify-between">
                  <span className="font-medium text-slate-300">PM Work Order Compliance</span>
                  <span className="font-bold text-amber-400">96.8% rate</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 flex items-center justify-between">
                  <span className="font-medium text-slate-300">Open Breakdown Tickets</span>
                  <span className="font-bold text-red-400">3 critical</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Expandable Feature Content (Col 6) */}
          <div className="lg:col-span-6 space-y-4">
            {benefitAccordions.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl transition-all duration-200 border ${
                    isOpen
                      ? 'bg-[#142238] border-slate-700/80 shadow-lg'
                      : 'bg-[#111c2e]/70 border-slate-800/80 hover:bg-[#111c2e]'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                      {item.title}
                    </h3>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
                        isOpen ? 'bg-red-600 text-white' : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-0 animate-in fade-in duration-200">
                      <p className="text-sm text-slate-300 leading-relaxed font-normal">
                        {item.content}
                      </p>
                      <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs font-semibold">
                        <span className="text-emerald-400 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Key Impact: {item.stats}</span>
                        </span>
                        <span className="text-slate-400">Included in all plans</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
