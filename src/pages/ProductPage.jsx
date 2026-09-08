import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Package, Smartphone, Headphones, Cpu, Layers } from 'lucide-react';
import CallToActionBanner from '../components/CallToActionBanner.jsx';
import { navigationData } from '../data/contentData.js';

export default function ProductPage() {
  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Product Hero */}
      <section className="bg-gradient-to-b from-[#0a1220] via-[#0d1726] to-[#0a1220] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            MEX Product Ecosystem
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6">
            Everything your operations need to thrive
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From mobile work orders to AI predictive maintenance schedules, MEX gives maintenance teams full control over asset lifecycles, compliance records, and inventory stores.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/product/mex-cmms"
              className="px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-lg"
            >
              Explore MEX CMMS
            </Link>
            <Link
              to="/free-trial"
              className="px-8 py-3.5 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 shadow-md"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {navigationData.products.overview.map((item) => (
              <Link
                key={item.slug}
                to={item.path}
                className="p-8 rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-red-400 hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-bold text-red-600">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-[#f8fafc] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Powerful Core Features
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Deep functionality crafted specifically for maintenance engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {navigationData.products.features.map((feat) => (
              <Link
                key={feat.slug}
                to={feat.path}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-md hover:border-red-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                    <Package className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {feat.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-semibold text-slate-700 group-hover:text-red-600">
                  <span>View details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CallToActionBanner />
    </div>
  );
}
