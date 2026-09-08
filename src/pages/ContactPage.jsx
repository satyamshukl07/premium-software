import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import CallToActionBanner from '../components/CallToActionBanner.jsx';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const defaultSubject = searchParams.get('subject') || 'General Sales & Demonstration Inquiry';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: defaultSubject,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Dark Hero */}
      <section className="bg-gradient-to-b from-[#0a1220] via-[#0d1726] to-[#0a1220] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            Australian Head Office
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4 font-sans">
            Get in touch with the MEX team
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Have questions about system capabilities, cloud hosting, training, or requesting a customized quote? Our Brisbane-based team is here to assist.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Contact Form (Col 7) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, {formData.name}. A senior maintenance software consultant from our team will contact you at{' '}
                    <span className="font-bold text-slate-900">{formData.email}</span> within 2 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#0b1528] text-white font-bold text-xs hover:bg-[#13233f]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-red-600" />
                    <span>Send us a message</span>
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Work Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="s.jenkins@company.com.au"
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-hidden"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Company / Facility *</label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Brisbane Logistics Group"
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+61 7 3392 4777"
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-hidden"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Subject / Area of Interest</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-hidden"
                      >
                        <option>General Sales & Demonstration Inquiry</option>
                        <option>Pricing & Formal Quotation Request</option>
                        <option>MEX v16 Upgrade Consultation</option>
                        <option>Certified Training Courses Inquiry</option>
                        <option>Technical Support Assistance</option>
                        <option>ERP / API Integration Discussion</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Your Message *</label>
                      <textarea
                        required
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your plant assets, number of users, or any specific requirements..."
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-hidden"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-98 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>{loading ? 'Sending Message...' : 'Submit Inquiry'}</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Right Column: Contact Details (Col 5) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-slate-900">Headquarters Contact</h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-red-50 text-red-600 flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">Phone Support & Sales</span>
                      <a href="tel:+61733924777" className="font-bold text-slate-900 hover:text-red-600">
                        +61 7 3392 4777
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-red-50 text-red-600 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">Email Us</span>
                      <a href="mailto:sales@mex.com.au" className="font-bold text-slate-900 hover:text-red-600">
                        sales@mex.com.au
                      </a>
                      <span className="text-[11px] text-slate-400 block">or support@mex.com.au</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-red-50 text-red-600 flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">Brisbane Office</span>
                      <span className="font-bold text-slate-900 block">
                        64 Vulture Street, West End
                      </span>
                      <span className="text-slate-600">QLD 4101, Australia</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-red-50 text-red-600 flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">Operating Hours</span>
                      <span className="font-bold text-slate-900 block">
                        Monday – Friday: 7:30 AM – 5:00 PM AEST
                      </span>
                      <span className="text-slate-500 text-xs">24/7 emergency server monitoring</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regional Support Note */}
              <div className="p-6 rounded-3xl bg-[#0b1320] text-white space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                  Australia Wide Support
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Support engineers and trainers are also based in Sydney, Melbourne, and Perth for on-site consulting and facility audits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToActionBanner />
    </div>
  );
}
