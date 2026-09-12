import React from 'react';
import { ShieldCheck, Lock, Eye } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#050b14] via-[#091528] to-[#050b14] text-white py-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3.5 py-1 rounded-full border border-sky-500/20">
            Privacy & Security
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-4 mb-2">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400">Compliant with the Australian Privacy Principles (APPs) and Privacy Act 1988</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-700 space-y-8 leading-relaxed">
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">1. Information We Collect</h2>
          <p>
            We collect information necessary to operate, maintain, and secure our automotive software platforms. This includes organization contact details, vehicle telematics (real-time GPS coordinates, speed, diagnostic error codes), technician labor logs, and rental driver identification for verification purposes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">2. How Telematics Data Is Stored and Protected</h2>
          <p>
            All telematics streams, maintenance work orders, and account credentials are encrypted in transit via TLS 1.3 and at rest utilizing 256-bit AES encryption inside sovereign Australian tier-3 cloud data centers.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">3. Third-Party Sharing & Disclosure</h2>
          <p>
            We do not share, sell, or lease customer data with external advertising brokers. Data is shared strictly with essential sub-processors (e.g., telematics carrier networks, AWS Australia, payment gateways) necessary to deliver core platform services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">4. Contact our Data Protection Officer</h2>
          <p>
            If you have questions regarding our data retention practices or wish to submit a subject access request, please contact our privacy officer at <span className="font-bold text-blue-600">privacy@techtonika.com</span> or call +61 7 3392 4777.
          </p>
        </div>
      </section>
    </div>
  );
}
