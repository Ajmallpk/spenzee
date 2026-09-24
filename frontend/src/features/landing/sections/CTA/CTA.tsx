const CTA = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#001d17]">

      {/* ================= BACKGROUND DECORATION ================= */}

      {/* Large subtle curve */}
      <div className="pointer-events-none absolute -right-20 -top-48 h-[520px] w-[900px] rounded-[50%] border border-emerald-800/40" />

      <div className="pointer-events-none absolute -right-10 -top-32 h-[450px] w-[800px] rounded-[50%] border border-emerald-900/50" />

      {/* Green glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-emerald-900/40 blur-[100px]" />

      {/* Bottom subtle glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[300px] w-[500px] rounded-full bg-emerald-900/30 blur-[100px]" />


      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-10 px-8 py-14 md:px-12 md:py-16 lg:flex-row lg:items-center lg:px-16 lg:py-16">

        {/* ================= LEFT CONTENT ================= */}

        <div className="max-w-3xl">

          {/* Small Label */}
          <p className="text-xs font-bold tracking-[0.12em] text-emerald-200">
            READY TO GET STARTED?
          </p>


          {/* Heading */}
          <h2 className="mt-4 text-3xl font-semibold leading-[1.15] tracking-tight text-white md:text-4xl lg:text-[46px]">
            Take Control of Your Spending
            <br />
            Discover a Smarter Way to Shop
          </h2>


          {/* Description */}
          <p className="mt-5 text-base leading-7 text-slate-300 md:text-lg">
            Join Spenzee today and be part of a smarter,
            brighter financial future.
          </p>

        </div>


        {/* ================= RIGHT CTA ================= */}

        <div className="flex shrink-0 flex-col items-start lg:items-center">

          <button
            type="button"
            className="group inline-flex items-center rounded-xl bg-[#f4f8e9] px-8 py-4 text-base font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
          >
            Get Started Now

            <span className="ml-3 text-xl transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>


          {/* Small text */}
          <p className="mt-4 text-sm font-medium text-slate-400">
            It&apos;s free and only takes a minute.
          </p>

        </div>

      </div>

    </section>
  )
}

export default CTA