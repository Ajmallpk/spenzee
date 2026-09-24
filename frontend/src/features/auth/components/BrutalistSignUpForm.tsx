import { useState, type FormEvent } from 'react'
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, Loader2 } from 'lucide-react'
import { RoleToggle } from './RoleToggle'
import type { AuthRole, SignupFormData } from '../types/auth.types'

interface BrutalistSignUpFormProps {
  role: AuthRole
  onRoleChange: (role: AuthRole) => void
  onSubmit?: (data: SignupFormData) => void | Promise<void>
  onSwitchToLogin: () => void
  disabled?: boolean
}

export const BrutalistSignUpForm = ({
  role,
  onRoleChange,
  onSubmit,
  onSwitchToLogin,
  disabled = false,
}: BrutalistSignUpFormProps) => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [errors, setErrors] = useState<{
    fullName?: string
    email?: string
    password?: string
    confirmPassword?: string
    agreeTerms?: string
  }>({})

  const validate = () => {
    const newErrors: typeof errors = {}

    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters'
    }

    if (!email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!password) {
      newErrors.password = 'Password is required'
    } else if (password.length < 8) {
      newErrors.password = 'Minimum 8 characters required'
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm your password'
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    if (!agreeTerms) {
      newErrors.agreeTerms = 'You must agree to continue'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsLoading(true)
    try {
      if (onSubmit) {
        await onSubmit({ fullName, email, password, confirmPassword, agreeTerms, role })
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800))
        alert(`Account created successfully for ${fullName} (${role})!`)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Top Pre-label & Already have an account Switcher */}
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-bold tracking-[0.25em] text-[#68b991] uppercase">
          CREATE ACCOUNT
        </p>

        <button
          type="button"
          onClick={onSwitchToLogin}
          className="text-xs text-slate-300 font-semibold hover:text-[#68b991] transition-colors cursor-pointer flex items-center gap-1"
        >
          <span>Already have an account?</span>
          <span className="font-bold underline text-white hover:text-[#68b991]">Sign in →</span>
        </button>
      </div>

      <h2 className="text-5xl sm:text-6xl font-black text-[#f7f8f6] uppercase tracking-tight mt-1 mb-5">
        SIGN UP.
      </h2>

      {/* Role Toggle: USER | PROVIDER */}
      <RoleToggle role={role} onChange={onRoleChange} disabled={disabled || isLoading} />

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="signup-name"
            className="text-[10px] font-bold tracking-[0.2em] text-emerald-200/70 uppercase block mb-1.5"
          >
            FULL NAME
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center text-slate-400">
              <User className="h-4 w-4" />
            </div>
            <input
              id="signup-name"
              type="text"
              autoComplete="name"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value)
                if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }))
              }}
              placeholder="Enter your full name"
              disabled={disabled || isLoading}
              className="w-full bg-transparent border-b border-emerald-800/60 py-2.5 pl-7 text-sm text-[#f7f8f6] placeholder-slate-500 focus:border-[#68b991] focus:outline-none transition-colors"
            />
          </div>
          {errors.fullName && (
            <p className="text-xs font-medium text-red-400 mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor="signup-email"
            className="text-[10px] font-bold tracking-[0.2em] text-emerald-200/70 uppercase block mb-1.5"
          >
            EMAIL ADDRESS
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center text-slate-400">
              <Mail className="h-4 w-4" />
            </div>
            <input
              id="signup-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
              }}
              placeholder="you@example.com"
              disabled={disabled || isLoading}
              className="w-full bg-transparent border-b border-emerald-800/60 py-2.5 pl-7 text-sm text-[#f7f8f6] placeholder-slate-500 focus:border-[#68b991] focus:outline-none transition-colors"
            />
          </div>
          {errors.email && (
            <p className="text-xs font-medium text-red-400 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="signup-password"
            className="text-[10px] font-bold tracking-[0.2em] text-emerald-200/70 uppercase block mb-1.5"
          >
            PASSWORD
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center text-slate-400">
              <Lock className="h-4 w-4" />
            </div>
            <input
              id="signup-password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }))
              }}
              placeholder="Create a password"
              disabled={disabled || isLoading}
              className="w-full bg-transparent border-b border-emerald-800/60 py-2.5 pl-7 pr-9 text-sm text-[#f7f8f6] placeholder-slate-500 focus:border-[#68b991] focus:outline-none transition-colors"
            />
            <button
              type="button"
              tabIndex={-1}
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              className="absolute inset-y-0 right-0 flex items-center pr-1 text-slate-400 hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {errors.password && (
            <p className="text-xs font-medium text-red-400 mt-1">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="signup-confirm-password"
            className="text-[10px] font-bold tracking-[0.2em] text-emerald-200/70 uppercase block mb-1.5"
          >
            CONFIRM PASSWORD
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center text-slate-400">
              <Lock className="h-4 w-4" />
            </div>
            <input
              id="signup-confirm-password"
              type={showConfirmPassword ? 'text' : 'password'}
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value)
                if (errors.confirmPassword) {
                  setErrors((prev) => ({ ...prev, confirmPassword: undefined }))
                }
              }}
              placeholder="Confirm your password"
              disabled={disabled || isLoading}
              className="w-full bg-transparent border-b border-emerald-800/60 py-2.5 pl-7 pr-9 text-sm text-[#f7f8f6] placeholder-slate-500 focus:border-[#68b991] focus:outline-none transition-colors"
            />
            <button
              type="button"
              tabIndex={-1}
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              className="absolute inset-y-0 right-0 flex items-center pr-1 text-slate-400 hover:text-white transition-colors"
            >
              {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-xs font-medium text-red-400 mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Agree to terms */}
        <div className="pt-1">
          <label className="flex items-start gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => {
                setAgreeTerms(e.target.checked)
                if (errors.agreeTerms) setErrors((prev) => ({ ...prev, agreeTerms: undefined }))
              }}
              className="mt-0.5 h-4 w-4 rounded-xs border-emerald-700 bg-transparent text-[#68b991] focus:ring-[#68b991] accent-[#237556] cursor-pointer"
            />
            <span className="text-xs text-slate-300 leading-snug">
              I agree to the{' '}
              <a href="#terms" className="font-semibold text-[#68b991] hover:underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#privacy" className="font-semibold text-[#68b991] hover:underline">
                Privacy Policy
              </a>
            </span>
          </label>
          {errors.agreeTerms && (
            <p className="text-xs font-medium text-red-400 mt-1">{errors.agreeTerms}</p>
          )}
        </div>

        {/* Iconic Brutalist Action Button: CREATE [ → ] SIGN UP */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={disabled || isLoading}
            className="group flex items-center gap-4 text-left cursor-pointer transition-transform active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="text-5xl sm:text-6xl font-black tracking-tight text-[#f7f8f6] group-hover:text-[#68b991] transition-colors leading-none">
              CREATE
            </span>
            <div className="h-12 w-12 flex items-center justify-center border border-white/80 rounded-none group-hover:border-[#68b991] group-hover:bg-[#68b991] transition-all">
              {isLoading ? (
                <Loader2 className="h-5 w-5 text-white animate-spin" />
              ) : (
                <ArrowRight className="h-5 w-5 text-white group-hover:text-[#0b1914] transition-all group-hover:translate-x-0.5" />
              )}
            </div>
            <span className="text-[11px] font-bold tracking-[0.25em] text-emerald-200/70 group-hover:text-white uppercase transition-colors">
              SIGN UP
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-5">
          <div className="w-full border-t border-emerald-900/40" />
          <span className="absolute bg-[#09120e] px-4 text-[10px] font-bold tracking-widest text-emerald-200/50 uppercase">
            OR
          </span>
        </div>

        {/* Google Sign Up */}
        <button
          type="button"
          disabled={disabled || isLoading}
          onClick={() => alert(`Google sign-up for ${role} initiated.`)}
          className="w-full flex items-center justify-center gap-3 border border-emerald-800/60 bg-transparent text-[#f7f8f6] py-3 rounded-md font-semibold text-xs sm:text-sm hover:border-[#68b991] hover:bg-emerald-950/40 transition-all shadow-sm cursor-pointer"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              fill="#EA4335"
            />
          </svg>
          <span>Sign up with Google</span>
        </button>
      </form>
    </div>
  )
}
