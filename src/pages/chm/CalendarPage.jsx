import React, { useState } from 'react';
import { useChm } from '../../context/ChmContext.jsx';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  Car,
  User,
  CheckCircle2,
} from 'lucide-react';
import { NewBookingModal } from '../../components/chm/ChmModals.jsx';

export default function CalendarPage() {
  const { bookings, fleets } = useChm();

  const [currentMonth, setCurrentMonth] = useState('September 2026');
  const [viewMode, setViewMode] = useState('Month'); // Month, Week, Day
  const [newBookingOpen, setNewBookingOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  // Calendar days generation for September 2026
  // Sept 1 2026 was a Tuesday (day 2 of week). 30 days in September.
  const daysInMonth = 30;
  const startDayOfWeek = 2; // Tuesday
  const calendarCells = [];

  // Previous month padding days (Aug 30, 31)
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    calendarCells.push({ day: 31 - i, isCurrentMonth: false, dateStr: `2026-08-${31 - i}` });
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    const padDay = String(d).padStart(2, '0');
    calendarCells.push({ day: d, isCurrentMonth: true, dateStr: `2026-09-${padDay}` });
  }

  // Next month padding
  const remaining = 35 - calendarCells.length;
  for (let d = 1; d <= remaining; d++) {
    calendarCells.push({ day: d, isCurrentMonth: false, dateStr: `2026-10-0${d}` });
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
        <span>Calendar</span>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-blue-600 dark:text-blue-400 font-bold">Booking Schedule</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            Booking Calendar
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Visualize fleet utilization, drop-offs, pickups, and maintenance slots.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Month / Week / Day toggle */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300">
            {['Month', 'Week', 'Day'].map((m) => (
              <button
                key={m}
                onClick={() => setViewMode(m)}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  viewMode === m ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' : ''
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          <button
            onClick={() => setNewBookingOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>New Booking</span>
          </button>
        </div>
      </div>

      {/* Calendar Navigation & Legend */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-blue-600" />
            <span>{currentMonth}</span>
          </h2>
          <div className="flex items-center gap-1 border border-slate-200 dark:border-slate-700 rounded-lg p-0.5">
            <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-600 dark:text-slate-300">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="px-2 py-0.5 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-700 dark:text-slate-300">
              Today
            </button>
            <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded text-slate-600 dark:text-slate-300">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
          <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span>On Hire (Active)</span>
          </span>
          <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span>Available Depot</span>
          </span>
          <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <span>Service Slot</span>
          </span>
          <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span>Pickup / Return</span>
          </span>
        </div>
      </div>

      {/* Calendar Month Grid */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs overflow-hidden">
        {/* Day headers */}
        <div className="grid grid-cols-7 text-center font-bold text-xs py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 text-slate-600 dark:text-slate-400">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        {/* Day cells */}
        <div className="grid grid-cols-7 divide-x divide-y divide-slate-100 dark:divide-slate-800">
          {calendarCells.map((cell, idx) => {
            const hasBooking = cell.isCurrentMonth && cell.day >= 1 && cell.day <= 30;
            const isToday = cell.isCurrentMonth && cell.day === 8;

            return (
              <div
                key={idx}
                onClick={() => setSelectedDay(cell)}
                className={`min-h-[110px] p-2 flex flex-col justify-between transition-colors cursor-pointer hover:bg-blue-50/40 dark:hover:bg-slate-800/60 ${
                  !cell.isCurrentMonth ? 'bg-slate-50/40 dark:bg-slate-950/40 text-slate-300 dark:text-slate-600' : ''
                } ${isToday ? 'bg-blue-50/20 dark:bg-blue-950/20' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full ${
                      isToday
                        ? 'bg-blue-600 text-white'
                        : cell.isCurrentMonth
                        ? 'text-slate-800 dark:text-slate-200'
                        : 'text-slate-400'
                    }`}
                  >
                    {cell.day}
                  </span>
                  {isToday && (
                    <span className="text-[10px] uppercase font-black text-blue-600 dark:text-blue-400">
                      Today
                    </span>
                  )}
                </div>

                {/* Event tags inside day cell */}
                <div className="space-y-1 my-1">
                  {cell.isCurrentMonth && cell.day >= 1 && cell.day <= 30 && (
                    <div className="px-1.5 py-1 rounded bg-red-100 dark:bg-red-950/70 border border-red-200 dark:border-red-900 text-[10.5px] font-bold text-red-700 dark:text-red-300 truncate shadow-2xs">
                      Raj Singh (TG1232)
                    </div>
                  )}

                  {cell.isCurrentMonth && cell.day === 12 && (
                    <div className="px-1.5 py-1 rounded bg-amber-100 dark:bg-amber-950/70 border border-amber-200 dark:border-amber-900 text-[10.5px] font-bold text-amber-700 dark:text-amber-300 truncate shadow-2xs">
                      VST023 - 10k Svc
                    </div>
                  )}
                </div>

                <div className="text-[10px] text-slate-400 font-medium text-right">
                  {cell.isCurrentMonth ? '1 Active' : ''}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <NewBookingModal isOpen={newBookingOpen} onClose={() => setNewBookingOpen(false)} />
    </div>
  );
}
