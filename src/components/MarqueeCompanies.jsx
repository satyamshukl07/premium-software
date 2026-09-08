import React from 'react';
import { globalCompanies } from '../data/contentData.js';

export default function MarqueeCompanies() {
  // Duplicate for seamless infinite marquee loop (-50% translateX)
  const marqueeList = [...globalCompanies, ...globalCompanies];

  return (
    <section className="py-16 bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          4,000+ global companies
        </h3>
        <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl mx-auto font-medium">
          trust MEX Maintenance for their daily operations, compliance audits, and asset longevity.
        </p>
      </div>

      {/* Marquee Wrapper: Moves RIGHT TO LEFT */}
      <div className="relative w-full overflow-hidden mask-fade">
        <div className="animate-marquee-left flex items-center gap-12 sm:gap-16 py-3">
          {marqueeList.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex items-center gap-3 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer flex-shrink-0"
              title={`${company.name} (${company.industry})`}
            >
              <div className="h-10 px-5 py-2 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center shadow-xs">
                <span className="font-extrabold tracking-tighter text-slate-800 text-lg uppercase font-sans">
                  {company.logoText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
