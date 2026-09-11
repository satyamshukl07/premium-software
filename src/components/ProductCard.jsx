import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ExternalLink, Lock, ArrowUpRight } from "lucide-react";

export default function ProductCard({
  product,
  onPrev,
  onNext,
  currentIndex,
  totalCount,
}) {
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const minSwipeDistance = 45;

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
    touchStartY.current = e.changedTouches[0].screenY;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    const deltaX = touchEndX - touchStartX.current;
    const deltaY = touchEndY - touchStartY.current;

    // Only trigger if horizontal swipe is greater than vertical movement
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX < 0) {
        // Swiped left -> Next slide
        onNext();
      } else {
        // Swiped right -> Previous slide
        onPrev();
      }
    }
  };

  return (
    <div
      id="hero-product-showcase-card"
      className="relative w-full select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Outer Glow / Ambient Lighting Ring */}
      <div
        className="absolute -inset-1.5 rounded-3xl opacity-40 blur-xl transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 60% 40%, ${product.accentColor}44 0%, transparent 70%)`,
        }}
      />

      {/* Main Showcase Container (Styled Browser Window) */}
      <div className="relative bg-slate-900/90 rounded-2xl sm:rounded-3xl border border-slate-700/60 shadow-2xl overflow-hidden backdrop-blur-md transition-all duration-500 group">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-slate-950/80 border-b border-slate-800 text-xs">
          {/* Mac-style Window Controls */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          {/* Browser Address Bar */}
          <div className="flex-1 max-w-[280px] sm:max-w-md mx-2 px-3 py-1 bg-slate-900 rounded-lg border border-slate-800/80 flex items-center justify-between text-slate-400 text-[11px] truncate">
            <div className="flex items-center gap-1.5 truncate">
              <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="truncate text-slate-300 font-mono">
                {product.websiteUrl.replace("https://", "")}
              </span>
            </div>
            <a
              href={product.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors ml-1.5 shrink-0"
              title="Open website"
            >
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Slide Indicator inside Bar */}
          <div className="text-[11px] font-mono text-slate-400 font-medium">
            {currentIndex + 1}/{totalCount}
          </div>
        </div>

        {/* Product Visual Area */}
        <Link
          to={`/product/${product.slug || product.key}`}
          className="relative bg-slate-950 aspect-[16/10] sm:aspect-[16/9.5] w-full flex items-center justify-center overflow-hidden block cursor-pointer group/card"
          title={`View ${product.name} Details`}
        >
          <img
            id={`product-image-${product.id}`}
            src={product.image}
            alt={product.alt}
            className="w-full h-full object-cover sm:object-contain transition-transform duration-500 ease-out group-hover/card:scale-[1.02]"
            onError={(e) => {
              if (product.fallbackImage && e.currentTarget.src !== product.fallbackImage) {
                e.currentTarget.src = product.fallbackImage;
              }
            }}
            loading="eager"
          />

          {/* Bottom Overlay Tag */}
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/90 text-white border border-slate-700/80 shadow-lg backdrop-blur-md transition-colors group-hover/card:border-blue-400">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: product.accentColor }}
              />
              <span className="font-medium tracking-wide">{product.name}</span>
              <span className="text-[10px] text-slate-400 group-hover/card:text-white transition-colors ml-1">&rarr; View Page</span>
            </span>
          </div>
        </Link>
      </div>

        {/* Left Arrow Navigation Button */}
        <button
          id="hero-carousel-prev-btn"
          type="button"
          onClick={onPrev}
          aria-label="Previous product"
          className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-200" />
        </button>

        {/* Right Arrow Navigation Button */}
        <button
          id="hero-carousel-next-btn"
          type="button"
          onClick={onNext}
          aria-label="Next product"
          className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-200" />
        </button>
    </div>
  );
}
