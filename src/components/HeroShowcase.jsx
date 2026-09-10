import React, { useState, useEffect, useCallback } from "react";
import { ExternalLink, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import TrialModal from "./TrialModal";

export default function HeroShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentProduct = products[currentIndex];

  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
      setIsTransitioning(false);
    }, 150);
  }, []);

  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
      setIsTransitioning(false);
    }, 150);
  }, []);

  const handleSelectSlide = (idx) => {
    if (idx === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(idx);
      setIsTransitioning(false);
    }, 150);
  };

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if user is typing in a modal/input
      if (document.activeElement && ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
        return;
      }
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <section
      id="homepage-top-hero-showcase"
      className="relative bg-gradient-to-b from-[#090e1a] via-[#0d1527] to-[#0a101f] text-white pt-8 sm:pt-12 pb-16 sm:pb-24 overflow-hidden border-b border-slate-800"
    >
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20 transition-all duration-1000"
          style={{ backgroundColor: currentProduct.accentColor }}
        />
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Product Switcher Tabs / Quick Navigator */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none max-w-full">
            {products.map((p, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={p.id}
                  id={`hero-tab-product-${p.id}`}
                  type="button"
                  onClick={() => handleSelectSlide(idx)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                    isActive
                      ? "bg-slate-800 text-white border-slate-600 shadow-md scale-[1.02]"
                      : "bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800/60"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${isActive ? "animate-ping" : "opacity-40"}`}
                    style={{ backgroundColor: p.accentColor }}
                  />
                  <span>{p.name}</span>
                </button>
              );
            })}
          </div>

          {/* Numerical Slide Counter */}
          <div className="flex items-center gap-3 text-xs font-mono text-slate-400 shrink-0">
            <span className="text-white font-bold text-sm">{currentProduct.index}</span>
            <span className="text-slate-600">/</span>
            <span>04</span>

            {/* Compact Prev/Next Arrows for Top bar */}
            <div className="flex items-center gap-1 ml-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous slide"
                className="w-7 h-7 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition border border-slate-700/60"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next slide"
                className="w-7 h-7 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition border border-slate-700/60"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Hero Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[480px]">
          {/* Left Column: Product Narrative & Actions (~45% -> 5 cols on lg) */}
          <div
            className={`lg:col-span-5 flex flex-col justify-center transition-all duration-300 ${
              isTransitioning ? "opacity-30 translate-y-1" : "opacity-100 translate-y-0"
            }`}
          >
            {/* Category Label Pill */}
            <div className="mb-4">
              <span
                id="hero-category-label"
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border transition-colors ${currentProduct.badgeColor}`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentProduct.categoryLabel}</span>
              </span>
            </div>

            {/* Main Heading */}
            <h1
              id="hero-main-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5 whitespace-pre-line"
            >
              {currentProduct.heading}
            </h1>

            {/* Product Description */}
            <p
              id="hero-product-description"
              className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl font-normal"
            >
              {currentProduct.description}
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              {/* CTA 1: Visit Website (External URL) */}
              <a
                id="hero-cta-visit-website-btn"
                href={currentProduct.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white text-sm sm:text-base shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group"
                style={{ backgroundColor: currentProduct.accentColor }}
              >
                <span>{currentProduct.ctaWebsiteText}</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* CTA 2: Get a Free Trial (Opens Modal) */}
              <button
                id="hero-cta-free-trial-btn"
                type="button"
                onClick={() => setIsTrialOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-200 text-sm sm:text-base bg-slate-800/90 hover:bg-slate-800 hover:text-white border border-slate-700/80 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md"
              >
                <span>{currentProduct.ctaTrialText}</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </button>
            </div>

            {/* Key Metrics / Value Points */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4">
              {currentProduct.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400 font-medium mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Product Showcase (~55% -> 7 cols on lg) */}
          <div
            className={`lg:col-span-7 transition-all duration-300 ${
              isTransitioning ? "opacity-60 scale-[0.99]" : "opacity-100 scale-100"
            }`}
          >
            <ProductCard
              product={currentProduct}
              onPrev={handlePrev}
              onNext={handleNext}
              currentIndex={currentIndex}
              totalCount={products.length}
            />

            {/* Navigation Dots below showcase on mobile/tablet */}
            <div className="flex items-center justify-center gap-2.5 mt-6">
              {products.map((p, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={p.id}
                    id={`hero-dot-${p.id}`}
                    type="button"
                    onClick={() => handleSelectSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}: ${p.name}`}
                    className={`transition-all duration-300 rounded-full ${
                      isActive
                        ? "w-8 h-2.5 bg-white shadow-md"
                        : "w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Accessible Free Trial Lead Modal */}
      <TrialModal
        isOpen={isTrialOpen}
        onClose={() => setIsTrialOpen(false)}
        defaultProductName={currentProduct.name}
      />
    </section>
  );
}
