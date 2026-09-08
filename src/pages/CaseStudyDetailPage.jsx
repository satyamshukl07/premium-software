import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Building2, TrendingUp, Award, ArrowRight } from 'lucide-react';
import CallToActionBanner from '../components/CallToActionBanner.jsx';
import { successStories } from '../data/contentData.js';

export default function CaseStudyDetailPage() {
  const { slug } = useParams();
  const story = successStories.find((s) => s.id === slug) || successStories[0];

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0a1220] via-[#0d1726] to-[#0a1220] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/resources/client-success-stories"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Success Stories</span>
          </Link>

          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 inline-block">
              {story.company} Success Story
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {story.title}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
              {story.description}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 text-white py-8 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            {story.stats.map((st, i) => (
              <div key={i} className="border-r border-slate-800 last:border-none">
                <span className="text-3xl sm:text-4xl font-extrabold text-white block tracking-tight">
                  {st.value}
                </span>
                <span className="text-xs text-slate-400 block mt-1 font-medium">{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Main Visual */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 h-80 sm:h-96 bg-slate-900">
            <img src={story.image} alt={story.company} className="w-full h-full object-cover" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-8 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">The Operational Challenge</h3>
              <p>
                Prior to standardizing on MEX, {story.company} relied on fragmented paper slips, decentralized spreadsheets, and verbal work requests. This led to overlooked preventive maintenance, lack of historical audit records, and escalating repair overheads.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">The MEX Solution</h3>
              <p>
                Implementing MEX allowed the operations leadership to register all physical assets into structured hierarchies, deploy MEX Mobile apps for tradespeople on the floor, and automate statutory certification inspections.
              </p>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                <h4 className="font-bold text-slate-900 text-base">Key Transformations:</h4>
                <div className="space-y-2">
                  {[
                    'Automated work order creation with parts reservation from stores',
                    'Real-time supervisor dashboards with overdue alerts and backlog tracking',
                    'Zero paper work orders across all technicians and contractors',
                    'Flawless statutory compliance and environmental audit verification',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#f8fafc] p-6 rounded-2xl border border-slate-200 h-fit space-y-4">
              <h4 className="font-bold text-slate-900 text-sm">Customer Profile</h4>
              <div className="text-xs space-y-2 text-slate-600">
                <div>
                  <span className="font-semibold text-slate-900 block">Organisation:</span>
                  <span>{story.company}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block">Deployment:</span>
                  <span>MEX Enterprise Cloud</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-900 block">Location:</span>
                  <span>Australia</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <Link
                  to="/free-trial"
                  className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Start Your Trial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToActionBanner />
    </div>
  );
}
