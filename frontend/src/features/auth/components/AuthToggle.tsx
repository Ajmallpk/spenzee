import { motion } from 'framer-motion'
import type { AuthMode } from '../types/auth.types'

interface AuthToggleProps {
  mode: AuthMode
  onChange: (mode: AuthMode) => void
  disabled?: boolean
}

export const AuthToggle = ({ mode, onChange, disabled = false }: AuthToggleProps) => {
  return (
    <div
      role="tablist"
      aria-label="Authentication type"
      className="relative flex w-full items-center rounded-xl bg-slate-100/90 p-1.5 border border-slate-200/70 shadow-inner"
    >
      {/* Login Tab */}
      <button
        type="button"
        role="tab"
        aria-selected={mode === 'login'}
        aria-controls="auth-login-panel"
        disabled={disabled}
        onClick={() => onChange('login')}
        className={`relative z-10 flex-1 py-2 text-center text-sm font-semibold transition-colors duration-200 ${
          mode === 'login'
            ? 'text-slate-950 font-bold'
            : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        {mode === 'login' && (
          <motion.div
            layoutId="auth-tab-indicator"
            className="absolute inset-0 rounded-lg bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-slate-200/60"
            transition={{ type: 'spring', stiffness: 450, damping: 35 }}
          />
        )}
        <span className="relative z-10 flex items-center justify-center gap-1.5">
          <span>Login</span>
        </span>
      </button>

      {/* Sign Up Tab */}
      <button
        type="button"
        role="tab"
        aria-selected={mode === 'signup'}
        aria-controls="auth-signup-panel"
        disabled={disabled}
        onClick={() => onChange('signup')}
        className={`relative z-10 flex-1 py-2 text-center text-sm font-semibold transition-colors duration-200 ${
          mode === 'signup'
            ? 'text-slate-950 font-bold'
            : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        {mode === 'signup' && (
          <motion.div
            layoutId="auth-tab-indicator"
            className="absolute inset-0 rounded-lg bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-slate-200/60"
            transition={{ type: 'spring', stiffness: 450, damping: 35 }}
          />
        )}
        <span className="relative z-10 flex items-center justify-center gap-1.5">
          <span>Sign Up</span>
        </span>
      </button>
    </div>
  )
}
