import React from 'react';
import { ShieldCheck, FileText, Scale } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#050b14] via-[#091528] to-[#050b14] text-white py-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3.5 py-1 rounded-full border border-sky-500/20">
            Legal & Governance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-4 mb-2">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-400">Last updated: September 1, 2026 • Effective for all Techtonika Software Platforms</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-700 space-y-8 leading-relaxed">
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">1. Agreement to Terms</h2>
          <p>
            By accessing or using the services provided by Techtonika Automotive Solutions (Advanced Systems Pty Ltd, ABN 43 060 923 189), including MEX CMMS, Car Hire Manager (CHM), HireCar Marketplace, and Australia Fleet Tracking, you agree to be bound by these Terms of Service. If you do not agree to these terms, you must not access or utilize our applications.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">2. Service Provision & Software Licensing</h2>
          <p>
            Techtonika grants your organization a non-exclusive, non-transferable subscription license to access our cloud-hosted applications and mobile applications in accordance with your executed order form or commercial SaaS plan.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">3. Telematics & Data Ownership</h2>
          <p>
            You retain exclusive ownership of all proprietary fleet data, CAN bus diagnostic telemetry, maintenance histories, and driver records uploaded to or generated within the platform. Techtonika will never sell or monetize your individual operational data.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">4. Service Level Agreement (SLA) & Uptime</h2>
          <p>
            Techtonika commits to delivering 99.9% application uptime for enterprise production environments, excluding scheduled preventive maintenance windows communicated at least 48 hours in advance.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3">5. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of Queensland, Australia, without regard to conflict of law principles.
          </p>
        </div>
      </section>
    </div>
  );
}
