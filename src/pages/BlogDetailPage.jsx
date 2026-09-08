import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Share2, ArrowRight } from 'lucide-react';
import CallToActionBanner from '../components/CallToActionBanner.jsx';
import { blogArticles } from '../data/contentData.js';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const article = blogArticles.find((a) => a.slug === slug) || blogArticles[0];

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Blog Article Header */}
      <section className="bg-gradient-to-b from-[#0a1220] via-[#0d1726] to-[#0a1220] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/resources/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all articles</span>
          </Link>

          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20 inline-block">
              {article.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-400" />
                {article.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Article Body */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg font-medium text-slate-700 leading-relaxed border-l-4 border-red-600 pl-4 mb-8 italic">
            "{article.summary}"
          </p>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6 text-sm sm:text-base">
            <p>
              Maintenance engineering across Australian industrial plants is experiencing a fundamental generational shift. As senior fitters and electricians approach retirement, decades of undocumented machinery know-how risk vanishing overnight.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
              1. Institutional Knowledge Capture
            </h3>
            <p>
              By formalizing standard maintenance procedures inside MEX CMMS, teams can attach step-by-step checklists, hydraulic schematic diagrams, and video walkthroughs directly to repeatable work orders. Every repair performed becomes a learning asset for apprentices and new hires.
            </p>

            <div className="my-8 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt="Engineers reviewing tablet data on factory floor"
                className="w-full h-72 object-cover"
              />
              <div className="p-3 bg-slate-50 text-[11px] text-slate-500 text-center">
                Digital standard job instructions reduce apprentice onboarding time by 60%.
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
              2. Eliminating Tribal Knowledge Gaps
            </h3>
            <p>
              When a critical pump fails at 2:00 AM on a Sunday shift, the responding technician shouldn't have to guess the torque settings or wonder which vendor stocks the proprietary mechanical seal. MEX provides immediate access to complete historical work logs and bill-of-materials right on the technician's phone or tablet.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
              3. Measurable Reliability Outcomes
            </h3>
            <p>
              Companies that successfully digitize their maintenance workflows report a 30% reduction in mean time to repair (MTTR) and a 40% reduction in emergency breakdown downtime within the first six months of rollout.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 flex items-center justify-between">
            <Link
              to="/resources/blog"
              className="text-xs font-bold text-slate-700 hover:text-red-600 flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Knowledge Hub</span>
            </Link>

            <Link
              to="/free-trial"
              className="px-5 py-2.5 rounded-full bg-red-600 text-white font-bold text-xs hover:bg-red-700 transition-colors shadow-sm"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>

      <CallToActionBanner />
    </div>
  );
}
