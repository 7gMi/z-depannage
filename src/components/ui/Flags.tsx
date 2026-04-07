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

export function FlagRO({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.67} viewBox="0 0 30 20" className="rounded-sm flex-shrink-0">
      <rect width="10" height="20" fill="#002B7F" />
      <rect x="10" width="10" height="20" fill="#FCD116" />
      <rect x="20" width="10" height="20" fill="#CE1126" />
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
