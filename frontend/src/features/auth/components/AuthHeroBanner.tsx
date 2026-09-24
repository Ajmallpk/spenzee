import { motion, AnimatePresence } from 'framer-motion'
import { Users, ArrowUpRight } from 'lucide-react'
import logo from '@/assets/dollerlogo.webp'
import { getAuthImage } from '../config/authImages'
import type { AuthMode, AuthRole } from '../types/auth.types'

interface AuthHeroBannerProps {
  mode: AuthMode
  role?: AuthRole
  bannerImage?:
    | string
    | {
        login?: string
        signup?: string
      }
  headline?: {
    login?: string
    signup?: string
  }
  subheadline?: {
    login?: string
    signup?: string
  }
  tagline?: string
}

export const AuthHeroBanner = ({
  mode,
  role = 'user',
  bannerImage,
  headline,
  subheadline,
  tagline,
}: AuthHeroBannerProps) => {
  // Determine active background image
  const getActiveImage = (): string => {
    if (typeof bannerImage === 'string') {
      return bannerImage
    }
    if (bannerImage) {
      return (mode === 'login' ? bannerImage.login : bannerImage.signup) || getAuthImage(role, mode)
    }
    return getAuthImage(role, mode)
  }

  const activeBannerImage = getActiveImage()

  // Dynamic Headings & Subtitles exactly matching the screenshot
  const currentHeadline =
    mode === 'login'
      ? headline?.login || 'YOUR FINANCIAL FUTURE AWAITS!'
      : headline?.signup || 'START YOUR WEALTH JOURNEY TODAY!'

  const currentSubheadline =
    mode === 'login'
      ? subheadline?.login ||
        'Log in to monitor your real-time spend intelligence score, optimize every dollar, and elevate your financial wellness.'
      : subheadline?.signup ||
        'Join thousands of forward-thinking spenders unlocking automated AI budget categorization and smart rewards.'

  const currentTagline = tagline || 'Your journey starts here.'

  const getPortalLabel = () => {
    if (role === 'provider') return 'Provider Portal'
    if (role === 'admin') return 'Admin Portal'
    return 'User Portal'
  }

  return (
    <div className="relative flex h-full min-h-[560px] sm:min-h-[600px] w-full flex-col justify-between overflow-hidden rounded-[24px] p-6 sm:p-8 text-white select-none">
      {/* Background Image with Smooth Crossfade */}
      <AnimatePresence mode="wait">
        <motion.img
          key={activeBannerImage}
          src={activeBannerImage}
          alt="Spenzee Atmosphere"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </AnimatePresence>

      {/* Subtle Dark Vignette & Gradient Overlay for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />

      {/* TOP: Brand Logo (Left) and Portal Badge (Right) */}
      <div className="relative z-10 flex items-center justify-between">
        {/* Spenzee Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Spenzee"
            className="h-8 w-8 object-contain drop-shadow"
          />
          <span className="text-xl font-extrabold tracking-tight text-white drop-shadow">
            Spenzee
          </span>
        </div>

        {/* Portal Badge */}
        <div className="flex items-center gap-1.5 rounded-full bg-black/40 border border-emerald-400/40 px-3 py-1 text-xs font-semibold text-emerald-300 backdrop-blur-md shadow-sm">
          <Users className="h-3.5 w-3.5" />
          <span>{getPortalLabel()}</span>
        </div>
      </div>

      {/* BOTTOM: Headline, Description, Tagline */}
      <div className="relative z-10 max-w-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-md">
              {currentHeadline}
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-slate-200/90 leading-relaxed font-normal drop-shadow">
              {currentSubheadline}
            </p>

            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer group">
              <span>{currentTagline}</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
