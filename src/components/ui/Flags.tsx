export function FlagFR({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.67} viewBox="0 0 30 20" className="rounded-sm flex-shrink-0">
      <rect width="10" height="20" fill="#002395" />
      <rect x="10" width="10" height="20" fill="#FFFFFF" />
      <rect x="20" width="10" height="20" fill="#ED2939" />
    </svg>
  );
}

export function FlagSA({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.67} viewBox="0 0 30 20" className="rounded-sm flex-shrink-0">
      <rect width="30" height="20" fill="#006C35" />
      <text x="15" y="11" textAnchor="middle" fill="#FFFFFF" fontSize="6" fontWeight="bold" fontFamily="Arial">عربي</text>
    </svg>
  );
}

export function FlagGB({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.67} viewBox="0 0 60 40" className="rounded-sm flex-shrink-0">
      <clipPath id="gb-a"><path d="M0 0v40h60V0z"/></clipPath>
      <clipPath id="gb-b"><path d="M30 20 60 0v40zM0 40V20l30 20zM0 0v20l30-20zM60 40V20L30 40z"/></clipPath>
      <g clipPath="url(#gb-a)">
        <path fill="#012169" d="M0 0v40h60V0z"/>
        <path stroke="#fff" strokeWidth="8" d="M0 0l60 40M60 0L0 40"/>
        <path stroke="#C8102E" strokeWidth="4" d="M0 0l60 40M60 0L0 40" clipPath="url(#gb-b)"/>
        <path stroke="#fff" strokeWidth="13" d="M30 0v40M0 20h60"/>
        <path stroke="#C8102E" strokeWidth="8" d="M30 0v40M0 20h60"/>
      </g>
    </svg>
  );
}

export function FlagRU({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.67} viewBox="0 0 30 20" className="rounded-sm flex-shrink-0">
      <rect width="30" height="7" fill="#FFFFFF" />
      <rect y="7" width="30" height="7" fill="#0039A6" />
      <rect y="14" width="30" height="6" fill="#D52B1E" />
    </svg>
  );
}
