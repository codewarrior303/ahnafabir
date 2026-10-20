import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#070A09] text-[#E2E8E4] flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden py-16">
      {/* Radial Void Emerald Glow */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,237,100,0.12)_0%,transparent_65%)]"
        aria-hidden="true"
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl w-full text-center mx-auto">
        {/* 404 Hero Number */}
        <h1 className="font-display font-black text-8xl sm:text-9xl md:text-[11rem] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/10 select-none leading-none mb-4">
          404
        </h1>

        {/* Subhead */}
        <h2 className="font-mono text-lg sm:text-xl font-bold uppercase tracking-wider text-warm mb-3">
          DOCUMENT / PAGE LOST IN THE VOID
        </h2>

        {/* Description */}
        <p className="text-gray-400 font-sans text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-8">
          The CV document or page you requested is currently unavailable, undergoing revision, or has been relocated.
        </p>

        {/* Action Button */}
        <div className="flex items-center justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#00ED64] text-[#070A09] font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 hover:scale-105 hover:bg-[#00d057] hover:shadow-[0_0_24px_rgba(0,237,100,0.35)]"
          >
            ← Back To Home
          </Link>
        </div>

        {/* Terminal Card */}
        <div className="mt-12 text-left max-w-md mx-auto p-4 rounded-xl border border-white/10 bg-[#0D1512]/90 backdrop-blur-md font-mono text-xs shadow-2xl">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/5 text-gray-500">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[10px] tracking-wider text-gray-400 uppercase">console.sh</span>
          </div>
          <p className="text-gray-300 mb-1">$ fetch /cv/ahnaf-shahriar-abir.pdf</p>
          <p className="text-red-400 mb-1">→ ERROR 404: Resource Unavailable</p>
          <p className="text-[#00ED64]/90 flex items-center gap-1">
            <span>$ ready for next command</span>
            <span className="inline-block w-1.5 h-3 bg-[#00ED64] animate-pulse" />
          </p>
        </div>
      </div>
    </div>
  );
}
