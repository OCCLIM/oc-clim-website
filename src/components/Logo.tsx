export default function Logo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Divider */}
      <line x1="32" y1="10" x2="32" y2="54" />
      {/* Snowflake left */}
      <line x1="32" y1="18" x2="22" y2="12" />
      <line x1="32" y1="18" x2="24" y2="22" />
      <line x1="32" y1="32" x2="16" y2="22" />
      <line x1="32" y1="32" x2="16" y2="42" />
      <line x1="20" y1="25" x2="16" y2="20" />
      <line x1="20" y1="39" x2="16" y2="44" />
      <line x1="32" y1="46" x2="22" y2="52" />
      <line x1="32" y1="46" x2="24" y2="42" />
      {/* Sun right */}
      <path d="M32 22 A10 10 0 0 1 32 42" />
      <line x1="44" y1="32" x2="52" y2="32" />
      <line x1="42" y1="22" x2="48" y2="16" />
      <line x1="42" y1="42" x2="48" y2="48" />
      <line x1="36" y1="14" x2="38" y2="8" />
      <line x1="36" y1="50" x2="38" y2="56" />
    </svg>
  );
}
