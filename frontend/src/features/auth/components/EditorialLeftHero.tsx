import { motion } from 'framer-motion'
import type { AuthMode } from '../types/auth.types'

interface EditorialLeftHeroProps {
  mode: AuthMode
}

export const EditorialLeftHero = ({ mode }: EditorialLeftHeroProps) => {
  return (
    <div className="relative flex h-full min-h-[620px] w-full flex-col justify-between overflow-hidden p-8 sm:p-12 lg:p-16 select-none">
      {/* Background Vertical Architectural Grid Lines */}
      <div className="pointer-events-none absolute inset-0 grid grid-cols-6 z-0">
        <div className="border-r border-[#68b991]/[0.07] h-full" />
        <div className="border-r border-[#68b991]/[0.07] h-full" />
        <div className="border-r border-[#68b991]/[0.07] h-full" />
        <div className="border-r border-[#68b991]/[0.07] h-full" />
        <div className="border-r border-[#68b991]/[0.07] h-full" />
        <div className="h-full" />
      </div>

      {/* Giant Embossed Watermark "S" in Bottom-Right */}
      <div className="pointer-events-none select-none absolute -bottom-24 -right-10 lg:-right-4 text-[380px] sm:text-[460px] lg:text-[520px] font-bold font-serif leading-none text-[#102b1f]/35 z-0">
        S
      </div>

      {/* Top Pre-label: Line + Tracked Uppercase Text */}
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <div className="h-0.5 w-10 bg-[#68b991]" />
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#dceee4] uppercase">
            {mode === 'login' ? 'FINANCE REIMAGINED' : 'CREATE YOUR ACCOUNT'}
          </span>
        </div>

        {/* Giant Bold Headline */}
        <motion.div
          key={mode}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-8 sm:mt-12"
        >
          {mode === 'login' ? (
            <h1 className="text-6xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight text-[#f7f8f6] leading-[0.92]">
              OWN<br />
              YOUR<br />
              <span className="bg-gradient-to-r from-[#f7f8f6] via-[#dceee4] to-[#68b991] bg-clip-text text-transparent">
                MONEY.
              </span>
            </h1>
          ) : (
            <h1 className="text-6xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight text-[#f7f8f6] leading-[0.92]">
              START<br />
              YOUR<br />
              <span className="bg-gradient-to-r from-[#f7f8f6] via-[#dceee4] to-[#68b991] bg-clip-text text-transparent">
                JOURNEY.
              </span>
            </h1>
          )}

          <p className="mt-6 sm:mt-8 max-w-sm text-sm sm:text-base text-slate-300/80 leading-relaxed font-normal">
            {mode === 'login'
              ? 'Smart expense tracking built for people who take their finances seriously.'
              : 'Join Spenzee and take control of your finances with smarter spending, better insights, and a brighter tomorrow.'}
          </p>
        </motion.div>
      </div>

      {/* Bottom Metrics & Copyright */}
      <div className="relative z-10 mt-12 sm:mt-16">
        {/* Metrics Row */}
        <div className="flex items-center gap-6 sm:gap-8 pb-10 border-b border-emerald-900/40">
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#f7f8f6]">10K+</p>
            <p className="text-[10px] font-bold tracking-widest text-[#68b991] uppercase mt-1">
              USERS
            </p>
          </div>
          <div className="h-8 w-px bg-emerald-800/40" />
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#f7f8f6]">99.9%</p>
            <p className="text-[10px] font-bold tracking-widest text-[#68b991] uppercase mt-1">
              UPTIME
            </p>
          </div>
          <div className="h-8 w-px bg-emerald-800/40" />
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#f7f8f6]">4.9★</p>
            <p className="text-[10px] font-bold tracking-widest text-[#68b991] uppercase mt-1">
              RATING
            </p>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-[10px] font-semibold tracking-widest text-emerald-300/40 uppercase">
          © 2026 SPENZEE STUDIOS
        </p>
      </div>
    </div>
  )
}
