import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Building, Award, Check } from 'lucide-react';
import { successStories } from '../data/contentData.js';

export default function CaseStudySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? successStories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === successStories.length - 1 ? 0 : prev + 1));
  };

  const current = successStories[currentIndex];

  return (
    <section className="py-20 bg-[#f8fafc] overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & CTA (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              See what's possible with MEX
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              MEX helps organisations—from schools to national manufacturers—lay strong foundations for reliability and long-term performance.
            </p>
            <div>
              <Link
                id="cta-view-all-stories"
                to="/resources/client-success-stories"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0b1528] text-white font-semibold text-sm hover:bg-[#13233f] transition-all shadow-sm hover:shadow"
              >
                View all success stories
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Story Card with Arrows (Col 7) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-xl relative transition-all duration-300">
              {/* Top: Company badge & Image */}
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-slate-900">
                <img
                  src={current.image}
                  alt={current.company}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                  {current.company}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {current.title}
              </h3>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                {current.description}
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 pt-6 my-6 border-y border-slate-100">
                {current.stats.map((st, i) => (
                  <div key={i}>
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 block tracking-tight">
                      {st.value}
                    </span>
                    <span className="text-xs font-medium text-slate-500 block mt-0.5">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Actions: Read Story link + Carousel Controls */}
              <div className="flex items-center justify-between pt-2">
                <Link
                  id={`read-story-${current.id}`}
                  to={`/resources/client-success-stories/${current.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-red-600 transition-colors group"
                >
                  <span>Read the story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-red-600" />
                </Link>

                {/* Arrows and Dots */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 mr-2">
                    {successStories.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setCurrentIndex(dotIdx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentIndex === dotIdx ? 'w-5 bg-red-600' : 'bg-slate-300'
                        }`}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors"
                    aria-label="Previous story"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full border border-slate-200 hover:bg-slate-100 flex items-center justify-center text-slate-700 transition-colors"
                    aria-label="Next story"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
