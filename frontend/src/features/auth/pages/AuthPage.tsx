import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/features/landing/sections/Navbar/Navbar'
import authBgSignin from '@/assets/authbgsingin.png'
import authBgSignup from '@/assets/authsingupbg.png'
import { EditorialLeftHero } from '../components/EditorialLeftHero'
import { BrutalistSignInForm } from '../components/BrutalistSignInForm'
import { BrutalistSignUpForm } from '../components/BrutalistSignUpForm'
import type { AuthMode, AuthRole, AuthPageProps } from '../types/auth.types'

export const AuthPage = ({
  role: initialRole = 'user',
  initialMode = 'login',
  onLoginSubmit,
  onSignupSubmit,
  onForgotPasswordClick,
}: AuthPageProps) => {
  const navigate = useNavigate()
  const location = useLocation()

  // Determine mode from route path (/login vs /signup) or fallback to initialMode
  const getInitialModeFromPath = (): AuthMode => {
    if (location.pathname.includes('signup')) return 'signup'
    if (location.pathname.includes('login')) return 'login'
    return initialMode
  }

  const [mode, setMode] = useState<AuthMode>(getInitialModeFromPath)
  const [currentRole, setCurrentRole] = useState<AuthRole>(
    location.pathname.includes('provider') ? 'provider' : initialRole
  )

  // Sync mode and role if pathname changes
  useEffect(() => {
    if (location.pathname.includes('signup')) {
      setMode('signup')
    } else if (location.pathname.includes('login')) {
      setMode('login')
    }

    if (location.pathname.includes('provider')) {
      setCurrentRole('provider')
    }
  }, [location.pathname])

  const handleModeChange = (newMode: AuthMode) => {
    setMode(newMode)
    const prefix = currentRole === 'provider' ? '/provider' : ''
    if (newMode === 'signup' && !location.pathname.includes('signup')) {
      navigate(`${prefix}/signup`, { replace: true })
    } else if (newMode === 'login' && !location.pathname.includes('login')) {
      navigate(`${prefix}/login`, { replace: true })
    }
  }

  const handleRoleChange = (newRole: AuthRole) => {
    setCurrentRole(newRole)
    const targetMode = mode === 'signup' ? 'signup' : 'login'
    if (newRole === 'provider') {
      navigate(`/provider/${targetMode}`, { replace: true })
    } else {
      navigate(`/${targetMode}`, { replace: true })
    }
  }

  return (
    <div className="relative min-h-screen w-full bg-[#08120e] text-[#f7f8f6] selection:bg-[#68b991] selection:text-[#0b1914] overflow-x-hidden">
      {/* 1. REUSED LANDING PAGE NAVBAR FIXED AT TOP (TRANSPARENT GLASS ON AUTH) */}
      <div className="fixed left-0 right-0 top-0 z-50">
        <Navbar transparent />
      </div>

      {/* 2. DYNAMIC BACKGROUND IMAGE: authbgsingin.png for Sign In, authsingupbg.png for Sign Up */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.img
            key={mode === 'login' ? 'bg-signin' : 'bg-signup'}
            src={mode === 'login' ? authBgSignin : authBgSignup}
            alt="Auth Background"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="h-full w-full object-cover object-center"
          />
        </AnimatePresence>
        {/* Soft Vignette Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#08120e]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08120e] via-transparent to-[#08120e]/70" />
      </div>

      {/* Subtle Ambient Lighting: Spenzee Green & Soft Cream Aura */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-32 -left-32 h-[550px] w-[550px] rounded-full bg-[#104632]/20 blur-[160px]" />
        <div className="absolute top-1/2 -right-32 h-[500px] w-[500px] rounded-full bg-[#237556]/15 blur-[170px]" />
      </div>

      {/* Main Content Placed Directly on Page Background Canvas */}
      <main className="relative z-10 w-full max-w-[1440px] mx-auto min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-12 flex flex-col justify-center px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch w-full">
          
          {/* Left Column: Architectural Editorial Hero */}
          <div className="flex flex-col justify-center">
            <EditorialLeftHero mode={mode} />
          </div>

          {/* Right Column: Brutalist Form (Sign In / Sign Up with Role Toggle) */}
          <div className="flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-6 sm:py-8">
            <AnimatePresence mode="wait">
              {mode === 'login' ? (
                <motion.div
                  key={`signin-${currentRole}`}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                >
                  <BrutalistSignInForm
                    role={currentRole}
                    onRoleChange={handleRoleChange}
                    onSubmit={onLoginSubmit}
                    onSwitchToSignup={() => handleModeChange('signup')}
                    onForgotPasswordClick={onForgotPasswordClick || (() => navigate('/forgot-password'))}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key={`signup-${currentRole}`}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                >
                  <BrutalistSignUpForm
                    role={currentRole}
                    onRoleChange={handleRoleChange}
                    onSubmit={onSignupSubmit}
                    onSwitchToLogin={() => handleModeChange('login')}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </main>
    </div>
  )
}
