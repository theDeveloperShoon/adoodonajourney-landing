export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-6 text-center text-slate-50">
      <div className="pointer-events-none absolute inset-x-0 top-[-12rem] z-0 h-[32rem] bg-gradient-to-br from-emerald-400/20 via-cyan-400/25 to-slate-900 blur-3xl" aria-hidden="true" />
      <div className="relative z-10 space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200/80">Coming Soon</p>
        <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">A Dood On A Journey</h1>
        <p className="text-sm text-slate-200/80">We&rsquo;re putting the finishing touches on something great.</p>
      </div>
    </div>
  );
}
