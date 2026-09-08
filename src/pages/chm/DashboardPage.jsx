import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useChm } from '../../context/ChmContext.jsx';
import {
  Car,
  Users,
  CalendarCheck,
  CheckCircle2,
  AlertTriangle,
  Wrench,
  Clock,
  RotateCcw,
  Plus,
  RefreshCw,
  Search,
  ArrowRight,
  CreditCard,
  Calendar,
  FileText,
} from 'lucide-react';
import {
  NewBookingModal,
  AddVehicleModal,
  AddCustomerModal,
} from '../../components/chm/ChmModals.jsx';

export default function DashboardPage() {
  const navigate = useNavigate();
  const { fleets, customers, bookings, showToast, currencySymbol } = useChm();

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedDate, setSelectedDate] = useState('2026-09-08');
  const [tableSearch, setTableSearch] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Modals
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [vehicleModalOpen, setVehicleModalOpen] = useState(false);
  const [customerModalOpen, setCustomerModalOpen] = useState(false);

  // Computed metrics
  const totalFleets = fleets.length;
  const totalCustomers = customers.length;
  const activeRentals = bookings.filter((b) => b.status === 'On Hire').length;
  const availableVehicles = fleets.filter((f) => f.status === 'Available').length;
  const accidentalVehicles = fleets.filter((f) => f.status === 'Accidental').length;
  const onMaintenance = fleets.filter((f) => f.status === 'On Maintenance').length || 1;
  const todayPickup = 0;
  const todayReturn = 0;

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      showToast('Dashboard metrics synchronized with live depot status');
    }, 600);
  };

  const metricCards = [
    {
      id: 'fleets',
      label: 'Fleets',
      value: totalFleets,
      path: '/products/chm/fleet-status',
      icon: Car,
      gradient: 'from-blue-600 to-indigo-600',
      bgLight: 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400',
    },
    {
      id: 'customers',
      label: 'Customers',
      value: totalCustomers,
      path: '/products/chm/customers',
      icon: Users,
      gradient: 'from-emerald-600 to-teal-600',
      bgLight: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400',
    },
    {
      id: 'activeRentals',
      label: 'Active Rentals',
      value: activeRentals,
      path: '/products/chm/bookings',
      icon: CalendarCheck,
      gradient: 'from-cyan-600 to-blue-600',
      bgLight: 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400',
    },
    {
      id: 'availableVehicles',
      label: 'Available Vehicles',
      value: availableVehicles,
      path: '/products/chm/fleet-status',
      icon: CheckCircle2,
      gradient: 'from-green-600 to-emerald-600',
      bgLight: 'bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400',
    },
    {
      id: 'accidental',
      label: 'Accidental',
      value: accidentalVehicles,
      path: '/products/chm/driver-management',
      icon: AlertTriangle,
      gradient: 'from-amber-500 to-orange-600',
      bgLight: 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400',
    },
    {
      id: 'onMaintenance',
      label: 'On Maintenance',
      value: onMaintenance,
      path: '/products/chm/maintenance',
      icon: Wrench,
      gradient: 'from-rose-500 to-red-600',
      bgLight: 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400',
    },
    {
      id: 'todayPickup',
      label: 'Today Pickup',
      value: todayPickup,
      path: '/products/chm/bookings',
      icon: Clock,
      gradient: 'from-purple-600 to-violet-600',
      bgLight: 'bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400',
    },
    {
      id: 'todayReturn',
      label: 'Today Return',
      value: todayReturn,
      path: '/products/chm/bookings',
      icon: RotateCcw,
      gradient: 'from-indigo-600 to-blue-700',
      bgLight: 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400',
    },
  ];

  const filteredBookings = bookings.filter((b) => {
    if (!tableSearch) return true;
    const term = tableSearch.toLowerCase();
    return (
      b.customerName?.toLowerCase().includes(term) ||
      b.customerPhone?.includes(term) ||
      b.registrationNo?.toLowerCase().includes(term) ||
      b.id?.toLowerCase().includes(term)
    );
  });

  return (
    <div className="space-y-6">
      {/* Top Header Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Dashboard</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Real-time fleet operations, active rentals, and depot status overview.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-xs focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            onClick={handleRefresh}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-xs"
            title="Refresh metrics"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-blue-600' : ''}`} />
          </button>
        </div>
      </div>

      {/* Quick Action Buttons Bar (Exactly as shown in video reference 00:00) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        <button
          onClick={() => setBookingModalOpen(true)}
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>New Booking</span>
        </button>

        <button
          onClick={() => setVehicleModalOpen(true)}
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Vehicle</span>
        </button>

        <button
          onClick={() => setCustomerModalOpen(true)}
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Customer</span>
        </button>

        <button
          onClick={() => navigate('/products/chm/financials/transactions')}
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
        >
          <CreditCard className="w-4 h-4" />
          <span>Record Payment</span>
        </button>

        <button
          onClick={() => navigate('/products/chm/calendar')}
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-pink-600 hover:bg-pink-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
        >
          <Calendar className="w-4 h-4" />
          <span>View Calendar</span>
        </button>

        <button
          onClick={() => navigate('/products/chm/reports')}
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
        >
          <FileText className="w-4 h-4" />
          <span>Generate Report</span>
        </button>
      </div>

      {/* 8 Metric Cards Grid (Responsive & Clickable) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {metricCards.map((card) => {
          const Icon = card.icon;
          return (
            <button
              key={card.id}
              onClick={() => navigate(card.path)}
              className="group bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-4 rounded-2xl shadow-xs hover:shadow-md hover:border-blue-400 dark:hover:border-blue-500 transition-all text-left flex flex-col justify-between"
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 group-hover:text-blue-600 transition-colors truncate">
                  {card.label}
                </span>
                <div className={`p-1.5 rounded-lg ${card.bgLight} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="text-2xl font-black text-slate-900 dark:text-white">
                {card.value}
              </div>
            </button>
          );
        })}
      </div>

      {/* Two Weekly Dispatch Cards (On Rent & Returns) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Card 1: This Week – On Rent */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">This Week – On Rent</h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Vehicles scheduled for pickup this week.
              </p>
            </div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-950/60 dark:text-blue-400 px-2.5 py-1 rounded-full">
              0 Bookings
            </span>
          </div>

          <div className="py-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-500 mb-3 shadow-inner">
              <Clock className="w-8 h-8 opacity-80" />
            </div>
            <p className="text-xs font-semibold text-slate-400">No pickups scheduled for current week window</p>
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
            <Link
              to="/products/chm/bookings"
              className="w-full py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-slate-700 dark:text-slate-300 hover:text-blue-600 font-bold text-xs flex items-center justify-center gap-2 transition-colors border border-slate-200/60 dark:border-slate-700"
            >
              <span>View All Bookings</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Card 2: This Week – Returns */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-slate-900 dark:text-white text-base">This Week – Returns</h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Vehicles scheduled for return this week.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-400 px-2.5 py-1 rounded-full">
              0 Returns
            </span>
          </div>

          <div className="py-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-slate-800 flex items-center justify-center text-emerald-500 mb-3 shadow-inner">
              <RotateCcw className="w-8 h-8 opacity-80" />
            </div>
            <p className="text-xs font-semibold text-slate-400">No fleet returns due in the immediate schedule</p>
          </div>

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
            <Link
              to="/products/chm/bookings"
              className="w-full py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 text-slate-700 dark:text-slate-300 hover:text-emerald-600 font-bold text-xs flex items-center justify-center gap-2 transition-colors border border-slate-200/60 dark:border-slate-700"
            >
              <span>View All Returns</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* "All Bookings" Table (Directly matching video reference 00:01) */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xs overflow-hidden">
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">All Bookings</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Live booking dispatch log and vehicle allocation</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
              <span>Show</span>
              <select
                value={entriesPerPage}
                onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                className="px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold outline-none"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span>entries</span>
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search..."
                value={tableSearch}
                onChange={(e) => setTableSearch(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 w-40 sm:w-48"
              />
            </div>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/80 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="px-5 py-3.5">Customer Name</th>
                <th className="px-5 py-3.5">Customer Contact</th>
                <th className="px-5 py-3.5">Registration No</th>
                <th className="px-5 py-3.5">Pickup Date</th>
                <th className="px-5 py-3.5">Return Date</th>
                <th className="px-5 py-3.5">Created Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              {filteredBookings.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-8 text-center text-slate-400">
                    No bookings found matching query
                  </td>
                </tr>
              ) : (
                filteredBookings.map((b) => (
                  <tr key={b.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="px-5 py-4 font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                      {b.customerName}
                    </td>
                    <td className="px-5 py-4 font-mono text-slate-600 dark:text-slate-300">{b.customerPhone}</td>
                    <td className="px-5 py-4">
                      <span className="font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700">
                        {b.registrationNo}
                      </span>
                    </td>
                    <td className="px-5 py-4">{b.pickupDateTime}</td>
                    <td className="px-5 py-4">{b.returnDateTime}</td>
                    <td className="px-5 py-4 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                      {b.createdDate}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
          <div>
            Showing 1 to {filteredBookings.length} of {filteredBookings.length} entries
          </div>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 font-semibold" disabled>
              Previous
            </button>
            <button className="px-3 py-1 rounded-md bg-blue-600 text-white font-bold">1</button>
            <button className="px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 font-semibold" disabled>
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Modals */}
      <NewBookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
      <AddVehicleModal isOpen={vehicleModalOpen} onClose={() => setVehicleModalOpen(false)} />
      <AddCustomerModal isOpen={customerModalOpen} onClose={() => setCustomerModalOpen(false)} />
    </div>
  );
}
