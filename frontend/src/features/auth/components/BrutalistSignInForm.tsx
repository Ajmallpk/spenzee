import { useState, type FormEvent } from 'react'
import { ArrowRight, Eye, EyeOff, Loader2 } from 'lucide-react'
import { RoleToggle } from './RoleToggle'
import type { AuthRole, LoginFormData } from '../types/auth.types'

interface BrutalistSignInFormProps {
  role: AuthRole
  onRoleChange: (role: AuthRole) => void
  onSubmit?: (data: LoginFormData) => void | Promise<void>
  onSwitchToSignup: () => void
  onForgotPasswordClick?: () => void
  disabled?: boolean
}

export const BrutalistSignInForm = ({
  role,
  onRoleChange,
  onSubmit,
  onSwitchToSignup,
  onForgotPasswordClick,
  disabled = false,
}: BrutalistSignInFormProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {}
    if (!email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!password) {
      newErrors.password = 'Password is required'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
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
        await onSubmit({ email, password, rememberMe: true, role })
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800))
        alert(`Logged in successfully as ${email} (${role})`)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Header */}
      <p className="text-[11px] font-bold tracking-[0.25em] text-[#68b991] uppercase">
        WELCOME BACK
      </p>

      <h2 className="text-5xl sm:text-6xl font-black text-[#f7f8f6] uppercase tracking-tight mt-1 mb-5">
        SIGN IN.
      </h2>

      {/* Role Toggle: USER | PROVIDER */}
      <RoleToggle role={role} onChange={onRoleChange} disabled={disabled || isLoading} />

      {/* Google Sign In */}
      <button
        type="button"
        disabled={disabled || isLoading}
        onClick={() => alert(`Google sign-in for ${role} initiated.`)}
        className="w-full flex items-center justify-center gap-3 bg-[#f7f8f6] text-[#0b1914] py-3 rounded-md font-bold text-xs sm:text-sm hover:bg-white transition-all shadow-sm mb-6 cursor-pointer"
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
        <span>Sign in with Google</span>
      </button>

      {/* Divider */}
      <div className="relative flex items-center justify-center my-6">
        <div className="w-full border-t border-emerald-900/40" />
        <span className="absolute bg-[#09120e] px-4 text-[10px] font-bold tracking-widest text-emerald-200/50 uppercase">
          OR
        </span>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Email Address */}
        <div>
          <label
            htmlFor="signin-email"
            className="text-[10px] font-bold tracking-[0.2em] text-emerald-200/70 uppercase block mb-1.5"
          >
            EMAIL ADDRESS
          </label>
          <input
            id="signin-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
            }}
            placeholder="you@example.com"
            disabled={disabled || isLoading}
            className="w-full bg-transparent border-b border-emerald-800/60 py-2.5 text-sm text-[#f7f8f6] placeholder-slate-500 focus:border-[#68b991] focus:outline-none transition-colors"
          />
          {errors.email && (
            <p className="text-xs font-medium text-red-400 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="signin-password"
            className="text-[10px] font-bold tracking-[0.2em] text-emerald-200/70 uppercase block mb-1.5"
          >
            PASSWORD
          </label>
          <div className="relative">
            <input
              id="signin-password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }))
              }}
              placeholder="Enter your password"
              disabled={disabled || isLoading}
              className="w-full bg-transparent border-b border-emerald-800/60 py-2.5 pr-9 text-sm text-[#f7f8f6] placeholder-slate-500 focus:border-[#68b991] focus:outline-none transition-colors"
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

        {/* Credentials / Forgot Row */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-[10px] font-bold tracking-widest text-emerald-300/40 uppercase">
            CREDENTIALS
          </span>
          <button
            type="button"
            onClick={onForgotPasswordClick}
            className="text-[10px] font-bold tracking-widest text-[#68b991] hover:text-white underline uppercase transition-colors cursor-pointer"
          >
            FORGOT?
          </button>
        </div>

        {/* Iconic Brutalist Action Button: GO [ → ] SIGN IN */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={disabled || isLoading}
            className="group flex items-center gap-4 text-left cursor-pointer transition-transform active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="text-5xl sm:text-6xl font-black tracking-tight text-[#f7f8f6] group-hover:text-[#68b991] transition-colors leading-none">
              GO
            </span>
            <div className="h-12 w-12 flex items-center justify-center border border-white/80 rounded-none group-hover:border-[#68b991] group-hover:bg-[#68b991] transition-all">
              {isLoading ? (
                <Loader2 className="h-5 w-5 text-white animate-spin" />
              ) : (
                <ArrowRight className="h-5 w-5 text-white group-hover:text-[#0b1914] transition-all group-hover:translate-x-0.5" />
              )}
            </div>
            <span className="text-[11px] font-bold tracking-[0.25em] text-emerald-200/70 group-hover:text-white uppercase transition-colors">
              SIGN IN
            </span>
          </button>
        </div>

        {/* Bottom Switcher: NEW HERE? CREATE ACCOUNT -> */}
        <div className="flex items-center justify-between pt-8 border-t border-emerald-900/40 text-[10px] font-bold tracking-widest uppercase">
          <span className="text-emerald-300/40">NEW HERE?</span>
          <button
            type="button"
            onClick={onSwitchToSignup}
            className="text-[#68b991] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>CREATE ACCOUNT</span>
            <span>→</span>
          </button>
        </div>
      </form>
    </div>
  )
}
