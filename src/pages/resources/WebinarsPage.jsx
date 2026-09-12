import React, { useState } from 'react';
import { Video, Calendar, Clock, Play, User, CheckCircle2, ArrowRight } from 'lucide-react';
import CallToActionBanner from '../../components/CallToActionBanner.jsx';

export default function WebinarsPage() {
  const [selectedWebinar, setSelectedWebinar] = useState(null);

  const webinars = [
    {
      id: 'web-1',
      title: 'Mastering Condition-Based PM Scheduling in MEX v16',
      speaker: 'David Henderson, MEX Principal Consultant',
      date: 'Recorded On-Demand',
      duration: '48 Mins',
      desc: 'Learn how to link live telematics hours and fuel meters directly to automated preventive maintenance triggers, avoiding over-servicing and sudden component breakdown.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      keyTopics: ['Hierarchy setup for meters', 'Gantt workload balancing', 'Spares auto-reorder thresholds'],
    },
    {
      id: 'web-2',
      title: 'Paperless Fleet Operations: Mobile Checklists & Prestart Workflows',
      speaker: 'Chloe Bennett, VP of Product Engineering',
      date: 'Recorded On-Demand',
      duration: '42 Mins',
      desc: 'Discover how national transport and rental businesses rolled out rugged mobile inspection checklists to 200+ drivers in under two weeks.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      keyTopics: ['NHVR compliance sign-offs', 'Offline photo captures in pits', 'Instant defect ticket escalation'],
    },
    {
      id: 'web-3',
      title: 'Automating Commercial Workshop Bays with Car Hire Manager (CHM)',
      speaker: 'Michael Vance, Workshop Solutions Architect',
      date: 'Upcoming Live: Thursday, Oct 15, 2026',
      duration: '60 Mins',
      desc: 'A live interactive masterclass demonstrating digital job card generation, mechanic touch-screen time logs, and automated supplier PO dispatching.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      keyTopics: ['Real-time bay capacity Gantt', 'Integrated brake/torque logging', 'Direct customer invoice generation'],
    },
  ];

  return (
    <div className="bg-white text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#050b14] via-[#091528] to-[#050b14] text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3.5 py-1 rounded-full border border-sky-500/20">
            Interactive Learning
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6">
            Webinars & Video Masterclasses
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Watch deep-dive walkthroughs, software demonstrations, and strategic discussions hosted by senior automotive and asset reliability specialists.
          </p>
        </div>
      </section>

      {/* Webinars Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinars.map((webinar) => (
              <div
                key={webinar.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 bg-slate-900 overflow-hidden group">
                    <img
                      src={webinar.image}
                      alt={webinar.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <button
                        type="button"
                        onClick={() => setSelectedWebinar(webinar)}
                        className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer"
                      >
                        <Play className="w-5 h-5 ml-0.5" />
                      </button>
                    </div>
                    <span className="absolute bottom-3 right-3 text-[11px] font-bold bg-black/70 text-white px-2 py-0.5 rounded">
                      {webinar.duration}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      <span>{webinar.date}</span>
                    </div>

                    <h2 className="text-lg font-bold text-slate-900 leading-snug">{webinar.title}</h2>
                    <p className="text-xs text-slate-600 leading-relaxed">{webinar.desc}</p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-bold uppercase text-slate-400 block">Highlights:</span>
                      {webinar.keyTopics.map((topic) => (
                        <div key={topic} className="flex items-center gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => setSelectedWebinar(webinar)}
                    className="w-full py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5" /> Watch Recording
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedWebinar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
          <div className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl border border-slate-200">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-sky-400 tracking-wider">Webinar Masterclass</span>
              <button
                type="button"
                onClick={() => setSelectedWebinar(null)}
                className="text-slate-400 hover:text-white font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center relative">
              <img
                src={selectedWebinar.image}
                alt={selectedWebinar.title}
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white space-y-3">
                <div className="w-16 h-16 rounded-full bg-blue-600/90 flex items-center justify-center ring-4 ring-white/20">
                  <Play className="w-7 h-7 ml-1" />
                </div>
                <h3 className="text-xl font-bold max-w-lg">{selectedWebinar.title}</h3>
                <p className="text-xs text-slate-300">Speaker: {selectedWebinar.speaker}</p>
                <span className="text-xs text-emerald-400 font-mono">Stream Ready • 1080p HD</span>
              </div>
            </div>
            <div className="p-6 bg-slate-50 flex items-center justify-between">
              <span className="text-xs text-slate-500">Duration: {selectedWebinar.duration}</span>
              <button
                type="button"
                onClick={() => setSelectedWebinar(null)}
                className="px-5 py-2 bg-slate-900 hover:bg-black text-white text-xs font-bold rounded-xl cursor-pointer"
              >
                Close Player
              </button>
            </div>
          </div>
        </div>
      )}

      <CallToActionBanner
        title="Want a private masterclass for your enterprise engineering team?"
        subtitle="We deliver customized webinars focused on your specific plant equipment and telematics fleet."
      />
    </div>
  );
}
