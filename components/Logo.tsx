
import React from 'react';

/**
 * TOGGLE LOGO STYLE:
 * Set USE_MONOGRAM_LOGO to true to use the custom 'isotype' monogram.
 * Set to false to revert to the abstract geometric SVG logo.
 */
const USE_MONOGRAM_LOGO = true; 

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "size-8" }) => {
  // Original geometric SVG as a fallback or alternative
  const FallbackLogo = () => (
    <div className={`${className} text-ink transition-opacity duration-200 group-hover:opacity-80`}>
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
      </svg>
    </div>
  );

  // Custom Monogram Logo (Inlined for reliability)
  const MonogramLogo = () => (
    <div className={`${className} flex items-center justify-center transition-opacity duration-200 group-hover:opacity-80`}>
      <svg viewBox="0 0 653 653" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path fill="#0F172A" d="m321.85 617.79c-155.86 0-281.85-131.68-281.85-294.59 0-162.91 125.99-294.6 281.85-294.6 155.86 0 281.85 131.69 281.85 294.6 0 162.91-125.99 294.59-281.85 294.59z"/>
        <path fill="#ffffff" d="m97.1 495v-345.1h114.2q38.9 0 65.7 11.8 27 11.9 41 35.1 14.2 23 14.2 56.7 0 23.7-9.7 43.3-9.5 19.5-27.5 33.2-17.8 13.5-42.7 20.2l-12.8 4.9h-107.4l-0.4-37.2h81q24.7 0 41-8.5 16.4-8.8 24.7-23.5 8.3-14.7 8.3-32.4 0-20-7.8-34.9-7.9-14.9-24.7-23-16.6-8.3-42.9-8.3h-68.5v307.7zm250.6 0h-48.9l-83.9-156.4 47.7-0.3 85.1 153.9z"/>
        <path fill="#ffffff" d="m451.7 323.1h125.4v126.4q-6.4 9.5-20.4 21.3-14 11.6-38.6 20.4-24.4 8.5-63.1 8.5-31.5 0-58-10.9-26.3-11.1-45.8-32.2-19.2-21.3-29.9-51.7-10.4-30.6-10.4-69.2v-26.8q0-38.6 9-69 9.3-30.3 27-51.4 17.8-21.3 43.7-32.2 25.8-11.2 59.2-11.2 39.6 0 66.2 13.8 26.7 13.5 41.7 37.4 15.1 24 19.4 54.5h-45.7q-3.1-18.7-12.4-34.1-9-15.4-25.8-24.6-16.8-9.5-43.4-9.5-23.9 0-41.5 8.8-17.5 8.7-28.9 25.1-11.4 16.3-17 39.6-5.5 23.2-5.5 52.3v27.3q0 29.9 6.9 53.3 7.1 23.5 20.1 40.1 13.1 16.4 31.1 24.9 18.2 8.5 40.3 8.5 24.4 0 39.6-4 15.1-4.3 23.7-10 8.5-5.9 13-11.1v-77.3h-79.9z"/>
      </svg>
    </div>
  );

  return USE_MONOGRAM_LOGO ? <MonogramLogo /> : <FallbackLogo />;
};

export default Logo;
