import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShieldCheck, Award } from 'lucide-react';
import { awardsList } from '../data/contentData.js';

export default function AwardsGrid() {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-10">
          Recognised for excellence
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center">
          {awardsList.map((award, i) => (
            <Link
              key={i}
              to="/about"
              className="p-5 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-red-300 hover:shadow-md transition-all flex flex-col items-center justify-center text-center group"
            >
              {/* Award Icon/Badge */}
              <div className="w-12 h-12 rounded-full bg-slate-100 group-hover:bg-red-50 flex items-center justify-center mb-3 transition-colors">
                <Award className="w-6 h-6 text-red-600" />
              </div>

              <span className="text-xs uppercase font-extrabold tracking-wider text-slate-400 block mb-1">
                {award.category}
              </span>

              <h4 className="text-sm font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                {award.name}
              </h4>

              {/* Star Rating */}
              <div className="flex items-center gap-0.5 mt-2 text-amber-500">
                {[...Array(5)].map((_, starIdx) => (
                  <Star key={starIdx} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>

              <span className="text-xs font-bold text-slate-700 mt-1">
                {award.rating}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
