import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Loader2, PlaySquare, ShieldCheck, Mail, Phone, Building, User } from "lucide-react";
import { products } from "../data/products";
import { getApiUrl } from "../config/api";

export default function DemoModal({ isOpen, onClose, defaultProductName }) {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    preferredContactMethod: "Email",
    productName: defaultProductName || (products && products[0] ? products[0].name : "WRMS PRO"),
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    if (defaultProductName) {
      setFormData((prev) => ({ ...prev, productName: defaultProductName }));
    }
  }, [defaultProductName]);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.businessName.trim()) errs.businessName = "Business name is required";
    if (!formData.email.trim()) {
      errs.email = "Business email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(getApiUrl("/api/demo"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.businessName.trim(),
          preferredContactMethod: formData.preferredContactMethod,
          message: `${formData.productName ? `[Product: ${formData.productName}] ` : ""}${formData.message.trim()}`.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success !== false) {
        setIsSuccess(true);
      } else {
        setServerError(data.message || "Failed to submit demo request. Please try again.");
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setServerError("");
    setFormData({
      fullName: "",
      businessName: "",
      email: "",
      phone: "",
      preferredContactMethod: "Email",
      productName: defaultProductName || (products && products[0] ? products[0].name : "WRMS PRO"),
      message: "",
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 my-8">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center">
              <PlaySquare className="w-4 h-4" />
            </div>
            <div>
              <h2 id="demo-modal-title" className="text-sm font-bold text-slate-900">
                Book a Live Product Demonstration
              </h2>
              <p className="text-[11px] text-slate-500">
                Personalized 1-on-1 walkthrough with an automotive system expert
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Demo Request Confirmed!</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>. Our technical specialist will reach out via {formData.preferredContactMethod} to confirm your demo schedule.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {serverError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 font-semibold">
                  {serverError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl focus:bg-white focus:outline-hidden ${
                      errors.fullName ? "border-red-500" : "border-slate-300"
                    }`}
                  />
                  {errors.fullName && <p className="text-[10px] text-red-500 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Company / Workshop *</label>
                  <input
                    type="text"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g. Acme Motors"
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl focus:bg-white focus:outline-hidden ${
                      errors.businessName ? "border-red-500" : "border-slate-300"
                    }`}
                  />
                  {errors.businessName && <p className="text-[10px] text-red-500 mt-1">{errors.businessName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Work Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl focus:bg-white focus:outline-hidden ${
                      errors.email ? "border-red-500" : "border-slate-300"
                    }`}
                  />
                  {errors.email && <p className="text-[10px] text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+61 400 000 000"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Product of Interest</label>
                  <select
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden font-semibold"
                  >
                    <option value="WRMS PRO">WRMS PRO (Workshop Repair)</option>
                    <option value="Fleet Tracking">Fleet Tracking & Telematics</option>
                    <option value="HireCar Marketplace">HireCar Marketplace</option>
                    <option value="CHM Operations">CHM Operations Platform</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Preferred Contact</label>
                  <select
                    name="preferredContactMethod"
                    value={formData.preferredContactMethod}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden font-semibold"
                  >
                    <option value="Email">Email</option>
                    <option value="Phone Call">Phone Call</option>
                    <option value="Video Call (Teams/Meet)">Video Call</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Specific Workflow Questions / Notes</label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your fleet size, number of mechanics, or specific workflows..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg shadow-purple-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Booking Demonstration...</span>
                  </>
                ) : (
                  <span>Request Live Demonstration</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
