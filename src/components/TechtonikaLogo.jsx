import React from 'react';

/**
 * TechtonikaLogo component
 * Faithfully renders the Techtonika Automotive Solutions logo mark and typography
 * Supports 'light' (for white backgrounds) and 'dark' (for dark navy/black backgrounds)
 */
export default function TechtonikaLogo({
  variant = 'light',
  className = 'h-10 w-auto',
  showText = true,
}) {
  const isDark = variant === 'dark';

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={isDark ? '/techtonika-logo-white.svg' : '/techtonika-logo.svg'}
        alt="TECHTONIKA Automotive Solutions"
        className="h-full w-auto object-contain max-h-14"
        loading="eager"
      />
    </div>
  );
}
