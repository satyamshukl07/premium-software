import React, { useState } from 'react';
import { useChm } from '../../context/ChmContext.jsx';
import {
  BarChart3,
  TrendingUp,
  Car,
  DollarSign,
  Fuel,
  Wrench,
  Users,
  ChevronRight,
  ArrowUpRight,
  Calendar,
} from 'lucide-react';

export default function AnalyticsPage() {
  const { fleets, bookings, transactions, expenses, currencySymbol } = useChm();
  const [timeRange, setTimeRange] = useState('Month'); // Week, Month, Quarter, Year

  const totalRevenue = transactions.reduce((acc, t) => acc + (Number(t.amount) || 0), 0);
  const totalExpenses = expenses.reduce((acc, e) => acc + (Number(e.amount) || 0), 0);
  const netProfit = totalRevenue - totalExpenses;

  // Monthly revenue bars
  const months = [
    { name: 'Apr', rev: 14500, exp: 4200 },
    { name: 'May', rev: 18200, exp: 5100 },
    { name: 'Jun', rev: 21400, exp: 6200 },
    { name: 'Jul', rev: 19800, exp: 5800 },
    { name: 'Aug', rev: 24500, exp: 7100 },
    { name: 'Sep', rev: 28900, exp: 8200 },
  ];

  const maxRev = Math.max(...months.map((m) => m.rev));

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
        <span>Analytics</span>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-blue-600 dark:text-blue-400 font-bold">Fleet Performance</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            Analytics & Insights
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Fleet utilization rates, operating margins, maintenance ROI, and revenue metrics.
          </p>
        </div>

        <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300">
          {['Week', 'Month', 'Quarter', 'Year'].map((r) => (
            <button
              key={r}
              onClick={() => setTimeRange(r)}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                timeRange === r ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' : ''
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Top 4 Analytical KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">Fleet Utilization</span>
            <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600">
              <Car className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-2">78.5%</div>
          <div className="mt-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '78.5%' }}></div>
          </div>
          <span className="text-[11px] text-slate-400 mt-2 block">+4.2% from last month</span>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">Gross Rental Revenue</span>
            <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-2">
            {currencySymbol}28,900
          </div>
          <div className="flex items-center gap-1 text-emerald-600 text-[11px] font-bold mt-2">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>+14.8% vs targets</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">Avg Revenue / Vehicle</span>
            <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-2">
            {currencySymbol}1,450 / mo
          </div>
          <span className="text-[11px] text-slate-400 mt-2 block">Top model: Truck TR001</span>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">Operating Cost Ratio</span>
            <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600">
              <Wrench className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-2">28.4%</div>
          <span className="text-[11px] text-emerald-600 font-semibold mt-2 block">Within 30% threshold</span>
        </div>
      </div>

      {/* Revenue & Operating Cost Comparison Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Revenue vs Operating Costs</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Monthly breakdown over the last 6 billing periods</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold">
              <span className="flex items-center gap-1.5 text-blue-600">
                <span className="w-3 h-3 rounded-md bg-blue-600"></span>
                <span>Revenue</span>
              </span>
              <span className="flex items-center gap-1.5 text-amber-500">
                <span className="w-3 h-3 rounded-md bg-amber-500"></span>
                <span>Expenses</span>
              </span>
            </div>
          </div>

          {/* Visual Chart Bars */}
          <div className="h-64 flex items-end justify-between gap-4 pt-8">
            {months.map((m) => {
              const revHeight = (m.rev / maxRev) * 100;
              const expHeight = (m.exp / maxRev) * 100;
              return (
                <div key={m.name} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                  <div className="w-full flex items-end justify-center gap-1.5 h-48">
                    <div
                      className="w-1/2 max-w-[28px] bg-blue-600 rounded-t-lg transition-all duration-300 hover:bg-blue-700 relative group"
                      style={{ height: `${revHeight}%` }}
                    >
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-0.5 px-1.5 rounded pointer-events-none whitespace-nowrap shadow-lg">
                        {currencySymbol}{m.rev}
                      </div>
                    </div>
                    <div
                      className="w-1/2 max-w-[28px] bg-amber-500 rounded-t-lg transition-all duration-300 hover:bg-amber-600 relative group"
                      style={{ height: `${expHeight}%` }}
                    >
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-0.5 px-1.5 rounded pointer-events-none whitespace-nowrap shadow-lg">
                        {currencySymbol}{m.exp}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">{m.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fleet Category Share */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Fleet Distribution</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Inventory allocation by vehicle classification</p>

            <div className="space-y-4 mt-6">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>1 Ton Vans (Commercial)</span>
                  <span className="text-blue-600 font-mono">50%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>Van Small Truck (VST)</span>
                  <span className="text-purple-600 font-mono">50%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>SUV & 4WD Utilities</span>
                  <span className="text-emerald-600 font-mono">On Order</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 mt-6">
            <span className="font-bold text-slate-900 dark:text-white block mb-1">AI Fleet Recommendation</span>
            Demand for 1 Ton Vans is currently peak. Adding 2 additional units will increase monthly yield by estimated 18%.
          </div>
        </div>
      </div>
    </div>
  );
}
