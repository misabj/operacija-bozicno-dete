export default function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(16,185,129,0.25),transparent_60%),radial-gradient(900px_500px_at_90%_10%,rgba(59,130,246,0.25),transparent_60%)]" />

      {/* Floating glass blobs */}
      <div className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl animate-[blobFloat_9s_ease-in-out_infinite]" />
      <div className="absolute top-20 -right-10 h-56 w-56 rounded-full bg-sky-300/30 blur-3xl animate-[blobFloat_11s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-pink-300/20 blur-3xl animate-[blobFloat_12s_ease-in-out_infinite]" />

      {/* Faint grid */}
      <img
        src="/occ/logo.png"
        alt="Logo"
        className="absolute inset-0 h-32 w-32 opacity-10 pointer-events-none"
        style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
      />
    </div>
  );
}