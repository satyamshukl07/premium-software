import React, { useState } from 'react';
import { useChm } from '../../context/ChmContext.jsx';
import { X, Calendar, Car, User, DollarSign, Wrench, AlertTriangle } from 'lucide-react';

export function ModalBackdrop({ title, subtitle, onClose, children }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 my-8">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">{title}</h3>
            {subtitle && <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 dark:hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 max-h-[80vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

// 1. New Booking Modal
export function NewBookingModal({ isOpen, onClose }) {
  const { addBooking, fleets, customers, currencySymbol } = useChm();
  const [formData, setFormData] = useState({
    customerName: customers[0]?.name || 'Raj Singh',
    customerPhone: customers[0]?.phone || '8789878987',
    registrationNo: fleets[0]?.registrationNo || 'TG1232',
    makeModel: 'Truck / TR001',
    pickupDate: '2026-09-08',
    pickupTime: '10:00 AM',
    returnDate: '2026-09-15',
    returnTime: '05:00 PM',
    dailyRate: 10.0,
    depositHeld: 500,
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooking({
      customerName: formData.customerName,
      customerPhone: formData.customerPhone,
      registrationNo: formData.registrationNo,
      makeModel: formData.makeModel,
      pickupDateTime: `${formData.pickupDate} | ${formData.pickupTime}`,
      returnDateTime: `${formData.returnDate} | ${formData.returnTime}`,
      dailyRate: Number(formData.dailyRate),
      depositHeld: Number(formData.depositHeld),
      notes: formData.notes,
    });
    onClose();
  };

  return (
    <ModalBackdrop title="Create New Booking" subtitle="Schedule rental and reserve vehicle" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Select Customer</label>
          <select
            value={formData.customerName}
            onChange={(e) => {
              const selected = customers.find((c) => c.name === e.target.value);
              setFormData({
                ...formData,
                customerName: e.target.value,
                customerPhone: selected ? selected.phone : formData.customerPhone,
              });
            }}
            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
          >
            {customers.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name} ({c.phone})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Select Vehicle</label>
          <select
            value={formData.registrationNo}
            onChange={(e) => {
              const f = fleets.find((item) => item.registrationNo === e.target.value);
              setFormData({
                ...formData,
                registrationNo: e.target.value,
                makeModel: f ? `${f.make} / ${f.model}` : formData.makeModel,
                dailyRate: f ? f.dailyRate : formData.dailyRate,
              });
            }}
            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
          >
            {fleets.map((f) => (
              <option key={f.id} value={f.registrationNo}>
                {f.registrationNo} - {f.make} {f.model} ({f.category}) - {currencySymbol}{f.dailyRate}/day
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Pickup Date</label>
            <input
              type="date"
              value={formData.pickupDate}
              onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Pickup Time</label>
            <input
              type="text"
              value={formData.pickupTime}
              onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Return Date</label>
            <input
              type="date"
              value={formData.returnDate}
              onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Return Time</label>
            <input
              type="text"
              value={formData.returnTime}
              onChange={(e) => setFormData({ ...formData, returnTime: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Daily Rate ({currencySymbol})
            </label>
            <input
              type="number"
              value={formData.dailyRate}
              onChange={(e) => setFormData({ ...formData, dailyRate: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Security Deposit ({currencySymbol})
            </label>
            <input
              type="number"
              value={formData.depositHeld}
              onChange={(e) => setFormData({ ...formData, depositHeld: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Notes / Instructions</label>
          <textarea
            rows={2}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Special delivery notes or driver instructions..."
            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
          />
        </div>

        <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm"
          >
            Confirm & Save Booking
          </button>
        </div>
      </form>
    </ModalBackdrop>
  );
}

// 2. Add Vehicle Modal
export function AddVehicleModal({ isOpen, onClose }) {
  const { addFleet } = useChm();
  const [formData, setFormData] = useState({
    registrationNo: '',
    year: 2026,
    model: 'TR002',
    category: '1 Ton Van',
    make: 'Truck',
    status: 'Available',
    transmission: 'Automatic',
    dailyRate: 15.0,
    engineNo: 'ENG-991823',
    vin: 'VIN7728192038',
    odometer: '15,000 km',
    fuelLevel: '100%',
    gpsTrackerImei: '864209041289999',
    regoExpiry: '2027-08-31',
    insuranceExpiry: '2027-08-31',
    insuranceProvider: 'Techtonika Autolink',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.registrationNo) return;
    addFleet(formData);
    onClose();
  };

  return (
    <ModalBackdrop title="Add New Vehicle to Fleet" subtitle="Register car details and specs" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Registration No</label>
            <input
              type="text"
              placeholder="e.g. QLD-7728"
              value={formData.registrationNo}
              onChange={(e) => setFormData({ ...formData, registrationNo: e.target.value.toUpperCase() })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Year</label>
            <input
              type="number"
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: Number(e.target.value) })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Make</label>
            <input
              type="text"
              value={formData.make}
              onChange={(e) => setFormData({ ...formData, make: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Model</label>
            <input
              type="text"
              value={formData.model}
              onChange={(e) => setFormData({ ...formData, model: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-2 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white text-xs"
            >
              <option value="1 Ton Van">1 Ton Van</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Compact Hatch">Compact Hatch</option>
              <option value="4WD Ute">4WD Ute</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Transmission</label>
            <select
              value={formData.transmission}
              onChange={(e) => setFormData({ ...formData, transmission: e.target.value })}
              className="w-full px-2 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white text-xs"
            >
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Daily Rate</label>
            <input
              type="number"
              value={formData.dailyRate}
              onChange={(e) => setFormData({ ...formData, dailyRate: Number(e.target.value) })}
              className="w-full px-2 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white text-xs"
              required
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 shadow-sm"
          >
            Add Vehicle
          </button>
        </div>
      </form>
    </ModalBackdrop>
  );
}

// 3. Add Customer Modal
export function AddCustomerModal({ isOpen, onClose }) {
  const { addCustomer } = useChm();
  const [formData, setFormData] = useState({
    name: '',
    address: 'Sydney NSW',
    email: '',
    phone: '',
    license: '002',
    status: 'Active',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) return;
    addCustomer(formData);
    onClose();
  };

  return (
    <ModalBackdrop title="Register New Customer" subtitle="Add customer profile to directory" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
          <input
            type="text"
            placeholder="e.g. John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
          <input
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="0412 345 678"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Driver License No</label>
            <input
              type="text"
              value={formData.license}
              onChange={(e) => setFormData({ ...formData, license: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Residential Address</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
          />
        </div>

        <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm"
          >
            Save Customer
          </button>
        </div>
      </form>
    </ModalBackdrop>
  );
}

// 4. Add Expense Modal
export function AddExpenseModal({ isOpen, onClose }) {
  const { addExpense, fleets, currencySymbol } = useChm();
  const [formData, setFormData] = useState({
    category: 'Fuel',
    description: 'Depot diesel top-up',
    vehicle: fleets[0]?.registrationNo ? `Truck ${fleets[0].registrationNo}` : 'Truck TG1232',
    amount: 150,
    contact: 'client@gmail.com',
    paymentMethod: 'Company Card',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(formData);
    onClose();
  };

  return (
    <ModalBackdrop title="Add Fleet Expense" subtitle="Record maintenance, fuel, or operational costs" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Expense Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
            >
              <option value="Fuel">Fuel</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Tolls & Registration">Tolls & Registration</option>
              <option value="Insurance">Insurance</option>
              <option value="Other">Other Expenses</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Amount ({currencySymbol})
            </label>
            <input
              type="number"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Vehicle</label>
          <select
            value={formData.vehicle}
            onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
          >
            {fleets.map((f) => (
              <option key={f.id} value={`${f.make} ${f.registrationNo}`}>
                {f.make} {f.registrationNo} ({f.model})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Description</label>
          <input
            type="text"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Payment Method</label>
            <select
              value={formData.paymentMethod}
              onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
            >
              <option value="Company Card">Company Card</option>
              <option value="Direct Debit">Direct Debit</option>
              <option value="Shell Card">Shell Fuel Card</option>
              <option value="Cash">Cash</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Reference Email</label>
            <input
              type="email"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-sm"
          >
            Save Expense
          </button>
        </div>
      </form>
    </ModalBackdrop>
  );
}

// 5. Report Incident Modal
export function ReportIncidentModal({ isOpen, onClose }) {
  const { addDriverIncident, fleets, customers, currencySymbol } = useChm();
  const [formData, setFormData] = useState({
    driver: customers[0]?.name || 'Raj Singh',
    incidentType: 'Speeding Violation',
    date: '2026-09-08',
    severity: 'minor',
    financialImpact: 150,
    vehicle: fleets[0]?.registrationNo || 'TG1232',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    addDriverIncident(formData);
    onClose();
  };

  return (
    <ModalBackdrop title="Report Driver Incident" subtitle="Log traffic infringements, damage, or accidents" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Select Driver / Customer</label>
          <select
            value={formData.driver}
            onChange={(e) => setFormData({ ...formData, driver: e.target.value })}
            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
          >
            {customers.map((c) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Incident Type</label>
            <select
              value={formData.incidentType}
              onChange={(e) => setFormData({ ...formData, incidentType: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
            >
              <option value="Speeding Violation">Speeding Violation</option>
              <option value="Minor Collision">Minor Collision</option>
              <option value="Unpaid Toll Fine">Unpaid Toll Fine</option>
              <option value="Late Vehicle Return">Late Vehicle Return</option>
              <option value="Interior Soiling">Interior Soiling</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Severity</label>
            <select
              value={formData.severity}
              onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
            >
              <option value="minor">Minor</option>
              <option value="moderate">Moderate</option>
              <option value="high">High / Serious</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Date</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Financial Impact ({currencySymbol})
            </label>
            <input
              type="number"
              value={formData.financialImpact}
              onChange={(e) => setFormData({ ...formData, financialImpact: Number(e.target.value) })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Incident Details</label>
          <textarea
            rows={2}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Enter incident report notes..."
            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
          />
        </div>

        <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-red-600 hover:bg-red-700 shadow-sm"
          >
            File Incident Report
          </button>
        </div>
      </form>
    </ModalBackdrop>
  );
}

// 6. Add Toll Charge Modal
export function AddTollChargeModal({ isOpen, onClose }) {
  const { addTollCharge, fleets, customers, bookings, currencySymbol } = useChm();
  const [formData, setFormData] = useState({
    booking: bookings[0]?.id || '#BK-204',
    customer: customers[0]?.name || 'Raj Singh',
    registrationNo: fleets[0]?.registrationNo || 'TG1232',
    tollDate: '2026-09-08',
    amount: 14.85,
    dueDate: '2026-09-22',
    operator: 'Linkt (Gateway Motorway)',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    addTollCharge(formData);
    onClose();
  };

  return (
    <ModalBackdrop title="Add Toll Charge" subtitle="Record automated or manual toll gantry charge" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Booking ID</label>
            <input
              type="text"
              value={formData.booking}
              onChange={(e) => setFormData({ ...formData, booking: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Customer</label>
            <input
              type="text"
              value={formData.customer}
              onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Registration No</label>
            <input
              type="text"
              value={formData.registrationNo}
              onChange={(e) => setFormData({ ...formData, registrationNo: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Amount ({currencySymbol})
            </label>
            <input
              type="number"
              step="0.01"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Toll Date</label>
            <input
              type="date"
              value={formData.tollDate}
              onChange={(e) => setFormData({ ...formData, tollDate: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Due Date</label>
            <input
              type="date"
              value={formData.dueDate}
              onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm"
          >
            Record Toll Charge
          </button>
        </div>
      </form>
    </ModalBackdrop>
  );
}

// 7. Add Maintenance Modal
export function AddMaintenanceModal({ isOpen, onClose }) {
  const { addMaintenanceRecord, fleets, currencySymbol } = useChm();
  const [formData, setFormData] = useState({
    vehicleName: fleets[0]?.registrationNo ? `Truck ${fleets[0].registrationNo}` : 'Truck TG1232',
    maintenanceType: 'Scheduled Service',
    cost: 150.0,
    technician: 'Dave Miller',
    notes: 'Standard 10,000km oil and fluid service check.',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    addMaintenanceRecord(formData);
    onClose();
  };

  return (
    <ModalBackdrop title="Schedule Vehicle Maintenance" subtitle="Sync job with MEX CMMS work order schedule" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-4 text-sm">
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Select Vehicle</label>
          <select
            value={formData.vehicleName}
            onChange={(e) => setFormData({ ...formData, vehicleName: e.target.value })}
            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
          >
            {fleets.map((f) => (
              <option key={f.id} value={`${f.make} ${f.registrationNo}`}>
                {f.make} {f.registrationNo} ({f.category})
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Maintenance Type</label>
            <select
              value={formData.maintenanceType}
              onChange={(e) => setFormData({ ...formData, maintenanceType: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
            >
              <option value="Major service">Major service</option>
              <option value="Oil filter change">Oil filter change</option>
              <option value="Brake inspection">Brake inspection</option>
              <option value="Tyre replacement">Tyre replacement</option>
              <option value="Air conditioning repair">Air conditioning repair</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Estimated Cost ({currencySymbol})
            </label>
            <input
              type="number"
              value={formData.cost}
              onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
              className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Technician / Workshop</label>
          <input
            type="text"
            value={formData.technician}
            onChange={(e) => setFormData({ ...formData, technician: e.target.value })}
            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Work Order Notes</label>
          <textarea
            rows={2}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg dark:bg-slate-800 dark:text-white"
          />
        </div>

        <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm"
          >
            Schedule Job
          </button>
        </div>
      </form>
    </ModalBackdrop>
  );
}

// 8. View Detail Modal
export function ViewDetailModal({ isOpen, onClose, title, data }) {
  if (!isOpen || !data) return null;

  return (
    <ModalBackdrop title={title || 'Record Details'} subtitle="Full system record breakdown" onClose={onClose}>
      <div className="space-y-3">
        {Object.entries(data).map(([key, val]) => {
          if (typeof val === 'object' && val !== null) return null;
          return (
            <div key={key} className="flex items-start justify-between py-1.5 border-b border-slate-100 dark:border-slate-800 text-xs">
              <span className="font-semibold text-slate-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
              <span className="font-bold text-slate-900 dark:text-white max-w-[240px] text-right">{String(val)}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-6 flex justify-end">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-lg text-xs font-bold bg-slate-900 text-white dark:bg-slate-700 hover:bg-slate-800"
        >
          Close
        </button>
      </div>
    </ModalBackdrop>
  );
}
