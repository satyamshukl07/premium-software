import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  initialFleets,
  initialBookings,
  initialRecurringBookings,
  initialCustomers,
  initialTransactions,
  initialExpenses,
  initialDrivers,
  initialTolls,
  initialMaintenanceRecords,
  initialDamageLogs,
  initialRegoInsurance,
  initialReports,
  initialSettings,
} from '../data/chm/initialData.js';

const ChmContext = createContext(null);

export function ChmProvider({ children }) {
  const [fleets, setFleets] = useState(initialFleets);
  const [bookings, setBookings] = useState(initialBookings);
  const [recurringBookings, setRecurringBookings] = useState(initialRecurringBookings);
  const [customers, setCustomers] = useState(initialCustomers);
  const [transactions, setTransactions] = useState(initialTransactions);
  const [expenses, setExpenses] = useState(initialExpenses);
  const [drivers, setDrivers] = useState(initialDrivers);
  const [tolls, setTolls] = useState(initialTolls);
  const [maintenanceRecords, setMaintenanceRecords] = useState(initialMaintenanceRecords);
  const [damageLogs, setDamageLogs] = useState(initialDamageLogs);
  const [regoInsurance, setRegoInsurance] = useState(initialRegoInsurance);
  const [reports, setReports] = useState(initialReports);
  const [settings, setSettings] = useState(initialSettings);
  const [darkMode, setDarkMode] = useState(false);
  const [currencySymbol, setCurrencySymbol] = useState('¥');
  const [toast, setToast] = useState(null);

  // Toast notification timer
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    showToast(!darkMode ? 'Dark mode activated' : 'Light mode activated', 'info');
  };

  // Fleets actions
  const addFleet = (vehicle) => {
    const newVehicle = {
      id: `FLT-${String(fleets.length + 1).padStart(3, '0')}`,
      ...vehicle,
    };
    setFleets((prev) => [newVehicle, ...prev]);
    showToast(`Vehicle ${vehicle.registrationNo} added to fleet!`);
    return newVehicle;
  };

  // Bookings actions
  const addBooking = (bookingData) => {
    const newBooking = {
      id: `#BK-${Math.floor(100 + Math.random() * 900)}`,
      createdDate: new Date().toISOString().replace('T', ' ').slice(0, 19),
      status: 'On Hire',
      ...bookingData,
    };
    setBookings((prev) => [newBooking, ...prev]);

    // Automatically update fleet status if matching rego
    if (bookingData.registrationNo) {
      setFleets((prev) =>
        prev.map((f) =>
          f.registrationNo === bookingData.registrationNo
            ? { ...f, status: 'On Hire', currentCustomer: bookingData.customerName }
            : f
        )
      );
    }

    showToast(`Booking ${newBooking.id} created successfully!`);
    return newBooking;
  };

  // Recurring Booking actions
  const addRecurringBooking = (recData) => {
    const newRec = {
      id: recurringBookings.length + 1,
      ...recData,
      status: 'Active',
    };
    setRecurringBookings((prev) => [newRec, ...prev]);
    showToast('New recurring booking schedule created!');
    return newRec;
  };

  const deleteRecurringBooking = (id) => {
    setRecurringBookings((prev) => prev.filter((r) => r.id !== id));
    showToast('Recurring booking removed', 'info');
  };

  // Customer actions
  const addCustomer = (customerData) => {
    const newCustomer = {
      id: customers.length + 1,
      totalRentals: 0,
      totalSpend: '¥0.00',
      joinedDate: new Date().toISOString().slice(0, 10),
      ...customerData,
    };
    setCustomers((prev) => [...prev, newCustomer]);
    showToast(`Customer ${customerData.name} registered!`);
    return newCustomer;
  };

  const updateCustomer = (id, updatedData) => {
    setCustomers((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...updatedData } : c))
    );
    showToast('Customer updated successfully!');
  };

  const deleteCustomer = (id) => {
    setCustomers((prev) => prev.filter((c) => c.id !== id));
    showToast('Customer deleted', 'info');
  };

  // Expense actions
  const addExpense = (expenseData) => {
    const newExpense = {
      id: `EXP-${expenses.length + 1}`,
      date: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      ...expenseData,
      amount: Number(expenseData.amount) || 0,
    };
    setExpenses((prev) => [newExpense, ...prev]);
    showToast(`Expense of ${currencySymbol}${expenseData.amount} logged!`);
    return newExpense;
  };

  // Driver Incident actions
  const addDriverIncident = (incidentData) => {
    const newIncident = {
      id: drivers.length + 1,
      createdAt: new Date().toISOString().slice(0, 10),
      status: 'Under Review',
      ...incidentData,
    };
    setDrivers((prev) => [newIncident, ...prev]);
    showToast('Incident reported and flagged for review!');
    return newIncident;
  };

  // Toll actions
  const addTollCharge = (tollData) => {
    const newToll = {
      id: tolls.length + 1,
      status: 'Pending',
      ...tollData,
      amount: Number(tollData.amount) || 0,
    };
    setTolls((prev) => [newToll, ...prev]);
    showToast(`Toll charge of ${currencySymbol}${tollData.amount} recorded!`);
    return newToll;
  };

  // Maintenance actions
  const addMaintenanceRecord = (recordData) => {
    const newRecord = {
      id: `#MT-${Math.floor(50 + Math.random() * 50)}`,
      createdAt: new Date().toISOString().replace('T', ' ').slice(0, 19),
      cost: Number(recordData.cost) || 0,
      status: 'Scheduled',
      typeBadge: 'blue',
      ...recordData,
    };
    setMaintenanceRecords((prev) => [newRecord, ...prev]);
    showToast(`Maintenance job ${newRecord.id} scheduled!`);
    return newRecord;
  };

  // Rego / Insurance actions
  const addRegoRecord = (recordData) => {
    const newRecord = {
      id: `RI-${regoInsurance.length + 1}`,
      ...recordData,
    };
    setRegoInsurance((prev) => [newRecord, ...prev]);
    showToast('Registration/Insurance record logged!');
    return newRecord;
  };

  // Generate Report action
  const generateReport = (reportId) => {
    setReports((prev) =>
      prev.map((r) =>
        r.id === reportId ? { ...r, status: 'In Progress...' } : r
      )
    );

    setTimeout(() => {
      setReports((prev) =>
        prev.map((r) =>
          r.id === reportId ? { ...r, status: 'Ready' } : r
        )
      );
      showToast('Report generated! Ready for CSV/PDF download.');
    }, 1200);
  };

  // Settings update
  const updateSettingsSection = (section, data) => {
    setSettings((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...data },
    }));
    showToast('Settings saved successfully!');
  };

  return (
    <ChmContext.Provider
      value={{
        fleets,
        addFleet,
        bookings,
        addBooking,
        recurringBookings,
        addRecurringBooking,
        deleteRecurringBooking,
        customers,
        addCustomer,
        updateCustomer,
        deleteCustomer,
        transactions,
        expenses,
        addExpense,
        drivers,
        addDriverIncident,
        tolls,
        addTollCharge,
        maintenanceRecords,
        damageLogs,
        addMaintenanceRecord,
        regoInsurance,
        addRegoRecord,
        reports,
        generateReport,
        settings,
        updateSettingsSection,
        darkMode,
        toggleDarkMode,
        currencySymbol,
        setCurrencySymbol,
        toast,
        showToast,
      }}
    >
      {children}
    </ChmContext.Provider>
  );
}

export function useChm() {
  const context = useContext(ChmContext);
  if (!context) {
    throw new Error('useChm must be used within a ChmProvider');
  }
  return context;
}
