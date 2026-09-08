import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, BookOpen, Download, Video, Award, Clock, FileText } from 'lucide-react';
import CallToActionBanner from '../components/CallToActionBanner.jsx';
import { blogArticles, successStories } from '../data/contentData.js';

export default function ResourcesPage({ defaultFilter = 'all' }) {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || defaultFilter;
  const [activeFilter, setActiveFilter] = useState(initialCategory);

  const whitepapers = [
    {
      id: 'wp-1',
      title: 'The Changing of the Guard is Coming — Are You Future Ready?',
      type: 'Whitepaper',
      desc: 'Key workforce strategies to preserve machinery know-how and future-proof plant maintenance as senior tradespeople retire.',
      downloadText: 'Download PDF (18 Pages)',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      path: '/resources/blog/changing-workforce-dynamics',
    },
    {
      id: 'wp-2',
      title: 'Calculating the Hard ROI of Modern CMMS Implementation',
      type: 'Executive Guide',
      desc: 'A CFO-friendly model for measuring reduced equipment downtime, inventory carrying cost reductions, and overtime savings.',
      downloadText: 'Download Guide (24 Pages)',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      path: '/resources/blog/reducing-downtime-preventive-maintenance',
    },
  ];

  const webinars = [
    {
      id: 'web-1',
      title: 'Mastering Preventative Maintenance Scheduling in MEX v16',
      type: 'Webinar',
      speaker: 'David Henderson (MEX Senior Consultant)',
      time: '45 mins • On-demand recorded',
      desc: 'Watch our technical specialists walk through setting up condition-based PM triggers and workload leveling boards.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'web-2',
      title: 'Paperless Work Requests and Mobile App Deployments',
      type: 'Webinar',
      speaker: 'Chloe Bennett (Product Specialist)',
      time: '38 mins • Live masterclass',
      desc: 'How leading Australian food and beverage manufacturers deployed MEX Mobile to 150+ technicians in under 3 weeks.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const filterTabs = [
    { id: 'all', label: 'All Resources' },
    { id: 'blog', label: 'Blog & Articles' },
    { id: 'case-studies', label: 'Client Success Stories' },
    { id: 'whitepapers', label: 'Whitepapers & Guides' },
    { id: 'webinars', label: 'Webinars' },
    { id: 'training', label: 'Training Schedule' },
  ];

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Resources Hero */}
      <section className="bg-gradient-to-b from-[#0a1220] via-[#0d1726] to-[#0a1220] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            MEX Knowledge Hub
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6">
            Insights, Guides & Proven Success Stories
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Everything you need to master CMMS implementation, asset reliability strategies, and operational maintenance excellence in Australia.
          </p>
        </div>
      </section>

      {/* Resource Category Filter Bar */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto py-3">
          <div className="flex items-center gap-2 min-w-max">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-[#0b1528] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* 1. BLOG ARTICLES */}
          {(activeFilter === 'all' || activeFilter === 'blog') && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    Latest Blog Articles
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">Practical maintenance tips and operational strategy.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogArticles.map((article) => (
                  <Link
                    key={article.slug}
                    to={`/resources/blog/${article.slug}`}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-red-300 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="p-6">
                        <div className="flex items-center justify-between text-xs font-bold text-red-600 mb-2">
                          <span className="bg-red-50 px-2.5 py-1 rounded-full">{article.category}</span>
                          <span className="text-slate-400 font-normal">{article.readTime}</span>
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug mt-2">
                          {article.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                          {article.summary}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between text-xs text-slate-500">
                      <span>{article.author}</span>
                      <span className="font-bold text-red-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Read article <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 2. SUCCESS STORIES */}
          {(activeFilter === 'all' || activeFilter === 'case-studies') && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    Client Success Stories
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">See how leading enterprises achieve reliability with MEX.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {successStories.map((story) => (
                  <Link
                    key={story.id}
                    to={`/resources/client-success-stories/${story.id}`}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-red-300 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-48 overflow-hidden bg-slate-900 relative">
                        <img
                          src={story.image}
                          alt={story.company}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-slate-900">
                          {story.company}
                        </div>
                      </div>

                      <div className="p-6">
                        <h4 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                          {story.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                          {story.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-red-600">
                      <span>View case study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 3. WHITEPAPERS */}
          {(activeFilter === 'all' || activeFilter === 'whitepapers') && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    Whitepapers & Research
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">Deep dives into asset data, workforce dynamics, and ROI.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {whitepapers.map((wp) => (
                  <div
                    key={wp.id}
                    className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center shadow-sm hover:shadow-lg transition-all"
                  >
                    <div className="w-32 h-36 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-900 shadow-md">
                      <img src={wp.image} alt={wp.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full">
                        {wp.type}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900 leading-snug">{wp.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{wp.desc}</p>
                      <Link
                        to={wp.path}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{wp.downloadText}</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. WEBINARS */}
          {(activeFilter === 'all' || activeFilter === 'webinars') && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                    On-Demand Webinars
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">Expert walkthroughs and feature deep-dives.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {webinars.map((web) => (
                  <div
                    key={web.id}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all"
                  >
                    <div className="relative h-48 bg-slate-900">
                      <img src={web.image} alt={web.title} className="w-full h-full object-cover opacity-80" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg">
                          <Video className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-[11px] font-bold text-slate-500 block mb-1">{web.time}</span>
                      <h4 className="text-base font-bold text-slate-900">{web.title}</h4>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">{web.desc}</p>
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="text-slate-600 font-medium">{web.speaker}</span>
                        <span className="text-red-600 font-bold">Watch Now &rarr;</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. TRAINING SCHEDULE */}
          {(activeFilter === 'all' || activeFilter === 'training') && (
            <div className="bg-white rounded-3xl border border-slate-200 p-8">
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
                Certified MEX Training Courses
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Instructor-led training conducted in Brisbane, Sydney, Melbourne, Perth, and live online.
              </p>
              <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                {[
                  { course: 'MEX Introduction Course (2 Days)', loc: 'Brisbane Training Center & Online', date: 'Sept 22 - 23, 2026', seats: '4 Seats Left' },
                  { course: 'Advanced Stores & Purchasing Module (1 Day)', loc: 'Sydney CBD & Online', date: 'Oct 08, 2026', seats: 'Available' },
                  { course: 'Administrator & Report Designer Masterclass (2 Days)', loc: 'Melbourne & Live Virtual', date: 'Oct 20 - 21, 2026', seats: 'Selling Fast' },
                ].map((tr, idx) => (
                  <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h5 className="font-bold text-slate-900">{tr.course}</h5>
                      <span className="text-xs text-slate-500">{tr.loc} • {tr.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                        {tr.seats}
                      </span>
                      <Link
                        to="/contact?subject=Training%20Inquiry"
                        className="px-4 py-1.5 rounded-full bg-[#0b1528] text-white text-xs font-bold hover:bg-[#13233f]"
                      >
                        Enroll
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CallToActionBanner />
    </div>
  );
}
